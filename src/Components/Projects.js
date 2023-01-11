import React from "react";
import { useState } from "react";
import ShowProjects from "../Projects/ShowProjects";
import ProjectsTemplate from "./ProjectsTemplate";

export default function Projects(){
    
    let addProjects = ShowProjects.map(elem => { return <ProjectsTemplate {...elem} />})
    return(
        <div className="projects-section container" id="projects">
        <div className="inner-projects">
          <div className="main-projects"> 
            <div className="project--card">
                <h1>Projects</h1>
                <div className="project--items">
                    {addProjects}
                </div>
                {ShowProjects.length > 4 && <p>See more</p>}
            </div>
            </div>
        </div>
      </div>  
    )
}