import { motion } from 'framer-motion';
// import ContactForm from '../components/ContactForm';
import SocialIcons from '../components/SocialIcons';

const Contact = () => {
  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </motion.div>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <ContactForm />
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 bg-gray-800 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-900 bg-opacity-30 rounded-lg">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-400">apnacode012@example.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-900 bg-opacity-30 rounded-lg">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-400">+923109580240</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-900 bg-opacity-30 rounded-lg">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.52 3.48A11.79 11.79 0 0 0 12.06 0C5.64 0 .41 5.23.41 11.65c0 2.04.54 4.02 1.57 5.76L0 24l6.75-1.96a11.6 11.6 0 0 0 5.31 1.34h.01c6.42 0 11.65-5.23 11.65-11.65 0-3.11-1.21-6.03-3.2-8.05zM12.07 21.3a9.6 9.6 0 0 1-4.88-1.33l-.35-.2-4 1.16 1.2-3.89-.22-.4a9.6 9.6 0 1 1 8.25 4.66zm5.27-7.2c-.29-.14-1.72-.85-1.99-.94-.27-.1-.47-.14-.67.14-.2.29-.77.94-.95 1.13-.18.2-.35.22-.64.07-.29-.14-1.23-.45-2.34-1.44a8.7 8.7 0 0 1-1.62-2.01c-.17-.29-.02-.45.13-.6.13-.13.29-.35.43-.52.14-.18.18-.29.27-.48.09-.2.05-.36-.02-.5-.07-.14-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.36-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.02.14.2 2.02 3.08 4.9 4.32.68.29 1.21.46 1.63.59.69.22 1.32.19 1.82.12.56-.08 1.72-.7 1.97-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Watsapp</h4>
                <p className="text-gray-400">+923109580240</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-900 bg-opacity-30 rounded-lg">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-gray-400">Khanewal , punjab</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
            <SocialIcons />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;