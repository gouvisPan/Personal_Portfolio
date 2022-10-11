import React from 'react'
import './ProjectSlide.css'
import ProjectTech from './ProjectTech'
import {FiGithub} from 'react-icons/fi'
import {AiOutlineLink} from 'react-icons/ai'

const ProjectSlide = (props) => {
  return (
    <div className='project-container'>
    
          <img src={props.img} className='project-img' ></img>
     
      <div className='project-details'>
          <h4>{props.name}</h4>
          <p>{props.desc}</p>
          <div className="tech-container"> 
             {props.tech.map(tech => <ProjectTech techName = {tech} />)}
          </div>

          <a href={props.git} target="_blank"><FiGithub/> <div className="icon-text">Source Code</div></a>
          <a href={props.demo}  target="_blank" ><AiOutlineLink/><div className="icon-text">Live Demo</div></a>
      </div>
    </div>
  )
}

export default ProjectSlide