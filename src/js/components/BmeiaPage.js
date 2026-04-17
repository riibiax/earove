import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from "./project/ProjectCarousel";
import Contact from './Contact'; 
import Nav from './Nav'; 

const images = [
  "img/bmeia/pic01.jpg",
  "img/bmeia/pic02.jpg",
  "img/bmeia/pic03.jpg",
  "img/bmeia/pic04.jpg",
];


class BmeiaPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">BMEIA Touchwall</p>
                  <p>In December 2015, Ars Electronica Solutions created an interactive media wall for the Austrian Federal Ministry for Europe, Integration and Foreign Affairs.</p>
                  <p>The installation used data visualization to help visitors explore and compare Austria's international activities with information from other countries.</p>
                  <p>Special features included gigapixel imagery and GeoPulse, Ars Electronica's geospatial visualization tool.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The active mode allows up to three people to interact with the BMEIA TouchWall at the same time, while presentation mode displays content across the full screen.</p>
                  <p>I contributed to the implementation of the media wall, built from three landscape screens and powered by a customized GeoPulse application. The displayed content was managed through a CMS.</p>
                  <p>Technologies: C++, Juce Framework, OpenGL, TUIO, PostgreSQL.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProjectCarousel images={images} />
        <Contact /> 
      </>
    );
  }
}

export default BmeiaPage;
