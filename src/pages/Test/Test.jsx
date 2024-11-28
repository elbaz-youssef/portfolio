import { motion } from 'framer-motion';
import { slideIn, fadeIn, bounce, staggerContainer } from '../../variants';

const HomePage = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="container"
    >
      <motion.h1 variants={slideIn} className="text-4xl font-bold">
        Welcome to My Portfolio
      </motion.h1>
      <motion.p variants={fadeIn} className="mt-4 text-lg">
        I am a Front-End Developer passionate about creating amazing experiences.
      </motion.p>
      <motion.button variants={bounce} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
        Get in Touch
      </motion.button>
    </motion.div>
  );
};

export default HomePage;
