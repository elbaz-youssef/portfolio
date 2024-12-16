import {useState, useEffect} from "react"
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Preload = ({ children, initialBackgroundColor }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();

  // Track route changes
  useEffect(() => {
    setIsClosing(true); // Start with door closing animation

    const timer = setTimeout(() => {
      setIsClosing(false); // Open the door
      setIsVisible(true);  // Show the content after door opens
    }, 1000); // Duration of the door opening/closing animation

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [location]); // Trigger on route change (page navigation)

  return (
    <>
        <motion.div
            animate={{zIndex: -1}}
            transition={{delay: 1}}
            className="preload-container flex fixed w-[100%] h-[100vh] z-[2000]">
            <motion.div 
                animate={{scaleX: 0, transformOrigin: "left"}}
                transition={{duration: 1, ease: "easeInOut"}}
                className="left w-1/2 h-[100vh] bg-white">
            </motion.div>
            <motion.div 
                animate={{scaleX: 0, transformOrigin: "right"}}
                transition={{duration: 1, ease: "easeInOut"}}
                className="right w-1/2 h-[100vh] bg-white origin-right">
            </motion.div>
        </motion.div>
      
    </>
  );
};

export default Preload;
