import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class FireplacePage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Fireplace</p>
                  <p>"Fireplace" is an interactive lumino-kinetic device designed to explore the psychological effects of light.</p>
                  <p>The project combines a mobile app that records physical activity with a domestic device that plays visual light programs. These programs are designed around frequencies and patterns associated with brain waves.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>Flicker, color combinations, light frequency, intensity, and pattern are used to create a hypnotic visual experience.</p>
                  <p>The device experiments with the relationship between technology, perception, and cognitive response.</p>
                  <p>Technologies: OpenFrameworks and Arduino.</p>
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
                  <img className="d-block w-100" src={'img/fireplace/pic01.jpg'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/fireplace/pic02.jpg'} alt="Second slide" />   
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

export default FireplacePage;
