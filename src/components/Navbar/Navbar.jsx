import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { faList, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Links } from "../../constants";
import { Link } from "react-router-dom";

const Navbar = ({handleMouseEnter, handleMouseLeave}) => {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);
    const removeActiveClassFromLists = (lists) => {
        lists.forEach(list => list.classList.remove('active'));
    }
    const addActiveClassToElm = (elm) => {
        const lists = document.querySelectorAll('nav ul .list-items > li');
        removeActiveClassFromLists(lists);
        elm.classList.add('active');
    }
  return (
    <>
      <ul>
        <div className={`list-items flex flex-col ${isNavBarOpen && 'active'}`}>
            {
                Links.map((link, index) => 
                    <li key={index + 1} onClick={(e) => {addActiveClassToElm(e.target.parentElement); setIsNavBarOpen(false)}} className={`${index === 0 && 'active'}`}>
                        <Link to={`${link.href}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{link.content}</Link>
                    </li>
                )
            }
            
        </div>
        
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-pointer" onClick={() => setIsNavBarOpen(!isNavBarOpen)}>
            {
                isNavBarOpen?   <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> : 
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
            }
        </span>
      </ul>
    </>
  )
}

export default Navbar
