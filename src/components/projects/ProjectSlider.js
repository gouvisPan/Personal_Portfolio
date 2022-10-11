import React from 'react'
import ProjectsData from '../../data/ProjectsData'
import ProjectSlide from './ProjectSlide'

const ProjectSlider = () => {
  const [p1,p2,p3] = ProjectsData;

  return (
    <div>
       {[p1,p2,p3].map( project => 
         <ProjectSlide
         name = {project.name}
         desc = {project.description}
         tech = {project.technologiesUsed}
         git  = {project.githubLink}
         demo = {project.demo}
         img  = {project.img}
         >

         </ProjectSlide>
            
        
      )}
    </div>
  )
}

export default ProjectSlider