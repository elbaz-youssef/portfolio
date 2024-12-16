import { faEnvelope, faLocationDot, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Contact.css';
import { faEnvelopeOpen, faMap } from "@fortawesome/free-regular-svg-icons";

import Button from '../../components/Button/Button';

import 'boxicons/css/boxicons.min.css';
import { Contact_Content } from "../../constants";
import Preload from "../../components/Preload/Preload";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
        <Preload />
        <motion.section 
            initial={{visibility: "hidden", opacity: 0}}
            animate={{visibility: "visible", opacity: 1}}
            transition={{delay: 1}}
            className="contact">
        <div className="container px-[15px] mx-auto">
            <motion.h2 
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="heading">Get In <span>Touch</span>
            </motion.h2>
            <div className="contact-container grid grid-cols-[repeat(12,1fr)] gap-5">
                <div className="contact-info relative col-span-12 md:col-span-4 flex flex-wrap gap-5 justify-center">
                    {
                        Contact_Content.contactLinks.map((link, index) => 
                            <div key={index + 1} className="relative py-[30px] ps-[50px] pe-[20px] bg-[var(--secondary-black-color)] rounded-lg min-w-[200px]">
                                <i className={`${link.icon} absolute left-[10px] top-[30px] text-[2em] text-[var(--primary-color)]`}></i>
                                <div>
                                    <h4 className="title text-[var(--white-color)] text-[1.2em]">{link.title}:</h4>
                                    <span className="content block text-[var(--gray-color)] text-[0.9em] mt-[5px]">{link.content}</span>
                                </div>
                            </div>
                        )
                    }              
                </div>
                <div className="contact-form col-span-12 md:col-span-8 mt-5 max-w-[700px]">
                    <div className="flex flex-col sm:flex-row gap-[10px] mb-[15px]">
                        <div className="w-full">
                            <label className="block mb-[3px]" htmlFor="name">Full Name</label>
                            <input className="mb-[15px] border-2 border-[var(#555)] bg-transparent outline-none rounded-[10px] w-full p-[5px]" id="name" type="text" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email">Email Address</label>
                            <input className="mb-[15px] border-2 border-[var(#555)] bg-transparent outline-none rounded-[10px] w-full p-[5px]" id="email" type="text" />
                        </div>
                    </div>
                    <label htmlFor="subject">Your Subject</label>
                    <input className="mb-[15px] border-2 border-[var(#555)] bg-transparent outline-none rounded-[10px] w-full p-[5px]" id="subject" type="text" />
                    <label htmlFor="textarea">Your Message</label>
                    <textarea className="mb-[15px] border-2 border-[var(#555)] bg-transparent outline-none rounded-[10px] w-full p-[5px]" rows="6" id="textarea"/>
                    <Button>Send</Button>
                </div>
            </div>
        </div>
        </motion.section>
    </>
    
  )
}

export default Contact
