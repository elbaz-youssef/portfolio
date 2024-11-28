import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import './Header.css';
import { Link } from 'react-router-dom';
import { slide } from '../../variants';

const Header = ({handleMouseEnter, handleMouseLeave}) => {
  return (
    <motion.header 
      // initial={{y: -100}}
      // animate={{y: 0}}
      // transition={{duration: 0.5}}
      className='fixed w-[100%] top-0 left-0 z-50'>
      <div className="container mx-auto px-[15px]">
        <div className="header-container flex justify-between items-center h-[60px]">
            <motion.div 
                variants={slide("up", 60, 0)}
                initial="hidden"
                animate="visible"
                className="logo">
                <Link to={`/`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="text-[var(--primary-color)]">Youssef.</Link>
            </motion.div>
            <motion.nav
              variants={slide("up", 60, 0.3)}
              initial="hidden"
              animate="visible"
            >
                <Navbar 
                  handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
            </motion.nav>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
