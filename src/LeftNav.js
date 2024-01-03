// LeftNav.js
import React from "react";
import './LeftNav.css';
import gitHub from '../src/assets/left-nav-git-link.svg';
import insta from '../src/assets/left-nav-insta-link.svg';
import linkedin from '../src/assets/linkedin-icon.svg';
import logo from '../src/assets/logo.png';
import about from '../src/assets/left-nav-about.svg';
import projects from '../src/assets/left-nav-projects.svg';
import contact from '../src/assets/left-nav-contact.svg';

export default function LeftNav({ setCurrentContent, setLoading }) {
    const handleClick = (content) => {
        setLoading(true);
        setCurrentContent(content);
    };

    const handleButtonClick = (e) => {
        const sparkle = document.createElement('span');
        sparkle.className = 'sparkle';
        sparkle.style.top = `${e.clientY - e.target.getBoundingClientRect().top}px`;
        sparkle.style.left = `${e.clientX - e.target.getBoundingClientRect().left}px`;
        e.currentTarget.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    };

    return (
        <div className="left-nav-container">
            <a id='logo' href="./" ><img id="logo"  src={logo} alt="logo"/></a>

            <div class="links-container">
            <div class="links-middle">
                    <button className="left-nav-btn" onClick={() => handleClick('about')} onMouseDown={handleButtonClick} >
                        <img class="left-nav-links-img-middle" src={about} alt='' />
                        <span class="tooltip">About</span> {/* Tooltip text */}    
                    </button>
                    <button className="left-nav-btn" onClick={() => handleClick('projects')} onMouseDown={handleButtonClick} >
                        <img class="left-nav-links-img-middle" src={projects} alt='' />
                        <span class="tooltip">Projects</span> {/* Tooltip text */}    
                    </button>
                    <button id='contact' className="left-nav-btn" onClick={() => handleClick('contact')} onMouseDown={handleButtonClick} >
                        <a href='mailto:trevorjacobsykes@gmail.com' target='_blank' rel="nonreferrer" >
                        <img class="left-nav-links-img-middle" src={contact} alt='' />
                        <span class="tooltip">Contact</span> {/* Tooltip text */}  
                        </a>  
                    </button>
                </div>

                <div id="left-nav-one" class="links">
                    <a href="https://www.linkedin.com/in/trevor-sykes-717585136/" target="_blank">
                        <img class="left-nav-links-img" src={linkedin} alt="" />
                    </a>
                </div>

                <div id="left-nav-two" class="links">
                    <a href="https://github.com/trevarious" target="_blank">
                        <img class="left-nav-links-img" src={gitHub} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}
