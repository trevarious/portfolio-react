// LeftNav.js
import React from "react";
import './LeftNav.css';
import gitHub from '../src/assets/left-nav-git-link.svg';
import insta from '../src/assets/left-nav-insta-link.svg';
import linkedin from '../src/assets/linkedin-icon.svg';
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
            <a id='logo' href="./" ><img id="logo"  src={logo} alt="logo"/></a>

            <div class="links-container">
            <div class="links-middle">
                    <button className="left-nav-btn" onClick={() => handleClick('about')} onMouseDown={handleButtonClick} >About</button>
                    <button className="left-nav-btn" onClick={() => handleClick('projects')} onMouseDown={handleButtonClick} >Works</button>
                    <button id='contact' className="left-nav-btn" onClick={() => handleClick('contact')} onMouseDown={handleButtonClick} >Talk</button>
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
                <div id="left-nav-three" class="links">
                    <a href="mailto:trevorjacobsykes@gmail.com">
                        <img class="left-nav-links-img" src={insta} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}
