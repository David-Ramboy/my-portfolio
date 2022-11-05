import React from "react";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Social from "./Components/Social";

import "./App.css";
import { Route, Link, Routes } from "react-router-dom";

function App() {

  function triggerClick(){
    console.log("hi");
  }

  return (
    <>

      <div className="Navbar container">
          <ul>
              <Link to="/my-porfolio" onClick={triggerClick}>Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/social">Social Media</Link>
          </ul>
      </div>
      
      <Routes>
        <Route path="/my-portfolio" element={<Home/>} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/projects" element={<Projects/>} />
        <Route path="/social" element={<Social/>} />
      </Routes>
    </>
  );
}

export default App;
