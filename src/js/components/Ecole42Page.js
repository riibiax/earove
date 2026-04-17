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
                  <p>At UDIMU SA, I worked on a set of interactive installations for 42 Lausanne, the computer science school based on peer-to-peer learning.</p>
                  <p>The space was designed for students, visitors, and staff, with the goal of communicating the school's mission and learning culture through playful interaction.</p>
                  <p>For the inauguration, we created an augmented reality treasure hunt for iOS and Android devices.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>My role covered both design and development, including interactive experiences built with Unity 3D and React JS. The AR game was developed with Unity's AR Foundation framework.</p>
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
