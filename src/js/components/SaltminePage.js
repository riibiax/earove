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
                  <p>The Berchtesgaden Salt Mineâ€™s Treasure Chamber is one of the featured attractions on the guided tour through this complexâ€”the so-called SaltTimeJourney. This huge underground space dug out of the rock recently got a total makeover by Ars Electronica Solutions.</p>
                  <p>Four projection screens tell the story of salt in an abstract-crystalline visual vocabulary. Four sub-themesâ€”nature, humankind, history and technologyâ€”are treated in animated sequences designed by AES.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>Just the right soundtrack underscores the impressive imagery. Another centerpiece of the installation is a pulsating salt lamp created by one of mineâ€™s associates.</p>
                  <p>The interplay of these elementsâ€”light, imagery, sound and spaceâ€”immerses visitors in an all-encompassing sensory realm that further heightens the intense thrill of the SaltTimeJourney experience.</p>
                  <p>The Concept Design was my contribution for this project in AES.</p>
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