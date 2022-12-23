import React from "react";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";

import "./App.css";
import { Route, Link, Routes } from "react-router-dom";

function App() {

  function triggerClick(){
    console.log("hi");
  }

  return (
    <>

      <div className="Navbar container">
          <div className="nav-logo">Logo</div>
          <ul>
              <li><a href="#"> About</a></li>
              <li><a href="#"> Projects</a></li>
              <li><a href="#"> Contact</a></li>
          </ul>
      </div>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <footer>© Created by&nbsp;<span className="footer--name"> David Bryan Ramboy</span></footer>
    </>
  );
}

export default App;
