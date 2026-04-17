import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from "./project/ProjectCarousel";
import Contact from './Contact'; 
import Nav from './Nav'; 

const images = [
  "img/metec/pic01.jpg",
  "img/metec/pic02.jpg",
  "img/metec/pic03.jpg",
  "img/metec/pic04.jpg",
  "img/metec/pic05.jpg",
  "img/metec/pic06.jpg",
  "img/metec/pic07.jpg",
];


class MetecPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Primetals Technologies - METEC</p>
                  <p>In June 2015, Ars Electronica Solutions developed an immersive environment for Primetals Technologies at METEC, one of the world's leading events for metallurgical technology.</p>
                  <p>The booth included interactive walls, terminals, tables, and a central installation made of 24 screens, 12 of which could rotate.</p>
                  <p>The exhibits were distributed through an open space and inspired by elements from metallurgical processes.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The exhibition area conveyed complex information in an intuitive and playful way, while supporting the launch of the company's new name and corporate design.</p>
                  <p>My contribution focused on the development of the interactive 4K screen walls used to visualize factory data from Primetals Technologies.</p>
                  <p>Technologies: C++, Juce Framework, OpenGL, TUIO, PostgreSQL.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid remove-paddings-margins py-3"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-8 d-flex justify-content-center"> 
              <div class="embed-responsive embed-responsive-16by9 movie">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/xnx9Yghxd9g?rel=0&amp;showinfo=0&amp;loop=1&amp;vq=hd1080" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <ProjectCarousel images={images} className="pt-3" />
        <Contact /> 
      </>
    );
  }
}

export default MetecPage;
