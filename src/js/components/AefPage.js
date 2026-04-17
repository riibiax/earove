import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from "./project/ProjectCarousel";
import Contact from './Contact'; 
import Nav from './Nav'; 

const images = [
  "img/aef/pic01.jpg",
  "img/aef/pic02.jpg",
  "img/aef/pic03.jpg",
  "img/aef/pic04.jpg",
  "img/aef/pic05.jpg",
  "img/aef/pic06.jpg",
  "img/aef/pic07.jpg",
  "img/aef/pic08.jpg",
];


class AefPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-12 "> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p class="titleContainer">Ars Electronica Festival 2016</p>
                  <p>For Ars Electronica Festival 2016, I worked with Ars Electronica Solutions on a set of interactive installations presenting content from the European Space Agency and organizations such as Reporters, Engineers, Architects, and Doctors Without Borders.</p>
                  <p>The first installation was a 4K projection wall controlled by a touch screen terminal. Visitors could explore a simulation of Earth, ESA satellite models, high-resolution images of the planet, and points of interest from space research.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The second installation was a 4K touch screen focused on geodata and the field activities of the participating organizations.</p>
                  <p>Heat maps, points of interest, media content, and text were processed through GeoStage, the geovisualization system developed by Ars Electronica Solutions.</p>
                  <p>&nbsp;</p>
                  <p>Technologies: C#, Unity3D, QGis, GlobalMapper.</p>
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

export default AefPage;
