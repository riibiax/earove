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
                  <p>"Fireplace" is an interactive lumino-kinetic device, designed to influence human psychology.</p>
                  <p>The project is composed of a mobile app that records userâ€™s physical activities and of a domestic device that shows visual programs. The purpose of this device is to stimulate the userâ€™s mind by light programs that match brain waves.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>Flicker, colour combinations, light frequencies, intensity and patterns are used to influence userâ€™s psychology and to get an hypnotic visual show.</p>
                  <p>This device experiments the possibilities of technological and human cognitive interaction.</p>
                  <p>Technologies: OpenFrameworks & Arduino.</p>
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