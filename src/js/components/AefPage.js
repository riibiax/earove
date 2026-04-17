import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class AefPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-12 "> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p class="titleContainer">Ars Electronica Festival 2016</p>
                  <p>During Ars Electronica Festival 2016, I worked with Ars Electronica Solutions to realize some interactive installations. The purpose of our stand was to present the content by European Space Agency (ESA) and some organizations such as Reporters, Engineers, Architects and Doctors Without Borders.</p>
                  <p>The first installation was a 4k projection wall that gave the chance to interact with a simulation of Earth, to view ESA Satellites 3D models, some high resolutions images of Earth as seen from space and ESA Points of Interest. The interaction with the 4k projection wall was possible using a touch screen terminal.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The second installation was a 4k Touch Screen to discover GeoData Information and activities of Reporters, Engineers, Architects and Doctors Without Borders.</p>
                  <p>The data collected were Heat Maps, Points of Interests, Media Content and Texts and processed by the Geostage system developed by Ars Electronica Solutions.</p>
                  <p>&nbsp;</p>
                  <p>Technologies: C#, Unity3D, QGis, GlobalMapper.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid remove-paddings-margins"> {/* Use container-fluid for full width */}
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-8 remove-paddings-margins"> {/* Adjust column size for larger screens and full width on smaller screens */}
              <Carousel fade interval={3000}>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/aef/pic01.jpg'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/aef/pic02.jpg'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/aef/pic03.jpg'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/aef/pic04.jpg'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/aef/pic05.jpg'} alt="Fifth slide" />   
                </Carousel.Item>
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/aef/pic06.jpg'} alt="Sixth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/aef/pic07.jpg'} alt="Seventh slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/aef/pic08.jpg'} alt="Eight slide" />   
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

export default AefPage;
