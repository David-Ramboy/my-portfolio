import React, {useState} from 'react'
import {Link} from 'react-scroll';

const Navbar = () => {

  const [show, setShow] = useState(true);

  function handleClick(){
    setShow(prev => !prev)
  }
  return (
    <div className="Navbar">
        <div className="nav-logo">
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Ramboy</Link>
        </div>
        <ul className={`navbar--links ${show ? 'navbar-links-none': ''}`}>
            <li>
              <Link to="home" spy={true} smooth={true} offset={-100} duration={500} > Home</Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} offset={50} duration={500} > About</Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true} offset={0} duration={500} >Projects</Link>
            </li>
            <li>
              <Link to="contacts" spy={true} smooth={true} offset={50} duration={500} >Contact me</Link>
            </li>
        </ul>

        <div className='navbar-hamburger'  onClick={handleClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    </div>
  )
}

export default Navbar;