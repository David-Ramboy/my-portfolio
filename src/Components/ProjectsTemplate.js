import React from "react";

export default function ProjectsTemplate(item){
    return(
        <div className="projects--template">
            <div className="projects--image">
                <img src={`${item.images.img}`}alt="image here"/>
            </div>
            <div className="projects--main">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                
                <div className="projects--button">
                    <button>Visit</button>
                    <a href={item.githubLink}>Github</a>
                </div>

            </div>
        </div>
    )
}