import React from "react";
import { useState } from "react";
import ShowProjects from "../Projects/ShowProjects";
import ProjectsTemplate from "./ProjectsTemplate";

export default function Projects(){
    
    let addProjects = ShowProjects.map(elem => { return <ProjectsTemplate {...elem} />})
    return(
        <div className="projects-section container">
            <h1>Projects</h1>
            <div className="project--items">
                {addProjects}
            </div>
        </div>       
    )
}