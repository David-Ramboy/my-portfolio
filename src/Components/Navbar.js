import React from 'react'
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="nav-logo">
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Ramboy</Link>
        </div>
        <ul>
            <li>
              <Link to="home" spy={true} smooth={true} offset={-100} duration={500} > Home</Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} offset={50} duration={500} > About</Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true} offset={50} duration={500} >Projects</Link>
            </li>
            <li>
              <Link to="contacts" spy={true} smooth={true} offset={50} duration={500} >Contact me</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar;