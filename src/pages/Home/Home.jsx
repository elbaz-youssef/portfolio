

import { useEffect, useRef, useState } from 'react';
import Button from '../../components/Button/Button';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import TypeIt from 'typeit-react';
import { Home_Content } from '../../constants';
import {motion} from 'framer-motion';
import './Home.css';
import { bounce, fadeIn, imgVariation, pageVariants, slide, slideFromOffset, staggerContainer } from '../../variants';
import Preload from '../../components/Preload/Preload';



const Home = ({isMouseActive, setIsMouseActive, handleMouseEnter, handleMouseLeave}) => {
    const [mouseCoordinates, setMouseCoordinates] = useState({x: 0, y: 0});
    const inCursorRef = useRef(null);
    const outCursorRef = useRef(null);
    const handleMouseMove = (event) => {
        setMouseCoordinates({x: event.clientX, y: event.clientY});
    }

    

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
    }, [])
  return (
    <>
      <Preload />
      <motion.section 
        initial={{visibility: "hidden", opacity: 0}}
        animate={{visibility: "visible", opacity: 1}}
        transition={{delay: 1}}
        className="home">
  <div className="container mx-auto px-[15px]">
    <div className="home-container relative h-[calc(100vh-100px)] md:overflow-hidden flex flex-col md:flex-row-reverse md:items-center">
      
      {/* Animated Image Section */}
      <motion.div
        className="home-img w-full md:w-1/2"
        variants={fadeIn(0.5, 0.5, 1.8, "easeIn")}
        initial="hidden"
        animate="visible"
      >
        <div className="img translate-y-0 md:translate-y-[-50px] w-[250px] h-[250px] md:w-full md:h-fit rounded-full md:rounded-none overflow-hidden mx-auto">
          <img src="/portfolio/images/beautiful-person_LE_auto_x4-transformed.jpeg" alt="personal image" />
        </div>
      </motion.div>

      {/* Content Section with Staggered Animation */}
      <motion.div
        className="home-content md:w-1/2"
        // initial="hidden"
        // animate="visible"
        // variants={{
        //   hidden: { opacity: 0, x: -50 },
        //   visible: {
        //     opacity: 1,
        //     x: 0,
        //     transition: { delayChildren: 0.3, staggerChildren: 0.2 },
        //   },
        // }}
      >
        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="content text-center md:text-left">
          <motion.h3
            className="font-bold"
            variants={slide('right', 40, 0.6)}
            initial="hidden"
            animate="visible"
          >
            {Home_Content.greeting}
          </motion.h3>

          <motion.h1
            className="font-bold"
            variants={slide('left', 40, 0.9)}
            initial="hidden"
            animate="visible"
          >
            {Home_Content.jobTitle}
            <span className="job-title text-[var(--primary-color)]">
              <TypeIt
                options={{
                  strings: ["Developer", "Freelancer", "Designer"],
                  speed: 150,
                  backSpeed: 50,
                  cursor: false,
                  loop: true,
                  breakLines: false,
                }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-[var(--gray-color)] mb-5 max-w-[400px] md:max-w-full mx-auto"
            variants={slide('left', 40, 1.2)}
            initial="hidden"
            animate="visible"
          >
            {Home_Content.description}
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap justify-center md:justify-start"
            variants={slide('up', 60, 1.5)}
            initial="hidden"
            animate="visible"
          >
            {Home_Content.links.map((link, index) => (
              <Button
                key={index + 1}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              >
                {link.content}
              </Button>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        className="social-media-icons hidden sm:block absolute right-0 bottom-0"
        // variants={staggerContainer}
        // initial="hidden"
        // animate="visible"
        // transition={{delay: 2.1}}
        // initial={{ opacity: 0, x: 50 }}
        // animate={{ opacity: 1, x: 0 }}
        // transition={{ delay: 1, duration: 0.6 }}
      >
        <SocialMedia handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
      </motion.div>
      
      {/* Mouse Cursor Animations */}
      <span
        style={{ top: `${mouseCoordinates.y}px`, left: `${mouseCoordinates.x}px` }}
        className={`cursor cursor-inside ${isMouseActive && "active"}`}
        ref={inCursorRef}
      ></span>
      <span
        style={{ top: `${mouseCoordinates.y}px`, left: `${mouseCoordinates.x}px` }}
        className={`cursor cursor-outline ${isMouseActive && "inactive"}`}
        ref={outCursorRef}
      ></span>
    </div>
  </div>
</motion.section>
    </>
    
  )

}

export default Home
