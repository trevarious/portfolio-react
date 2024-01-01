import React, { useState, useEffect } from 'react';
import AboutContent from './AboutContent';
import ProjectsContent from './ProjectsContent';
import ContactContent from './ContactContent';
import Loading from './Loading';
import './Portfolio.css';

export default function Portfolio() {
    const [currentContent, setCurrentContent] = useState(null);
    const [loading, setLoading] = useState(false);

    const showAbout = () => {
        if (currentContent !== 'about') {
            setLoading(true);
            setCurrentContent('about');
        }
    };

    const showProjects = () => {
        if (currentContent !== 'projects') {
            setLoading(true);
            setCurrentContent('projects');
        }
    };

    const showContact = () => {
        if (currentContent !== 'contact') {
            setLoading(true);
            setCurrentContent('contact');
        }
    };

    useEffect(() => {
        // Simulate a delay to demonstrate loading screen
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1500); // Adjust this time to match your loading time

        // Clear the timeout if component unmounts before the delay completes
        return () => clearTimeout(delay);
    }, [currentContent]);

    return (
        <div className="portfolio-container">
            <div className="buttons">
                <button onClick={showAbout}>About</button>
                <button onClick={showProjects}>Projects</button>
                <button onClick={showContact}>Contact</button>
            </div>

            <div className="content">
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        {currentContent === 'about' && <AboutContent />}
                        {currentContent === 'projects' && <ProjectsContent />}
                        {currentContent === 'contact' && <ContactContent />}
                    </>
                )}
            </div>
        </div>
    );
}
