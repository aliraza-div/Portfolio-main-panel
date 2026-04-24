import { motion } from 'framer-motion';
import SocialIcons from '../components/SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-center md:items-start"
          >
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Ali Raza
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 mt-2 text-center md:text-left"
            >
              Creating beautiful digital experiences
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-8 text-center md:text-left"
          >
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-4">Explore</h3>
              <ul className="space-y-2">
                <motion.li whileHover={{ x: 5 }}>
                  <a href="/about" className="text-gray-400 hover:text-purple-400 transition-colors">About</a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a href="/projects" className="text-gray-400 hover:text-purple-400 transition-colors">Projects</a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
                </motion.li>
              </ul>
            </div>
            {/* --------------- IGNORE --- */}
            {/* <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-4">Legal</h3>
              <ul className="space-y-2">
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a>
                </motion.li>
              </ul>
            </div> */}
            {/* ----------- IGNORE --- */}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Ali Raza. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 mb-10">
            <SocialIcons/>
            <motion.a
              href="#top"
              whileHover={{ y: -2 }}
              className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
            >
              Back to top ↑
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;