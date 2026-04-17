import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class MetecPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Primetals Technologies - METEC</p>
                  <p>In June 2015, Ars Electronica Solutions has developed a unique immersive environment that allows visitors to explore the Primetals Technologies'technology, product and service portfolio during the METEC fair. Held every three years, METEC is the worldâ€™s most important event in metallurgical technology. </p>
                  <p>Interactive walls, terminals, interactive tables and the central piece of the booth, made of 24 screens, in which 12 were rotating, were created for this event.</p>
                  <p>The exhibits are spread out in an open space, and inspired by elements from metallurgical processes.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>Ars Electronica Solutions designed the exhibition area for Primetals Technologies to convey information in an intuitive and playful way, while also reflecting the companyâ€™s status as one of the worldâ€™s leading high-tech enterprises. This creative approach to launching the new company name and corporate design mirrors the unique global standing of Primetals Technologies.</p>
                  <p>My part for this project was related to the development of the interactive 4k Screen Walls to visualize Primetals Technologies's factories data.</p>
                  <p>Technologies: C++, Juce Framework, OpenGL, TUIO, PostgreSQL.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid remove-paddings-margins py-3"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-8 d-flex justify-content-center"> 
              <div class="embed-responsive embed-responsive-16by9 movie">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/xnx9Yghxd9g?rel=0&amp;showinfo=0&amp;loop=1&amp;vq=hd1080" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid remove-paddings-margins pt-3"> {/* Use container-fluid for full width */}
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-8 remove-paddings-margins "> {/* Adjust column size for larger screens and full width on smaller screens */}
              <Carousel fade interval={3000}>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/metec/pic01.jpg'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/metec/pic02.jpg'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/metec/pic03.jpg'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/metec/pic04.jpg'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/metec/pic05.jpg'} alt="Fifth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/metec/pic06.jpg'} alt="Sixth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/metec/pic07.jpg'} alt="Seventh slide" />   
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

export default MetecPage;