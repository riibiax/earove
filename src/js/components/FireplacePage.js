import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from "./project/ProjectCarousel";
import Contact from './Contact'; 
import Nav from './Nav'; 

const images = [
  "img/fireplace/pic01.jpg",
  "img/fireplace/pic02.jpg",
];


class FireplacePage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Fireplace</p>
                  <p>"Fireplace" is an interactive lumino-kinetic device designed to explore the psychological effects of light.</p>
                  <p>The project combines a mobile app that records physical activity with a domestic device that plays visual light programs. These programs are designed around frequencies and patterns associated with brain waves.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>Flicker, color combinations, light frequency, intensity, and pattern are used to create a hypnotic visual experience.</p>
                  <p>The device experiments with the relationship between technology, perception, and cognitive response.</p>
                  <p>Technologies: OpenFrameworks and Arduino.</p>
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

export default FireplacePage;
