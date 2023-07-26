import React from "react";

export default function About(){
    return(
        <div className="about " id="about">
            <div className="about-grid"> 
                <div className="about--text">
                    <h3>About me</h3>
                </div>
                <div className="left-grid grid">
                    {/* <img src="./Images/me.jpg" className="my-profile" alt="my-picture"/> */}
                
                    <div className="my-profile">
                        
                    </div>
                </div>
                <div className="right-grid grid">
                    <p>Hello, I am <b>David Bryan A. Ramboy</b>, a graduate of the University of Rizal System in Binangonan, Rizal, where I completed my Bachelor of Science in Information Technology. I am passionate about expressing my creativity in design and coding, where I can combine logic and art to create meaningful websites that can be applied to the real world. </p>
                    
                </div>
            </div>
        </div>
    )
}