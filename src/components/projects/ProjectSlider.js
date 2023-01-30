import React from "react";
import ProjectsData from "../../data/ProjectsData";
import ProjectSlide from "./ProjectSlide";

const ProjectSlider = () => {
  const projects = ProjectsData;

  return (
    <div>
      {projects.map((project, i) => (
        <ProjectSlide
          key={project.githubLink}
          name={project.name}
          desc={project.description}
          tech={project.technologiesUsed}
          git={project.githubLink}
          demo={project.demoLink}
          imgs={project.imgs}
          android={project.android}
          order={i % 2}
        ></ProjectSlide>
      ))}
    </div>
  );
};

export default ProjectSlider;
