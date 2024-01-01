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

    return (
        <div className="left-nav-container">
            <a id='logo' href="./" target="#"><img id="logo"  src={logo} alt="logo"/></a>

            <div class="links-container">
            <div class="links">
                    <button onClick={() => handleClick('about')}>About</button>
                    <button onClick={() => handleClick('projects')}>Projects</button>
                    <button onClick={() => handleClick('contact')}>Contact</button>
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
