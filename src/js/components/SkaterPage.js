import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from "./project/ProjectCarousel";
import Contact from './Contact'; 
import Nav from './Nav'; 

const images = [
  "img/skater/pic01.png",
  "img/skater/pic02.png",
  "img/skater/pic03.png",
  "img/skater/pic04.png",
  "img/skater/pic05.png",
  "img/skater/pic06.png",
  "img/skater/pic07.png",
  "img/skater/pic09.png",
  "img/skater/pic09.png",
  "img/skater/pic10.png",
];


class SkaterPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">The skater</p>
                  <p>Imagine your iPhone as a skater, moving through circuits and avoiding obstacles.</p>
                  <p>"The Skater" is an augmented reality game where the player interacts with a virtual world using real cards and handmade origami pieces. In 1980s Berlin, a young skater tries to spread American skate culture. Can you help him reach that goal?</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>In a visual universe inspired by zine culture, each level is built from printed cards, while virtual obstacles can be solved by finding the right physical origami. But do not spend too long admiring the paper city: the police are looking for you.</p>
                  <p>Design and development by Andrea Rovescalli, Praiya Chinagarn, and Solkin Keizer.</p>
                  <p>Technologies: C++, Shaders, Openframeworks, Cinema4D.</p>
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

export default SkaterPage;
