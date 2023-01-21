import React from "react";
import { useState } from "react";
import ShowProjects from "../Projects/ShowProjects";
import ProjectsTemplate from "./ProjectsTemplate";

export default function Projects(){
    
     

    console.log(ShowProjects.filter((elem, idx)=> console.log(elem)));

    const [addProjects, setAddProjects] = useState(ShowProjects.filter((elem, idx) => idx < 4).map(elem => { return <ProjectsTemplate {...elem} />}));

    function addMoreProjects(){
      setAddProjects(ShowProjects.map(elem => { return <ProjectsTemplate {...elem} />}))
    }

    return(
      <div className="projects-section container" id="projects">
        <div className="inner-projects">
          <div className="main-projects"> 
            <div className="project--card">
                <h1>Projects</h1>
                <div className="project--items">
                   {addProjects}
                </div>
                <div className="projects--seemore">
                {addProjects.length <= 4 && <p onClick={addMoreProjects} className="ps-seemore">See more</p> }
                </div>
            </div>
          </div>
        </div>
      </div>  
    )
}