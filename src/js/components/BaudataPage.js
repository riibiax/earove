import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class BaudataPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">BauData</p>
                  <p>In 2017, I founded BauData, a collective exploring the web through bots, data animation, and generative visualization. The project became a diary of visual stories, published at <a href="https://baudata.github.io" target="_blank">https://baudata.github.io</a>.</p>
                  <p>The first project, "Sky Gradients", is a bot that travels through cities, reads weather data, and uses mathematical functions to generate skies from local light and color conditions.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The second project, "Hop Mountains", abstracts landscapes into color, line, and form. It reduces elements of mountains and sky into generative compositions that translate place into a changing visual language.</p>
                  <p>Technologies: NodeJs, P5JS, ThreeJS, Javascript, Python, GLSL shader, Raspberry PI.</p>
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
                  <img className="d-block w-100" src={'img/baudata/pic01.jpg'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/baudata/pic02.jpg'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/baudata/pic03.jpg'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/baudata/pic04.jpg'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/baudata/pic05.jpg'} alt="Fifth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/baudata/pic06.jpg'} alt="Sixth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/baudata/pic07.jpg'} alt="Seventh slide" />   
                </Carousel.Item>
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/baudata/pic08.jpg'} alt="Eight slide" />   
                </Carousel.Item>    
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/baudata/pic09.jpg'} alt="Ninth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/baudata/pic10.jpg'} alt="Tenth slide" />   
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

export default BaudataPage;
