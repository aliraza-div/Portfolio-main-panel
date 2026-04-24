import { motion } from 'framer-motion';

const SkillCard = ({ skill }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-lg p-4 shadow-lg"
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-lg text-white">{skill.name}</h4>
        <div className="text-purple-400">
          {/* You can add icons here based on skill */}
          {skill.icon === 'react' && (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 18.5c-3.5 0-6.5-1.5-8.5-4.5 2-3 5-4.5 8.5-4.5s6.5 1.5 8.5 4.5c-2 3-5 4.5-8.5 4.5z"/>
              <path d="M12 18.5c-3.5 0-6.5-1.5-8.5-4.5 2-3 5-4.5 8.5-4.5s6.5 1.5 8.5 4.5c-2 3-5 4.5-8.5 4.5z" opacity="0.3"/>
              <path d="M12 18.5c-3.5 0-6.5-1.5-8.5-4.5 2-3 5-4.5 8.5-4.5s6.5 1.5 8.5 4.5c-2 3-5 4.5-8.5 4.5z" opacity="0.2"/>
            </svg>
          )}
        </div>
      </div>
      
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1 }}
          className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
      
      <p className="text-right text-sm text-gray-400 mt-1">
        {skill.level}%
      </p>
    </motion.div>
  );
};

export default SkillCard;