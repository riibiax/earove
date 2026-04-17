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
                  <p className="titleContainer">Machine EnchantÃ©e</p>
                  <p>"Machine EnchantÃ©e" is the winner of the UMIX Information Architecture Hackathon 2014 in Lyon, France, where participants were challenged to redesign physical and digital libraries within the span of 48 hours.</p>
                  <p>My team developed an idea for children interaction inspired by the concept of serendipity. We wish to encourage kids between the age of 3-7 to discover new books and games in a playful and engaging way, while transforming the physical environment of the library into a landscape of discovery.</p>
                  <p>Books and games are tagged with a friendly classification system generated together with a group of children based on their interests in topics and books. A simple game on a touch screen table invites kids to choose among symbols representing the different tags.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>They then follow a wandering LED path which splits into different routes through the library, leading them to book selections based on their tag choices. Which one to follow?</p>
                  <p>Books and games are not stored on shelves but in special boxes that light up at the end of each new path. Each box is filled with books based on the tagging system. The Machine EnchantÃ©e supports up to 4 users, with different wandering paths lighting up and leading children to a new and exciting world of books.</p>
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