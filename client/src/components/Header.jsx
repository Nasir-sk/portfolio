import React from "react";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
export default function Header() {
  return (
    <div>
      <div className="nav-header">
        <nav className="container">
          <div className="logo">Porfolio</div>
          <ul>
            <a href="#hero">
              <li>Home</li>
            </a>
            <a href="#project">
              <li>Projects</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </div>
      <Home/>
      <Projects/>
      <Contact/>
    </div>
  );
}
