import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SocialMedia.css';
import { faCodepen, faFacebook, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Home_Content } from '../../constants';
import { slide } from '../../variants';
import { motion } from 'framer-motion';

const SocialMedia = ({handleMouseEnter, handleMouseLeave}) => {

  const determineVariants = (index) => {
    let delay = 2.1;
    switch(index) {
      case 1: {
        delay += 0.1;
        break;
      }
      case 2: {
        delay += 0.2;
        break;
      }
      case 3: {
        delay += 0.3;
        break;
      }
      case 4: {
        delay += 0.4;
        break;
      }
    }
    return index % 2 === 0? slide("right", 80, delay) : slide("left", 80, delay);
  }
  return (
    <>
      {
        Home_Content.socialMediaLinks.map((socialLink,index) => 
          <motion.a 
            variants={determineVariants(index)}
            initial="hidden"
            animate="visible"
            key={index + 1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={socialLink.href} target="_blank">
            <FontAwesomeIcon icon={socialLink.icon} />
          </motion.a>
        )
      }
      
      {/* <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="https://facebook.com" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="https://youtube.com" target="_blank">
        <FontAwesomeIcon icon={faYoutube}/>
      </a>
      <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="https://codepen.io" target="_blank">
        <FontAwesomeIcon icon={faCodepen} />
      </a>
      <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="https://instagram.com" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </a> */}
    </>
  )
}

export default SocialMedia
