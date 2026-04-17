import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class MachinePage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Machine Enchantee</p>
                  <p>"Machine Enchantee" won the UMIX Information Architecture Hackathon 2014 in Lyon, where participants were challenged to redesign physical and digital libraries in 48 hours.</p>
                  <p>Our team developed an interaction concept for children inspired by serendipity. The goal was to encourage children aged 3 to 7 to discover books and games in a playful way, while turning the library itself into a landscape of discovery.</p>
                  <p>Books and games are tagged with a friendly classification system created together with children, based on their interests, topics, and favorite books. A touch screen table invites them to choose symbols representing the different tags.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>They then follow a wandering LED path that splits into different routes through the library, leading them to book selections based on their choices.</p>
                  <p>Books and games are stored in special boxes that light up at the end of each path. The Machine Enchantee supports up to four users at once, each following a different route toward a new selection of books.</p>
                  <p>&nbsp;</p>
                  <p>Other project members: Yannis Adelbost, Mathilde Bulete-Herbaut, Valeria Borsotti, Tommaso Elli, Fabian Ramirez, Inma Salcedo.</p>
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
                  <img className="d-block w-100" src={'img/machine/pic01.jpg'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/machine/pic02.jpg'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/machine/pic03.jpg'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/machine/pic04.jpg'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/machine/pic05.jpg'} alt="Fifth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/machine/pic06.jpg'} alt="Sixth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/machine/pic07.jpg'} alt="Seventh slide" />   
                </Carousel.Item>
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/machine/pic08.jpg'} alt="Eight slide" />   
                </Carousel.Item>   
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/machine/pic09.jpg'} alt="Ninth slide" />   
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

export default MachinePage;
