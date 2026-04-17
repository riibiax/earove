import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from "./project/ProjectCarousel";
import Contact from './Contact'; 
import Nav from './Nav'; 

const images = [
  "img/vaudoise/pic01.png",
  "img/vaudoise/pic02.png",
  "img/vaudoise/pic03.png",
  "img/vaudoise/pic04.png",
  "img/vaudoise/pic05.png",
  "img/vaudoise/pic06.png",
  "img/vaudoise/pic07.png",
  "img/vaudoise/pic08.png",
];


class VaudoisePage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Vaudoise Assurances - The Way</p>
                  <p>In 2021, I joined UDIMU SA, a creative technology company based in the Neuchatel region. My first project there was an interactive totem for Vaudoise Assurances.</p>
                  <p>The Way is an escape game designed to introduce the topic of retirement through a playful, imaginative experience: what if you could fast-forward to age 65 in just 45 minutes?</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>I developed the mini-games, UI system, localization tools, an Excel import pipeline for Unity diagrams, and an assistance system to guide users through the experience.</p>
                  <p>Technologies: C#, Shaders, Unity3D.</p>
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

export default VaudoisePage;
