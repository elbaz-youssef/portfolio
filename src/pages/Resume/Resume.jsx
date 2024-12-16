
import About from '../../components/About/About';
import Preload from '../../components/Preload/Preload';
import './Resume.css';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <>
      <Preload />
      <motion.section 
        initial={{visibility: "hidden", opacity: 0}}
        animate={{visibility: "visible", opacity: 1}}
        transition={{delay: 1}}
        className="resume">
        <div className="container mx-auto px-[15px]">
          <div className="resume-container">
              <motion.h2 
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="heading">My <span>Resume</span></motion.h2>
              <About />
          </div>
        </div>
    </motion.section>
    </>
  )
}

export default Resume
