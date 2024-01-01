import React, { useState } from 'react';
import './ProjectsContent.css';
import ProjectDetails from './ProjectDetails';
import project2 from '../src/project2.png';
import project3 from '../src/project3.png';
import project4 from '../src/project4.png';

export default function ProjectsContent() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        { 
            id: 1, 
            image: project2, 
            title: 'Project 1', 
            description: 'Description for Project 1', 
            techStack: 'HTML, CSS, JavaScript, React', 
            website: 'https://example-project1.com' 
        },
        { 
            id: 2, 
            image: project3, 
            title: 'Project 2', 
            description: 'Description for Project 2', 
            techStack: 'Node.js, Express, MongoDB', 
            website: 'https://example-project2.com' 
        },
        { 
            id: 3, 
            image: project4, 
            title: 'Project 3', 
            description: 'Description for Project 3', 
            techStack: 'Python, Django, PostgreSQL', 
            website: null 
        }
    ];

    const showProjectDetails = (project) => {
        setSelectedProject(project);
    };

    const closeProjectDetails = () => {
        setSelectedProject(null);
    };

    return (
        <div className="projects-content">
            <h2>My Projects</h2>
            {selectedProject ? (
                <ProjectDetails project={selectedProject} onClose={closeProjectDetails} />
            ) : (
                <div className="project-grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.id} onClick={() => showProjectDetails(project)}>
                            <img className="project-image" src={project.image} alt={project.title} />
                            <div className="project-details">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}




