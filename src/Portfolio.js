// Portfolio.js
import React from 'react';
import AboutContent from './AboutContent';
import ProjectsContent from './ProjectsContent';
import ContactContent from './ContactContent';
import FullScreenAnimation from './FullScreenAnimation'
import Loading from './Loading';
import './Portfolio.css';

export default function Portfolio({ currentContent, loading }) {
    return (
        <div className="portfolio-container">
            <div className="content">
                {loading ? (
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
