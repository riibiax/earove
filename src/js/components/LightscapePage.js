import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from "./project/ProjectCarousel";
import Contact from './Contact'; 
import Nav from './Nav'; 

const images = [
  "img/lightscape/pic01.jpg",
  "img/lightscape/pic02.jpg",
  "img/lightscape/pic03.jpg",
  "img/lightscape/pic04.jpg",
  "img/lightscape/pic05.jpg",
  "img/lightscape/pic06.jpg",
];


class LightscapePage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Lightscape</p>
                  <p>"Lightscape" is an interactive and performative installation depicting the landscape seen by a migrant during his journey.</p>
                  <p>Using GPS location, the artwork combines landscape images from Flickr with live weather data, recreating local colors and light as faithfully as possible.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The upper part of the device represents the sky, the lower part visualizes the soil, and the mechanical element suggests a silhouette moving through the landscape.</p>
                  <p>Weather forecasts continuously animate the visual composition.</p>
                  <p>&nbsp;</p>
                  <p>Technologies: OpenFrameworks, Arduino, Python scripts.</p>
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

export default LightscapePage;
