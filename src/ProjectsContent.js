import React, { useState } from 'react';
import './ProjectsContent.css';
import ProjectDetails from './ProjectDetails';
import project2 from '../src/assets/project2.png';
import project3 from '../src/assets/project3.png';
import project4 from '../src/assets/project4.png';

export default function ProjectsContent() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        { 
            id: 1, 
            image: project2, 
            title: 'Timeless Wic', 
            description: 'A simple UI design example showcasing placeholder product. Intended to display custom CSS and JavaScript for a fully functional menu naviation with smooth transitions.', 
            techStack: 'HTML, CSS, JavaScript', 
            website: 'https://trevarious.github.io/Timeless-Wik/' 
        },
        { 
            id: 2, 
            image: project3, 
            title: 'Crypto Scope', 
            description: 'A crypto search interface allowing users to quickly search crypto assets and display its price and a chart. Intended to display asynchronous JavaScript skills as well as API data fetching and manipulation of data to display to UI.', 
            techStack: 'JavaScript, Google Charts, CSS, HTML', 
            website: 'https://trevarious.github.io/Crypto-Scope/' 
        },
        { 
            id: 3, 
            image: project4, 
            title: 'Conways Game Of Life', 
            description: 'My version of the popular cell automation game. Intended to display knowlege of CSS and JavaScript by dynamically animating cells.', 
            techStack: 'JavaScript, CSS, HTML', 
            website: 'https://trevarious.github.io/Conways-Game-Of-Life/' 
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
                                {/* <p>{project.description}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}




