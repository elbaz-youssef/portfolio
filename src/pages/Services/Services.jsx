import { faChartLine, faCode, faMobileAlt, faPalette, faPencilRuler, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Services.css';
import { Service_Content } from "../../constants";

import {easeInOut, motion} from "framer-motion"
import { childVariants, containerVariants, slide, slideFromOffset, staggerContainer } from "../../variants";

const Services = () => {
  return (
    <section className="services">
      <div className="container px-[15px] mx-auto">
        <div className="services-container">
            <motion.h2 
              className="heading"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >My <span>Services</span></motion.h2>
            <motion.div 
              className="services-content grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 mt-7 text-center lg:text-left"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true, amount: 0.5 }}
            >
                {Service_Content.map((service, index) => 
                  <motion.div 
                    key={index + 1} 
                    variants={slideFromOffset("left")}
                    
                    // transition={{
                    //   ease: easeInOut
                    // }}
                    className="service group bg-[var(--secondary-black-color)] py-7 px-5 rounded-lg overflow-hidden transition-transform duration-300">
                    <FontAwesomeIcon className="text-[2.5em] text-[var(--primary-color)] translate-y-[-100px] transition-all duration-500 group-hover:translate-y-0" icon={service.icon} />
                    <h3 className="text-[1.3em] font-bold mb-2 mt-1 translate-y-[-30px] duration-500 group-hover:text-[var(--primary-color)] group-hover:translate-y-0">{service.title}</h3>
                    <p className="text-[0.9em] text-[var(--gray-color)] translate-y-[-30px] duration-500 group-hover:translate-y-0">{service.description}</p>
                  </motion.div>
                )}
                
                {/* <div className="service">
                    <FontAwesomeIcon icon={faPalette} />
                    <h3>UI/Ux Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut cumque provident sapiente officiis perferendis!</p>
                </div>
                <div className="service">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <h3>E-commerce Solutions</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut cumque provident sapiente officiis perferendis!</p>
                </div>
                <div className="service">
                    <FontAwesomeIcon icon={faChartLine} />
                    <h3>SEO</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut cumque provident sapiente officiis perferendis!</p>
                </div>
                <div className="service">
                    <FontAwesomeIcon icon={faPencilRuler} />
                    <h3>Graphic Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut cumque provident sapiente officiis perferendis!</p>
                </div>
                <div className="service">
                    <FontAwesomeIcon icon={faMobileAlt} />
                    <h3>Mobile App Development</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut cumque provident sapiente officiis perferendis!</p>
                </div> */}
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
