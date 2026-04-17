import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class OnceUponATalePage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Once Upon A Tale</p>
                  <p>"Once Upon a Tale" is a tactile book and interactive storytelling.</p>
                  <p>Based on the best-known children's stories, the application gives us the opportunity to reinvent, to create our own stories.</p>
                  <p>With the card game that comes with it, or simply by the touch interface, choose the characters and settings of your story among all those offered tales. And you generate a number of stories and illustrations infinity.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The stories will mix. You can always change characters or settings to your preference. "When Cinderella becomes the big bad wolf in the castle of Barbe Bleue."</p>
                  <p>Development by Andrea Rovescalli & Praiya Chinagarn. Illustrations by Benjamin Ben Kemoun.</p>
                  <p>Workshop lead by Etienne Mineur & Nicolas Nova.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-8 d-flex justify-content-center"> 
              <div class="embed-responsive embed-responsive-16by9 movie movieVimeo">
                <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/67625861?loop=1" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid remove-paddings-margins"> {/* Use container-fluid for full width */}
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-8 remove-paddings-margins "> {/* Adjust column size for larger screens and full width on smaller screens */}
              <Carousel fade interval={3000}>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/onceuponatale/pic01.png'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/onceuponatale/pic02.png'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/onceuponatale/pic03.png'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/onceuponatale/pic04.png'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/onceuponatale/pic05.png'} alt="Fifth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/onceuponatale/pic06.png'} alt="Sixth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/onceuponatale/pic07.png'} alt="Seventh slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/onceuponatale/pic08.png'} alt="Eight slide" />   
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

export default OnceUponATalePage;