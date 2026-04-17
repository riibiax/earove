import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class EamesPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Re-Think the Eames</p>
                  <p>For Salone del Mobile in Milan 2013, students from the Haute Ecole d'Art et de Design in Geneva revisited the tradition of educational multimedia spectacles, taking inspiration from the 1964 Think Theater by Charles and Ray Eames.</p>
                  <p>We created a contemporary immersive installation: a multi-screen environment presenting 700 unreleased images from the Eames collection, together with an interactive wall where visitors could answer questions about design practice and the exhibition.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>As part of the student design team, I contributed to the exhibition concept and the realization of the interactive wall. The collected answers were displayed in a parallel exhibition in Geneva.</p>
                  <p>Workshop curated by Alexandra Midal and led by Nitzan Cohen and Dominic Robson.</p>
                  <p>Technologies: MaxMsp, Arduino, OpenCV, Adobe Premiere.</p>
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
                  <img className="d-block w-100" src={'img/eames/pic01.jpg'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/eames/pic02.jpg'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/eames/pic03.jpeg'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/eames/pic04.jpg'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/eames/pic05.jpg'} alt="Fifth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/eames/pic06.jpg'} alt="Sixth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/eames/pic07.jpg'} alt="Seventh slide" />   
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

export default EamesPage;
