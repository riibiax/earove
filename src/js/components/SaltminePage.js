import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from "./project/ProjectCarousel";
import Contact from './Contact'; 
import Nav from './Nav'; 

const images = [
  "img/saltmine/pic01.jpg",
  "img/saltmine/pic02.jpg",
  "img/saltmine/pic03.jpg",
  "img/saltmine/pic04.jpg",
  "img/saltmine/pic05.jpg",
  "img/saltmine/pic06.jpg",
  "img/saltmine/pic07.jpg",
  "img/saltmine/pic08.jpg",
];


class SaltminePage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">The Berchtesgaden Salt Mine</p>
                  <p>The Treasure Chamber of the Berchtesgaden Salt Mine is one of the main attractions of the SaltTimeJourney guided tour. Ars Electronica Solutions redesigned this large underground space carved into the rock.</p>
                  <p>Four projection screens tell the story of salt through an abstract crystalline visual language. The animation sequences explore four themes: nature, humankind, history, and technology.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>A dedicated soundtrack supports the imagery, while a pulsating salt lamp created by one of the mine's associates acts as another focal point in the space.</p>
                  <p>The interplay of light, image, sound, and space creates an immersive sensory environment that heightens the SaltTimeJourney experience.</p>
                  <p>My contribution at Ars Electronica Solutions focused on the concept design.</p>
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

export default SaltminePage;
