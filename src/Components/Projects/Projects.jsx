import React from "react";
import "./Projects.css";
import Bubble from '../../assets/images/Bubble.png'
import {projectData} from '../../assets/Utils/ProjectColection.js'
import Project from './Project.jsx'

function Projects() {
  return (
    <div className="projects">
      <h2>Personal Projects</h2>
      <div className="project-container">
        {projectData.map((project,idx)=><Project title={project.title} img={project.img} url={project.url} />)}
      </div>
    </div>
  );
}

export default Projects;
