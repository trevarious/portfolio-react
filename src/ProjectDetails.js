import React from 'react';
import './ProjectDetails.css';

export default function ProjectDetails({ project, onClose }) {
    return (
        <div className="project-details-view">
            <button className="close-btn" onClick={onClose}>
                Close
            </button>
            <div className="project-details-container">
                <img className="project-image" src={project.image} alt={project.title} />
                <div className="project-details">
                    <h2>{project.title}</h2>
                    <div className="project-description">
                        <h3>Description</h3>
                        <p>{project.description}</p>
                    </div>
                    <div className="tech-stack">
                        <h3>Tech Stack</h3>
                        <p>{project.techStack}</p>
                    </div>
                    {project.website && (
                        <a href={project.website} target="_blank" rel="noopener noreferrer" className="website-link">
                            Visit Website
                        </a>
                    )}
                    {/* Add more details or sections here if needed */}
                </div>
            </div>
        </div>
    );
}
