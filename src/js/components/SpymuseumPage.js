import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class SpymuseumPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Spy Museum - Berlin</p>
                  <p>In September 2015, I worked with Ars Electronica Solutions on interactive installations for the Spy Museum in Berlin.</p>
                  <p>The permanent exhibition uses multimedia and museum technology to tell stories of covert operations, espionage cases, and legendary spies across more than 3,000 square meters.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The museum combines historical objects, documents, photographs, film material, interviews, and expert testimony with interactive experiences designed to make exploration and discovery part of the visit.</p>
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
                  <img className="d-block w-100" src={'img/spymuseum/pic01.jpg'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spymuseum/pic02.jpg'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spymuseum/pic03.jpg'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spymuseum/pic04.jpg'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spymuseum/pic05.jpg'} alt="Fifth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spymuseum/pic06.jpg'} alt="Sixth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spymuseum/pic07.jpg'} alt="Seventh slide" />   
                </Carousel.Item> 
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spymuseum/pic08.jpg'} alt="Eight slide" />   
                </Carousel.Item>   
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spymuseum/pic09.jpg'} alt="Ninth slide" />   
                </Carousel.Item> 
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/spymuseum/pic10.jpg'} alt="Tenth slide" />   
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

export default SpymuseumPage;
