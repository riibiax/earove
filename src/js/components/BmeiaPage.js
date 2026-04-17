import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class BmeiaPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">BMEIA Touchwall</p>
                  <p>In December 2015, Ars Electronica Solutions created an interactive media wall for the Austrian Federal Ministry for Europe, Integration and Foreign Affairs.</p>
                  <p>The installation used data visualization to help visitors explore and compare Austria's international activities with information from other countries.</p>
                  <p>Special features included gigapixel imagery and GeoPulse, Ars Electronica's geospatial visualization tool.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The active mode allows up to three people to interact with the BMEIA TouchWall at the same time, while presentation mode displays content across the full screen.</p>
                  <p>I contributed to the implementation of the media wall, built from three landscape screens and powered by a customized GeoPulse application. The displayed content was managed through a CMS.</p>
                  <p>Technologies: C++, Juce Framework, OpenGL, TUIO, PostgreSQL.</p>
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
                  <img className="d-block w-100" src={'img/bmeia/pic01.jpg'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/bmeia/pic02.jpg'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/bmeia/pic03.jpg'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/bmeia/pic04.jpg'} alt="Fourth slide" />   
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

export default BmeiaPage;
