import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';

const SocialIcons = ({ className = '' }) => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/aliraza-div', icon: <FiGithub /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ali-raza-48258b377?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: <FiLinkedin /> },
    // { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: <FiTwitter /> },
    // { name: 'Instagram', url: 'https://instagram.com/yourusername', icon: <FiInstagram /> },
    { name: 'Email', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=apnacode012@gmail.com&su=SUBJECT&body=BODY', icon: <FiMail /> },
  ];
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-purple-900 hover:bg-opacity-30 transition-colors duration-300"
          aria-label={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;