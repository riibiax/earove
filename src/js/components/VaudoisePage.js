import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class VaudoisePage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Vaudoise Assurances - The Way</p>
                  <p>In 2021, I became a part of UDIMU SA, a dynamic company located in the Neuchatel region. My inaugural project involved crafting an interactive totem for Vaudoise Assurances. Vaudoise Assurances orchestrates escape games aimed at acquainting participants with the theme of retirement in a playful and inventive manner.</p>
                  <p>Ever fantasized about fast-forwarding to age 65 in just 45 minutes? The sole rule of the game? Craft your life's narrative by following your heart's desires, unencumbered by concerns!</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>For this endeavor, I spearheaded the development of mini-games, the UI system, a localization feature to translate the game into multiple languages, an import mechanism to convert Excel data into Unity diagrams, and an assistance system designed to orient users throughout the experience.</p>
                  <p>Technologies: C#, Shaders, Unity3D.</p>
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
                  <img className="d-block w-100" src={'img/vaudoise/pic01.png'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/vaudoise/pic02.png'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/vaudoise/pic03.png'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/vaudoise/pic04.png'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/vaudoise/pic05.png'} alt="Fifth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/vaudoise/pic06.png'} alt="Sixth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/vaudoise/pic07.png'} alt="Seventh slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/vaudoise/pic08.png'} alt="Eight slide" />   
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

export default VaudoisePage;