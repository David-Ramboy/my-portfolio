import React from "react";
import { useInView } from 'react-intersection-observer';

export default function ProjectsTemplate(item){
  const {ref: projects, inView: projectsView} = useInView();
    
    return(
        <div ref={projects} className={`projects--template ${projectsView ? 'project-show' :'project-hidden'} `}>
            <div className="projects--image">
                <img src={`${item.images.img}`}alt="image here"/>
            </div>
            <div className="projects--main">
                
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                
                <div className="projects--button">
                    <a href={item.linkLive} className="projects-btn-visit">Visit</a>
                    <a href={item.githubLink} className="projects-btn-git">Github</a>
                </div>

            </div>
        </div>
    )
}