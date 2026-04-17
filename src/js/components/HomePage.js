import React, { Component } from "react";
import "../../css/main.css";
import "../../css/homepage.css";
import Contact from './Contact'; 
import Nav from './Nav'; 
import About from './About'; 
import { Link } from "react-router-dom";
import ParticlesScene from './threejs/ParticlesScene';
import projects from "../projectData";

class HomePage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <ParticlesScene />
        <section id="projects">
          <ul>
            {projects.map(({ path, title, thumbnail, showTitleOnHome = true }) => (
              <li key={path}>
                <Link to={path}>
                  <div className="img" style={{ backgroundImage: `url('${thumbnail}')` }}></div>
                  {showTitleOnHome && (
                    <div className="tableCustom">
                      <div className="rowCustom">
                        <div className="cellCustom">
                          <h1>{title}</h1>
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
              </li>
            ))}
            <li>
              <div className="tableCustom">
                <div className="rowCustom">
                  <div className="cellCustom">
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <About /> 
        <Contact /> 
      </>
    );
  }
}

export default HomePage;
