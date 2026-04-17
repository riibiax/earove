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
                  <p>In December 2015 Ars Electronica Solutions realized an interactive wall that provides visitors of the Federal Ministry for Europe, Integration and Foreign Affairs information about the Ministryâ€™s worldwide activities.</p>
                  <p>Data Visualization is the main topic of this Installation: via a touch interface, visitors can easily understand and compare Austrian sensible data with those of the other countries in the world.</p>
                  <p>Special features include gigapixel images as well as Ars Electronicaâ€™s popular tool GeoPulse.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The â€œactive modeâ€ allows up to three persons to interact with the BMEIA TouchWall at the same time, while a â€œpresentation modeâ€ makes it possible to display content on the entire screen.</p>
                  <p>I have taken part in the implementation of the media wall, that is made out of three landscape screens and runs GeoPulse customized Software. Content displayed on the wall is gathered by a CMS.</p>
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
