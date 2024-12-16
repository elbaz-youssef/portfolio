import { useState } from 'react';
import './Portfolio.css';
import { Projects_Content } from '../../constants';
import Preload from '../../components/Preload/Preload';
import {motion} from "framer-motion"

const Portfolio = () => {
    const [projects, setProjects] = useState(Projects_Content.projects);
    const [category, setCategory] = useState('all');

    // Function to get filtered projects
    const getProjects = () => {
        console.log(projects);
        const filteredProjects = category === "all" ? projects : projects.filter(project => project.category === category);

        return filteredProjects.map(project => (
            <motion.div 
                key={project.id} 
                initial={{ scale: 0}}
                animate={{  scale: 1 }}
                exit={{  scale: 0 }}
                transition={{
                    duration: 0.3,
                    type: 'spring',
                    stiffness: 100,
                    damping: 25,
                    delay: Math.random() * 0.3 // Random delay for each project animation
                }}
                className="project-info p-[10px] border-2 border-[var(--secondary-black-color)] rounded-lg max-w-[400px]">
                <div className="project-img group relative">
                    <img src={project.img} alt={project.title} className='h-[300px] rounded-lg'/>
                    <p className='absolute top-1/2 left-1/2 -translate-x-1/2 text-center opacity-0 invisible transition-all duration-500 delay-100 z-20 w-full p-5 group-hover:opacity-100 group-hover:visible group-hover:-translate-y-1/2'>{project.descr}</p>
                </div>
                <h3 className="mt-[10px]">{project.title}</h3>
                <ul className='flex flex-wrap gap-[10px] mt-[10px]'>
                    {project.tools.map((tool, index) => <li key={index} className='w-fit py-1 px-2 border-2 border-[var(--primary-color)] rounded-[10px] text-[var(--primary-color)]'>{tool}</li>)}
                </ul>
            </motion.div>
        ));

    };

    const removeActiveClassFromLists = (links) => {
        links.forEach(link => {
            link.classList.remove('active');
        })
    }

    const addActiveClassToElm = (elm) => {
        console.log(elm);
        const links = document.querySelectorAll('.filter-projects ul li');
        removeActiveClassFromLists(links);
        elm.classList.add("active");
        console.log(elm);
    }

  return (
    <>
        <Preload />
        <motion.section 
            initial={{visibility: "hidden", opacity: 0}}
            animate={{visibility: "visible", opacity: 1}}
            transition={{delay: 1}}
            className="portfolio">
        <div className="container px-[15px] mx-auto">
            <div className="portfolio-container">
                <motion.h2 
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                    className="heading">My <span>Portfolio</span>
                </motion.h2>
                <div className="filter-projects">
                    <ul className="flex justify-center gap-8 flex-wrap mt-5 mb-8">
                        {
                            Projects_Content.filteredProjectsLinks.map((link,index) => 
                                <li key={index + 1} className={`${index === 0 && 'active'}`}>
                                    <a className="transition-color duration-300" onClick={(e) => {setCategory(link.content.toLowerCase()); addActiveClassToElm(e.target.parentElement)}} href={link.href}>{link.content}</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <motion.div 
                    className="projects-content grid grid-cols-[repeat(auto-fit,minmax(250px,400px))] justify-center gap-5 relative">
                    {getProjects()}
                </motion.div> 
            </div>
        </div>
        </motion.section>
    </>
    
  )
}

export default Portfolio
