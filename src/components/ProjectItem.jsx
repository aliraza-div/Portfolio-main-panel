import { motion } from 'framer-motion';

const ProjectItem = ({ project, isAdmin = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded"
            >
              Live Demo
            </a>
          )}
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;