import React from "react";
import ProjectsData from "../../data/ProjectsData";
import ProjectSlide from "./ProjectSlide";

const ProjectSlider = () => {
  const [p1,p2] = ProjectsData

  return (
    <div className="projects-container">
      {[p1,p2].map((project,i) => (
        <ProjectSlide
          name={project.name}
          desc={project.description}
          tech={project.technologiesUsed}
          git={project.githubLink}
          demo={project.demo}
          imgs={project.imgs}
          android={project.android}
          order={i%2}
        ></ProjectSlide>
      ))}
    </div>
  );
};

export default ProjectSlider;
