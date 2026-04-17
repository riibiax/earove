import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class Ecole42Page extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-12 "> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Ecole 42 Renens</p>
                  <p>During my tenure at the Swiss company UDIMU SA, we were tasked with creating installations for the innovative computer science school "42 Lausanne".</p>
                  <p>In line with its vision, Ecole 42 aimed to offer visitors an exceptional experience, conveying its mission, educational opportunities, and ethos in a clear and engaging manner.</p>
                  <p>The installation space was primarily designed for students of the school but also catered to visitors and staff from other parts of the building. To mark the school's inauguration, we developed an augmented reality (AR) treasure hunt accessible on iOS and Android devices.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>My role in this project encompassed both the design and IT development of interactive experiences using Unity 3D and React Js. Furthermore, the AR game was crafted utilizing Unity's AR Foundation Framework.</p>
                  <p>Technologies: C#, Shaders, Unity3D, AR Foundation Framework, Blender.</p>
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
                  <img className="d-block w-100" src={'img/42/pic01.png'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/42/pic02.png'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/42/pic03.png'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/42/pic04.png'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/42/pic05.png'} alt="Fifth slide" />   
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

export default Ecole42Page;
