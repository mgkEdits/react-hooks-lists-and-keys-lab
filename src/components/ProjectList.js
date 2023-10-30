import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div className="project-item">
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="project">
            <h3>{project.name}</h3>
            <p>{project.about}</p>
            <p className="technologies">Technologies used: {project.technologies.join(", ")}</p>
          </li>
        ))}
      </ul>
        </div>
    </div>
  );
}

export default ProjectList;
