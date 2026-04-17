import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class DeathLapPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Death Lap</p>
                  <p>At the end of 2018, OZWE Games began collaborating with Oculus Studios on Death Lap, a VR combat racing game. I was responsible for the main Unity 3D shaders, especially PBR metallic materials and visual effects, while keeping the rendering performance suitable for VR.</p>
                  <p>I also contributed across the production: coding, network infrastructure, artificial intelligence, level design, SFX, UI, localization, VFX, optimization, debugging, and management.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>Death Lap is a VR combat racing game that challenges you to drive to survive. Just point and shoot to destroy everything in your path. Hit the road, perform drifts and stunts, navigate traps, unleash your weapons and special abilities, and enjoy the chaos of its battlefields.</p>
                  <p>Captured by Nitro Saint Payne, a maniacal and tragic showman, players are thrown into a deadly TV show where they must race and battle other drivers to win their freedom.</p>
                  <p>Technologies: C#, Shaders, Unity3D, Blender.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center awards">
            <div className="col-md-12 d-flex justify-content-center">
              <img src="img/deathlap/award-dl-halo-2019@2x.png" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="container-fluid remove-paddings-margins py-3"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-8 d-flex justify-content-center"> 
              <div class="embed-responsive embed-responsive-16by9 movie">
                <iframe className="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/L1yMEQ7IrQc?rel=0&amp;showinfo=0&amp;loop=1&amp;vq=hd1080" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid remove-paddings-margins pt-3">
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-8 remove-paddings-margins "> 
              <Carousel fade interval={3000}>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/deathlap/pic01.png'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/deathlap/pic02.png'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/deathlap/pic03.png'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/deathlap/pic04.png'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/deathlap/pic05.png'} alt="Fifth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/deathlap/pic06.png'} alt="Sixth slide" />   
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

export default DeathLapPage;
