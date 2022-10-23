import React from "react";

export default function About(){
    return(
        <div className="about container">
            <div className="left-grid grid">
                <img src="./Images/me.jpg" className="my-profile" alt="my-picture"/>
            </div>
            <div className="right-grid grid">
                <h1>Aspiring to become Front-end developer</h1>
                <p>To express my creativity in design and coding I choose front-end, because
                    of the combination of logic and art, I want to express my passion building
                    website and apply it to the realworld. As Im looking for internship I want
                    to be part of your company.
                </p>

                <p>Skills</p>
                <div className="skills--about">
                    <div className="logo-skills"><img src="./Logos/css.png" alt="css" className="logo-img"/></div>
                    <div className="logo-skills"><img src="./Logos/html.png" alt="hmtl" className="logo-img"/></div>
                    <div className="logo-skills"><img src="./Logos/js.png" alt="JS" className="logo-img"/></div>
                    <div className="logo-skills"><img src="./Logos/react.png" alt="React" className="logo-img"/></div>
                </div>
            </div>
        </div>
    )
}