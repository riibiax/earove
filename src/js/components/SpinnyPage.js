import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

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
        <div className="container-fluid remove-paddings-margins pt-3"> {/* Use container-fluid for full width */}
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-8 remove-paddings-margins "> {/* Adjust column size for larger screens and full width on smaller screens */}
              <Carousel fade interval={3000}>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spinny/pic01.png'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spinny/pic02.png'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spinny/pic03.png'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spinny/pic04.png'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spinny/pic05.png'} alt="Fifth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spinny/pic06.jpg'} alt="Sixth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spinny/pic07.png'} alt="Seventh slide" />   
                </Carousel.Item>
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spinny/pic08.png'} alt="Eight slide" />   
                </Carousel.Item>    
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spinny/pic09.png'} alt="Ninth slide" />   
                </Carousel.Item>
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spinny/pic10.png'} alt="Tenth slide" />   
                </Carousel.Item>    
              </Carousel>
            </div>
          </div>
        </div>
        <Contact /> 
      </>
    );
  }
}

export default SpinnyPage;
