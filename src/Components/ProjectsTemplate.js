import React, {useState} from "react";
import { useInView } from 'react-intersection-observer';

export default function ProjectsTemplate(item){
  const {ref: projects, inView: projectsView} = useInView();
    const [numClick, setNumClick] = useState(0)

    const plusDivs = (num)=>{
        if(num == 1){
            if(numClick < item.images.length - 1){
             setNumClick(numClick + num)
                console.log(numClick)
            }
        }
        if(num == -1){
            if(numClick > 0 ){
             setNumClick(prev => prev - 1)
                console.log(numClick)
            }
        }        
    }
    const [areButtonsVisible, setAreButtonsVisible] = useState(false);

    const showButtons = () => {
        if(item.images.length > 1){
            setAreButtonsVisible(true);

        }
    };
  
    const hideButtons = () => {
      setAreButtonsVisible(false);
    };
    return(
        <div ref={projects} className={`projects--template ${projectsView ? 'project-show' :'project-hidden'} `}>
            <div className="projects--image"   onMouseEnter={showButtons}
                onMouseLeave={hideButtons}>
                <div className="img">
                    <img src={`${item.images[numClick]}`}alt="image here"/>
                </div>
                {areButtonsVisible && <button class="button-img button-img-left " onClick={() => {plusDivs(-1)}}>&#10094;</button>}

                {areButtonsVisible && 
                
                <button class="button-img button-img-right" onClick={()=>{plusDivs(1)}}>&#10095;</button>}
                
            </div>
            
            {/* <img class="mySlides" src={`${item.images.img}`} style="width:100%"/> */}

                
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