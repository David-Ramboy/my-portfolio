import React from "react";

export default function About(){
    return(
        <div className="about container" id="about">
            <div className="about-grid"> 
                <div className="page--navigation">
                    <h1>Skills</h1>
                </div>
                <div className="left-grid grid">
                    {/* <img src="./Images/me.jpg" className="my-profile" alt="my-picture"/> */}
                
                    <div className="my-profile">
                        
                    </div>
                </div>
                <div className="right-grid grid">
                    <h1>Aspiring to become Front-end developer</h1>
                    <p>To express my creativity in design and coding I choose front-end, because
                        of the combination of logic and art, I want to express my passion building
                        website and apply it to the realworld. As Im looking for internship I want
                        to be part of your company.
                    </p>

                    
                </div>
            </div>
        </div>
    )
}