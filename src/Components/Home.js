import React,{useRef, useEffect, useState} from 'react'
import {Link} from 'react-scroll'
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const {ref, inView} = useInView();


  // const myRef = useRef();
  // const [isInvisible, setIsInvisible] = useState();
  // console.log(isInvisible, 'entry')

  // useEffect(()=>{
  //   const observer = new IntersectionObserver((entries)=>{
  //       const entry = entries[0];
  //       setIsInvisible(entry.isIntersecting)
  //   })
  //   observer.observe(myRef.current)
  // },[])
  console.log(inView)

  return (
    <div className="home-section-main" id="home">
      <section ref={ref} className={`home--section `  }>
          <div className={`left--section-home ${inView ? 'show' : 'hidden'}`}>
            <div className={`intro--home `}>
              <h3>Hello I'm </h3>
                <h1> David Bryan </h1>
              <h3>Aspiring to Becoming Web Developer</h3>  
            </div>
            <div className='home-section-logos'>
              <a href='https://github.com/David-Ramboy'><img src='../Logos/Github.svg' alt='github'/></a>
              <a href='https://www.linkedin.com/in/david-bryan-ramboy-b83284230/'><img src='../Logos/Linkedin.svg' alt='linkedin' /></a>
              <a href='https://www.facebook.com/davidbryanramboy/'><img src='../Logos/facebook.svg' alt='facebook' className='home-intro-facebook'/></a>


            </div>
          </div>
          <div className="right--section-home">
              <h3>Welcome to my Portfolio</h3>
              <div className='right--section-btn'>
                 <Link to="projects" spy={true} smooth={true} offset={0} duration={500} >Check my works</Link>
                <a href='./Images/resume.pdf' download >Resume</a>
              </div>
          </div>
      </section>
    </div>
  )
}

export default Home