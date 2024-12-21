
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.css'
import { faBirthdayCake, faEnvelope, faMapMarkedAlt, faMobile } from '@fortawesome/free-solid-svg-icons'
import { Resume_Content } from '../../constants'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer';
const About = () => {

  const aboutRef = useRef();
  const {scrollYProgress} = useScroll({
    target: aboutRef
  });

  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);


  const { ref, inView } = useInView({
    triggerOnce: false,  // Trigger the animation only once when it's in view
    threshold: 0.7,     // Trigger when 30% of the element is in view
  });

  const staggeredAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 25,
        delayChildren: 0.2, // Delay before starting staggered animation
        staggerChildren: 1, // Delay between each child
      },
    },
  };

  const childAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5
        // type: 'spring',
        // stiffness: 100,
        // damping: 25,
      },
    })
  };
  const educationExperienceAnimation = {
    hidden: {
      opacity: 0,
      y: 100
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
      }
    })
  }
  return (
    <div className="about">
      <div className="about-container flex flex-col md:flex-row gap-5">
        <div className="about-img">
            <div ref={aboutRef} className="img w-[250px] h-[400px] relative border-2 border-[var(--primary-color)] p-5 rounded-xl">
                <img src="/portfolio/images/beautiful-person.png" alt="profile image" width="300" height="300" />
            </div>
        </div>
        <motion.div className="about-content" style={{y}}>
            <h3 className="text-[var(--white-color)] text-[1.3em] mt-5 mb-1 capitalize font-bold">{Resume_Content.about.title1}</h3>
            <p className="text-[var(--gray-color)]">{Resume_Content.about.description1}</p>
            <h3 className="text-[var(--white-color)] text-[1.3em] mt-5 mb-1 font-bold capitalize">{Resume_Content.about.title2}</h3>
            <div className="about-info grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-5">
              {Resume_Content.about.description2.map((aboutInfo,index) => 
                <div key={index + 1} className='flex items-center gap-3'>
                  <FontAwesomeIcon icon={aboutInfo.icon} className='text-[2em] text-[var(--primary-color)]'/>
                  <div>
                    <span className='text-[var(--white-color)] text-[0.9em]'>{aboutInfo.title}</span>
                    <p className='text-[var(--gray-color)] text-[0.9em]'>{aboutInfo.content}</p>
                  </div>
                </div>
              )}
            </div>
        </motion.div>
        
      </div>

      <div
        // ref={ref}
        // variants={staggeredAnimation}
        // initial= "hidden"
        // animate= {inView ? 'visible' : 'hidden'}
        // initial={{ opacity: 0, x: -100 }}
        // animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
        // transition={{ duration: 0.5 }}
        className="awards grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 pt-8 pb-8" >
          {Resume_Content.about.awards.map((award, index) => 
            <motion.div 
              key={index + 1} 
              variants={childAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              custom={index}
                // animate={inView ? 'visible' : 'hidden'}
              className="text-center bg-[var(--secondary-black-color)] py-[30px] px-[20px]" >
              <p className="text-[4em] text-[var(--gray-color]">{award.number}</p>
              <span className='block mt-[-10px]'>{award.title}</span>
            </motion.div>
          )}
          
        </div>
        <div className="skills pt-8 pb-8">
          <h2 className="heading text-left mb-3">My Skills</h2>
          <div className="skills-container grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-10">

            {Resume_Content.skills.map((skill, index) =>
              <div key={index + 1} className="skill">
                <div className="skill-info flex justify-between">
                  <span className="text-[1em]">{skill.title}</span>
                  <span className="border-2 border-[var(--secondary-black-color)] rounded-lg py-[3px] px-[6px] text-[var(--white-color)] text-[0.9em]">{skill.percent}</span>
                </div>
                <div className="skill-bar relative w-full h-[10px] rounded-md bg-[#333] mt-1"></div>
              </div> 
            )}

          </div>
          
        </div>
        <div className="eduandexp mt-8 grid grid-cols-[repeat(auto-fit,minmax(250px,450px))] gap-10">
          <div className="education-container">
            <h2 className="heading text-left mb-[10px]">My Education</h2>
            {
              Resume_Content.education.map((education, index) => 
                <motion.div
                  key={index + 1}
                  variants={educationExperienceAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true}}
                  custom={index}
                  className="education-content bg-[var(--secondary-black-color)] rounded-md py-[30px] px-[20px] mb-5">
                  <span className="year inline-block bg-[var(--primary-color)] text-[var(--white-color)] px-[5px] rounded-md text-[0.8em]">{education.date}</span>
                  <h3 className="title font-[600] text-[var(--white-color)] text-[1.4em] mt-[10px] mb-[10px]">{education.title}</h3>
                  <span className="place text-[var(--primary-color)]">{education.place}</span>
                  <p className="descr text-[var(--gray-color)] mt-5">{education.description}</p>
                </motion.div>
            )}
            
            {/* <div className="education-content">
              <span className="year">2010-2014</span>
              <h3 className="title">Computer Science</h3>
              <span className="place">University Of Morocco</span>
              <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam corporis quam atque suscipit! Dolorum?</p>
            </div>
            <div className="education-content">
              <span className="year">2010-2014</span>
              <h3 className="title">Computer Science</h3>
              <span className="place">University Of Morocco</span>
              <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam corporis quam atque suscipit! Dolorum?</p>
            </div> */}
          </div>
          <div className="experience-container">
          <h2 className="heading text-left mb-[10px]">My Experience</h2>
            {
              Resume_Content.experience.map((experience, index) => 
                <motion.div 
                  key={index + 1} 
                  variants={educationExperienceAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true}}
                  custom={index}
                  className="experience-content bg-[var(--secondary-black-color)] rounded-md py-[30px] px-[20px] mb-5">
                  <span className="year inline-block bg-[var(--primary-color)] text-[var(--white-color)] px-[5px] rounded-md text-[0.8em]">{experience.date}</span>
                  <h3 className="title font-[600] text-[var(--white-color)] text-[1.4em] mt-[10px] mb-[10px]">{experience.title}</h3>
                  <span className="place text-[var(--primary-color)]">{experience.place}</span>
                  <p className="descr text-[var(--gray-color)] mt-5">{experience.description}</p>
                </motion.div>
            )}
            {/* <div className="experience-content">
              <span className="year">2010-2014</span>
              <h3 className="title">Computer Science</h3>
              <span className="place">University Of Morocco</span>
              <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam corporis quam atque suscipit! Dolorum?</p>
            </div>
            <div className="experience-content">
              <span className="year">2010-2014</span>
              <h3 className="title">Computer Science</h3>
              <span className="place">University Of Morocco</span>
              <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam corporis quam atque suscipit! Dolorum?</p>
            </div>
            <div className="experience-content">
              <span className="year">2010-2014</span>
              <h3 className="title">Computer Science</h3>
              <span className="place">University Of Morocco</span>
              <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam corporis quam atque suscipit! Dolorum?</p>
            </div> */}
          </div>
        </div>
    </div>
  )
}

export default About
