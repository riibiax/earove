import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

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

        <div className="container-fluid remove-paddings-margins"> {/* Use container-fluid for full width */}
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-8 remove-paddings-margins "> {/* Adjust column size for larger screens and full width on smaller screens */}
              <Carousel fade interval={3000}>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/saltmine/pic01.jpg'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/saltmine/pic02.jpg'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/saltmine/pic03.jpg'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/saltmine/pic04.jpg'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/saltmine/pic05.jpg'} alt="Fifth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/saltmine/pic06.jpg'} alt="Sixth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/saltmine/pic07.jpg'} alt="Seventh slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/saltmine/pic08.jpg'} alt="Eight slide" />   
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

export default SaltminePage;
