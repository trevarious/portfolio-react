// LeftNav.js
import React from "react";
import './LeftNav.css';
import gitHub from '../src/assets/left-nav-git-link.svg';
import insta from '../src/assets/left-nav-insta-link.svg';
import logo from '../src/assets/logo.png';

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
            <a id='logo' href="./" target="#"><img id="logo"  src={logo} alt="logo"/></a>

            <div class="links-container">
            <div class="links-middle">
                    <button onClick={() => handleClick('about')} onMouseDown={handleButtonClick} >About</button>
                    <button id='projects' onClick={() => handleClick('projects')} onMouseDown={handleButtonClick} >Projects</button>
                    <button onClick={() => handleClick('contact')} onMouseDown={handleButtonClick} >Contact</button>
                </div>
                <div id="left-nav-two" class="links">
                    <a href="https://github.com/trevarious" target="_blank">
                        <img class="left-nav-links-img" src={gitHub} alt="" />
                    </a>
                </div>
                <div id="left-nav-three" class="links">
                    <a href="mailto:trevorjacobsykes@gmail.com">
                        <img class="left-nav-links-img" src={insta} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}
