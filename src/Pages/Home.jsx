import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SocialIcons from '../components/SocialIcons';
import ali from '/images/ali.jpeg';
const Home = () => {
  const [text, setText] = useState('');
  const fullText = "Frontend Developer ";
  const [showButtons, setShowButtons] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        setShowButtons(true);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Hi, I'm <span className="text-white">Ali Raza</span>
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300 min-h-[3rem]"
          >
            {text}
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="ml-1"
            >
              |
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-lg text-gray-400 mb-8"
          >
            I create beautiful, responsive, and user-friendly web applications 
            with modern technologies. Passionate about crafting exceptional 
            digital experiences.
          </motion.p>
          
          {/* {showButtons && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="flex gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-purple-400 rounded-lg font-medium hover:bg-purple-900 hover:bg-opacity-30 transition-all duration-300"
              >
                Contact Me
              </motion.button>
            </motion.div>
          )} */}
          {showButtons && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.8, duration: 0.5 }}
    className="flex gap-4"
  >
    <motion.a
      href="/projects"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
    >
      View My Work
    </motion.a>
    <motion.a
      href="/contact"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 border border-purple-400 rounded-lg font-medium hover:bg-purple-900 hover:bg-opacity-30 transition-all duration-300"
    >
      Contact Me
    </motion.a>
  </motion.div>
)}
          
          {showButtons && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <SocialIcons className="mt-8" />
            </motion.div>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 0.5
              }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-1"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="w-full h-full rounded-full bg-gray-900 overflow-hidden"
              >
                <motion.img 
                  src={ali} 
                  alt="Ali Raza "
                  className="w-full h-full object-cover pt-1"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-5 -right-5 bg-gray-800 p-3 rounded-lg shadow-xl"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 1.5
                  }}
                  className="w-3 h-3 rounded-full bg-green-400"
                />
                <span className="text-sm">Available for work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;


