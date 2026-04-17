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
                  <p>For Ars Electronica Festival 2016, I worked with Ars Electronica Solutions on a set of interactive installations presenting content from the European Space Agency and organizations such as Reporters, Engineers, Architects, and Doctors Without Borders.</p>
                  <p>The first installation was a 4K projection wall controlled by a touch screen terminal. Visitors could explore a simulation of Earth, ESA satellite models, high-resolution images of the planet, and points of interest from space research.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The second installation was a 4K touch screen focused on geodata and the field activities of the participating organizations.</p>
                  <p>Heat maps, points of interest, media content, and text were processed through GeoStage, the geovisualization system developed by Ars Electronica Solutions.</p>
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
