import React from "react";
import ProjectsData from "../../data/ProjectsData";
import ProjectSlide from "./ProjectSlide";

const ProjectSlider = () => {
  const [p1, p2, p3] = ProjectsData;

  return (
    <div>
      {[p1, p2, p3].map((project, i) => (
        <ProjectSlide
          key={project.git}
          name={project.name}
          desc={project.description}
          tech={project.technologiesUsed}
          git={project.githubLink}
          demo={project.demo}
          imgs={project.imgs}
          android={project.android}
          order={i % 2}
        ></ProjectSlide>
      ))}
    </div>
  );
};

export default ProjectSlider;
