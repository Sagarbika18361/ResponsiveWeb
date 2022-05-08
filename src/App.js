import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import {  Route, Routes } from "react-router-dom";
import {  } from "react-router-dom";
import Home from "./Home.js";
import Contact from "./Contact.js";
import Service from "./Service.js";
import About from "./About.js";
import Navbar from "./Navbar.js";

function App() {
  return (
    <>
    
        <Navbar/>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Home />} />
          <Route path="/Contact" caseSensitive={false} element={<Contact />} />
          <Route path="/Service" caseSensitive={false} element={<Service />} />
          <Route path="/About" caseSensitive={false} element={<About />} />
        </Routes>
      
    </>
  );
}

export default App;
