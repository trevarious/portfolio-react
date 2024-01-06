// Portfolio.js (updated)
import React, { useState, useEffect } from 'react';
import AboutContent from './AboutContent';
import ProjectsContent from './ProjectsContent';
import ContactContent from './ContactContent';
import FullScreenAnimation from './FullScreenAnimation';
import Loading from './Loading';
import './Portfolio.css';

export default function Portfolio({ currentContent, loading }) {
    const [prevContent, setPrevContent] = useState(null);

    useEffect(() => {
        setPrevContent(currentContent);
    }, [currentContent]);

    return (
        <div className="portfolio-container">
            <div className="content">
                {loading && (prevContent !== currentContent) ? (
                    <Loading />
                ) : (
                    <>
                        {currentContent === 'about' && <AboutContent />}
                        {currentContent === 'projects' && <ProjectsContent />}
                        {currentContent === 'contact' && <ContactContent />}
                        {currentContent === null && <FullScreenAnimation />}
                    </>
                )}
            </div>
        </div>
    );
}
