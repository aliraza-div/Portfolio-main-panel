import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Use relative path from public folder
        const response = await fetch('/data/projects.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Verify content type
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          throw new Error(`Expected JSON, got: ${text.substring(0, 30)}...`);
        }

        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
        setProjects([]); // Fallback empty array
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
        <p className="mt-4">Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-red-900/20 p-4 rounded-lg max-w-md mx-auto">
          <p className="text-red-400">Error loading projects: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-3 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Here are some of my recent works with images and code.
        </p>
      </motion.div>
      
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400">No projects found.</p>
          {!error && (
            <p className="text-gray-500 mt-2">Check back later for updates.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Projects;