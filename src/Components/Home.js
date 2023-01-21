import React from 'react'

const Home = () => {
  return (
    <div className="home-section-main" id="home">
      <section className="home--section">
          <div className="left--section-home">
            <div className='intro--home'>
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
                <a href='#{void}'>Check my Works</a>
                <a href='./Images/resume.pdf' download >Resume</a>
              </div>
          </div>
      </section>
    </div>
  )
}

export default Home