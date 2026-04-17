import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class EamesPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Re-Think the Eames</p>
                  <p>At the Salone del Mobile in Milan 2013, the students at the Haute Ecole d'Art et de Design of Geneva revisited the tradition of educational multimedia spectacles, building on the 1964 Think Theater by Charles & Ray Eames. We reinvented a contemporary installation, an immersive multi-screen environment, showcasing 700 unreleased images from the collection of the legendary couple.</p>
                  <p>The installation is also composed by an intercative wall, where visitors can answer to a series of questions concerning their design practice or related to the exhibition. These answers are recorded and displayed in a parallel exhibition in Geneva.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>My involvement as part of the student design team included the Exhibition Concept Phase and the realisation of the interactive wall.</p>
                  <p>Workshop curated by Alexandra Midal and lead by Nitzan Cohen & Dominic Robson.</p>
                  <p>Technologies: MaxMsp, Arduino, OpenCV, Adobe Premiere.</p>
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
                  <img className="d-block w-100" src={'img/eames/pic01.jpg'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/eames/pic02.jpg'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/eames/pic03.jpeg'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/eames/pic04.jpg'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/eames/pic05.jpg'} alt="Fifth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/eames/pic06.jpg'} alt="Sixth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/eames/pic07.jpg'} alt="Seventh slide" />   
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

export default EamesPage;