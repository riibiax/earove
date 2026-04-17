import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from "./project/ProjectCarousel";
import Contact from './Contact'; 
import Nav from './Nav'; 

const images = [
  "img/spinny/pic01.png",
  "img/spinny/pic02.png",
  "img/spinny/pic03.png",
  "img/spinny/pic04.png",
  "img/spinny/pic05.png",
  "img/spinny/pic06.jpg",
  "img/spinny/pic07.png",
  "img/spinny/pic08.png",
  "img/spinny/pic09.png",
  "img/spinny/pic10.png",
];


class SpinnyPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Spinny's Journey</p>
                  <p>During the Covid lockdown, I developed a game with friends to explore the Nintendo Switch market and the process of creating a company in Switzerland: <a href="https://www.linkedin.com/company/71466273/" target="_blank">Thunder Sparrow</a>.</p>
                  <p>Spinny's Journey is a challenging 2D action-puzzle game. Players help Spinny, a tiny alien explorer, move through mazes, dodge traps, and repair his spaceship after it is destroyed by a terrifying sparrow.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The gameplay is inspired by Kuru Kuru Kururin, a Game Boy Advance game built around rotation, timing, and narrow paths.</p>
                  <p>This project allowed me to follow every aspect of game production: project and team management, supplier coordination, communication and marketing strategy, user testing, game development, Nintendo Switch shader development, code optimization, Nintendo framework integration, and VFX creation.</p>
                  <p>Technologies: C#, Shaders, Unity for 2D, Photoshop, Python.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid remove-paddings-margins py-3"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-8 d-flex justify-content-center"> 
              <div class="embed-responsive embed-responsive-16by9 movie">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/okEwT4zTtl0?vq=hd720&amp;loop=1&amp;showinfo=0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

export default SpinnyPage;
