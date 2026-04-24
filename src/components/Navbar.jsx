import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiHome, 
  FiUser, 
  FiBriefcase, 
  FiMail,
  FiSun,
  FiMoon
} from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || 
           (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const navItems = [
    { name: 'Home', path: '/', icon: <FiHome /> },
    { name: 'About', path: '/about', icon: <FiUser /> },
    { name: 'Projects', path: '/projects', icon: <FiBriefcase /> },
    { name: 'Contact', path: '/contact', icon: <FiMail /> },
  ];

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      {/* Top Bar - Logo, Navigation, and Dark Mode Toggle */}
      <nav className="fixed top-0 w-full z-50 bg-gray-800 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <h1 className="text-xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600" >
                Ali Raza
              </h1>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium flex items-center gap-2 transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-purple-700'
                      : 'text-white-700 dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-400'
                  }`}
                >
                  <motion.span whileHover={{ scale: 1.1 }}>
                    {item.icon}
                  </motion.span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* <motion.button
              onClick={toggleDarkMode}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              <motion.div
                key={darkMode ? 'dark' : 'light'}
                initial={{ opacity: 0, rotate: -30 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {darkMode ? <FiSun /> : <FiMoon />}
              </motion.div>
            </motion.button> */}
          </div>
        </div>
      </nav>

      {/* Bottom Navigation - Mobile Only */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center w-full h-full relative ${
                location.pathname === item.path 
                  ? 'text-purple-500' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-xl"
              >
                {item.icon}
              </motion.div>
              {location.pathname === item.path && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute top-0 w-full h-1 bg-purple-500"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;