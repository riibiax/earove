import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from "./project/ProjectCarousel";
import Contact from './Contact'; 
import Nav from './Nav'; 

const images = [
  "img/doka/pic01.jpg",
  "img/doka/pic02.jpg",
  "img/doka/pic03.jpg",
  "img/doka/pic04.jpg",
  "img/doka/pic05.jpg",
  "img/doka/pic06.jpg",
  "img/doka/pic07.jpg",
];


class DokaPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Doka Group - BAUMA</p>
                  <p>BAUMA is an international trade fair for construction machinery, building material machines, mining machinery, construction vehicles, and construction equipment.</p>
                  <p>For the Doka Group's booth, Ars Electronica Solutions created two central interactive Reference Walls to present the company's worldwide network through georeferenced data.</p>
                  <p>Each wall consisted of 12 monitors and acted as an eye-catching entrance point, using animated effects to attract visitors and support conversations with Doka's sales team.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The main motif was a globe showing Doka references around the world. Visitors could rotate it, zoom in, and select specific locations to explore videos, photographs, text, and statistics.</p>
                  <p>As part of the Ars Electronica engineering team, I contributed to the development of the GeoStage software used for the installation.</p>
                  <p>Technologies: C#, Unity3D, TUIO, QGis, GlobalMapper.</p>
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

export default DokaPage;
