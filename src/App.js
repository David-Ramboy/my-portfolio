import React from "react";

import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

import "./App.css";
import { Route, Link, Routes } from "react-router-dom";

function App() {

  function triggerClick(){
    console.log("hi");
  }

  return (
    <div className="portfolio-page">
      <Navbar/>




      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <footer>© Created by&nbsp;<span className="footer--name"> David Bryan Ramboy</span></footer>
    </div>
  );
}

export default App;
