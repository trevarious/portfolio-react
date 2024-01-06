// LeftNav.js
import React, { useState } from "react";
import './LeftNav.css';
import logo from '../src/assets/logo.png';

export default function LeftNav({ setCurrentContent, setLoading }) {
    const [activeLink, setActiveLink] = useState('');

    const handleClick = (content) => {
        setLoading(true);
        setCurrentContent(content);
        setActiveLink(content);
    };

    const handleButtonClick = (e) => {

    };

    return (
        <div className="left-nav-container">
            <a id='logo' href="./" ><img id="logo"  src={logo} alt="logo"/></a>

            <div class="links-container">
            <div class="links-middle">
                    <div className='links' onClick={() => handleClick('about')} onMouseDown={handleButtonClick} >
                    <a href="#about" class="about-button">
        <svg className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill={activeLink === 'about' ? 'rgb(0, 125, 255' : 'rgb(90, 90, 90)'} d="M12 2C8.14 2 5 5.13 5 9c0 2.1 1.2 4.1 3 5.39V19h8v-4.61c1.8-1.29 3-3.29 3-5.39 0-3.87-3.14-7-7-7zM12 4c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
        About
    </a>  
                    </div>
                    <div class='links' onClick={() => handleClick('projects')} onMouseDown={handleButtonClick} >
                    <a href="#projects" class="projects-button">
        <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill={activeLink === 'projects' ? 'rgb(0, 125, 255' : 'rgb(90, 90, 90)'} d="M6 2h5l2 2h9a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h2zm8 2h4v2h-4V4zM4 8h16v10H4V8z"/>
        </svg>
        Projects
    </a>
                    </div>
                    <div class='links'  onClick={() => handleClick('contact')} onMouseDown={handleButtonClick} >
                    <a href="#contact" class="contact-button">
    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill={activeLink === 'contact' ? 'rgb(0, 125, 255' : 'rgb(90, 90, 90)'}  d="M21 6H3a2 2 0 00-2 2v10a2 2 0 002 2h18a2 2 0 002-2V8a2 2 0 00-2-2zm-1.143 1.143L12 11.486 4.143 7.143h15.714zM3.5 8.8l7.9 4.95a.5.5 0 00.6 0l7.9-4.95V17H3.5V8.8z"/>
    </svg>
    Contact
</a>
                    </div>
                </div>

                <div id="left-nav-one" class="links">
                <a href="YOUR_LINKEDIN_PROFILE_URL" class="linkedin-button">
    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path  d="M20.5 0h-17C1.121 0 0 1.121 0 2.5v17C0 21.879 1.121 23 2.5 23h17c1.379 0 2.5-1.121 2.5-2.5v-17C23 1.121 21.879 0 20.5 0zM7 18H4v-9h3v9zm-1.5-10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM19 18h-3v-4.785c0-1.192-.024-2.715-1.758-2.715-1.76 0-2.031 1.373-2.031 2.793V18h-3v-9h2.955v1.482h.045c.409-.775 1.41-1.592 2.91-1.592 3.102 0 3.678 2.042 3.678 4.695V18z"/>
    </svg>
    LinkedIn
</a>
                </div>

                <div id="left-nav-two" class="links">
                <a href="YOUR_GITHUB_PROFILE_URL" class="github-button">
        <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.74-2.51.46-3.04-1.21-3.04-1.21-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.91.06 1.39.94 1.39.94.81 1.39 2.13.99 2.65.76.08-.59.31-.99.57-1.22-1.99-.22-4.1-1-4.1-4.45 0-1 .35-1.82.94-2.47-.09-.22-.41-1.17.09-2.44 0 0 .77-.25 2.5.94.72-.2 1.49-.3 2.26-.3.77 0 1.54.1 2.26.3 1.73-1.19 2.5-.94 2.5-.94.5 1.27.18 2.22.09 2.44.59.65.94 1.47.94 2.47 0 3.46-2.12 4.23-4.14 4.45.32.28.62.83.62 1.67 0 1.21-.01 2.19-.01 2.48 0 .27.18.58.69.48A10.015 10.015 0 0022 12c0-5.52-4.48-10-10-10z"/>
        </svg>
        GitHub
    </a>
                </div>
            </div>
        </div>
    );
}
