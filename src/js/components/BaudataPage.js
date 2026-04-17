import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from "./project/ProjectCarousel";
import Contact from './Contact'; 
import Nav from './Nav'; 

const images = [
  "img/baudata/pic01.jpg",
  "img/baudata/pic02.jpg",
  "img/baudata/pic03.jpg",
  "img/baudata/pic04.jpg",
  "img/baudata/pic05.jpg",
  "img/baudata/pic06.jpg",
  "img/baudata/pic07.jpg",
  "img/baudata/pic08.jpg",
  "img/baudata/pic09.jpg",
  "img/baudata/pic10.jpg",
];


class BaudataPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">BauData</p>
                  <p>In 2017, I founded BauData, a collective exploring the web through bots, data animation, and generative visualization. The project became a diary of visual stories, published at <a href="https://baudata.github.io" target="_blank">https://baudata.github.io</a>.</p>
                  <p>The first project, "Sky Gradients", is a bot that travels through cities, reads weather data, and uses mathematical functions to generate skies from local light and color conditions.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The second project, "Hop Mountains", abstracts landscapes into color, line, and form. It reduces elements of mountains and sky into generative compositions that translate place into a changing visual language.</p>
                  <p>Technologies: NodeJs, P5JS, ThreeJS, Javascript, Python, GLSL shader, Raspberry PI.</p>
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

export default BaudataPage;
