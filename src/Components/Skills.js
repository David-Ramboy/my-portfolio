import React from 'react'
import { useInView } from 'react-intersection-observer';
export default function Skills() {
  const {ref: skills, inView: skillsInview} = useInView();
  return (
    <div className='skills--section'>
      <div  className={`left--skills `}>
          <div className={` box--skills web--skills ${skillsInview ? 'skill-show' :'skill-hidden'}`}>
            <div className='logo-skills'>

            </div>
            <div ref={skills} className='skills--name'>
              <h3>WEB DEVELOPMENT</h3>
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <p>REACTJS</p>
              
            </div>
          </div>
          <div className={`box--skills tools--skills ${skillsInview ? 'skill-show' :'skill-hidden'}`}>
            <div className='logo-skills'>

            </div>
            <div className='skills--name'>
              <h3>TOOLS</h3>
              <p>PHOTOSHOP</p>
              <p>FIGMA</p>
              <p>ADOBE ANIMATION</p>
              <p>GIT</p>
              
            </div>
          </div> 
          <div className={`box--skills game-dev-skills ${skillsInview ? 'skill-show' :'skill-hidden'}`}>
            <div className='logo-skills'>

            </div>
            <div className='skills--name'>
              <h3>GAME DEVELOPMENT</h3>
              <p>UNITY</p>
              <p>C#</p>
             </div>
          </div>
          

      </div>
      <div className='right-skills-text'>
        <h3>Skills</h3>
      </div>

    </div>
  )
}
