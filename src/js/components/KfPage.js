import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class KfPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">KF Watches</p>
                  <p>During my tenure at the Swiss company UDIMU SA, we developed an interactive configurator for the KF Watches brand. This tool enables clients to effortlessly explore the diverse range of KF Watches models in a user-friendly manner.</p>
                  <p>Moreover, the configurator allows for extensive customization options, including the ability to adjust colors and materials of individual watch components via a touch screen menu.</p>
                  <p>The primary objective of the project was to accurately render the intricate components of the watches to showcase the design intricacies of this esteemed brand.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>Using Unity 3D and the HDRP render pipeline, I spearheaded the development process, focusing on optimizing 3D models, lighting, and shaders â€“ particularly for elements like diamonds and metal parts. Additionally, I designed and implemented the user interface and animations to enhance the presentation of the various watch models, ensuring an engaging and visually appealing experience.</p>
                  <p>Technologies: C#, Shaders, Unity3D, Blender.</p>
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
                  <img className="d-block w-100" src={'img/kf/pic01.png'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/kf/pic02.png'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/kf/pic03.png'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/kf/pic04.png'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/kf/pic05.png'} alt="Fifth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/kf/pic06.png'} alt="Sixth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/kf/pic07.png'} alt="Seventh slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/kf/pic09.png'} alt="Eight slide" />   
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

export default KfPage;