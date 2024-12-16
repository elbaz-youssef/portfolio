import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Services.css';
import { Service_Content } from "../../constants";
import {easeOut, motion} from "framer-motion";
import Preload from "../../components/Preload/Preload";

const Services = () => {
 
  const serviceVariants = {
    hidden: {
      opacity: 0,
    },
    visible:(index) => ({
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.05,
        ease: easeOut
      }
      // x: 0,
    })
  }

  // const childAnimation = {
  //   hidden: { opacity: 0, x: -100 },
  //   visible: (index) => ({
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       delay: index * 0.05,
  //       duration: 0.5,
  //       // type: 'spring',
  //       // stiffness: 100,
  //       // damping: 25,
  //     },
  //   })
  // };
  return (
    <>
      <Preload />
      <motion.section 
        initial={{visibility: "hidden", opacity: 0}}
        animate={{visibility: "visible", opacity: 1}}
        transition={{delay: 1}}
        className="services">
        <div className="container px-[15px] mx-auto">
          <div className="services-container">
            <motion.h2 
              className="heading"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            >
              My <span>Services</span>
            </motion.h2>

            <div 
              // initial={{ opacity: 0, y: 30 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ delay: 1, duration: 0.8, staggerChildren: 0.5 }}
              className="services-content grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 mt-7 text-center lg:text-left"
            >
              {Service_Content.map((service, index) => (
                <motion.div 
                  key={index + 1}
                  variants={serviceVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: false,
                    amount: 0.3
                  }}
                  custom={index}
                  className="service group bg-[var(--secondary-black-color)] py-7 px-5 rounded-lg overflow-hidden transition-transform duration-300"
                >
                  <FontAwesomeIcon
                    className="text-[2.5em] text-[var(--primary-color)] translate-y-[-100px] transition-all duration-500 group-hover:translate-y-0"
                    icon={service.icon}
                  />
                  <h3 className="text-[1.3em] font-bold mb-2 mt-1 translate-y-[-30px] duration-500 group-hover:text-[var(--primary-color)] group-hover:translate-y-0">
                    {service.title}
                  </h3>
                  <p className="text-[0.9em] text-[var(--gray-color)] translate-y-[-30px] duration-500 group-hover:translate-y-0">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
    
  );
};

export default Services;
