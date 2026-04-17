import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class SkaterPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">The skater</p>
                  <p>Imagine that your iPhone could be a skater, go through different circuits and avoid obstacles..</p>
                  <p>"The Skater" is an augmented reality game where the player interactes with a virtual world using real cards and handmade origamis. 
                      In the eighties a young skater in Berlin tries to launch american skatersâ€™ culture. Can you help him to reach this goal?</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>In a graphical universe, that recalls zine culture, every level is created by printed cards and virtual obstacles could be passed finding the right physical origamis.
                      But donâ€™t spend too much time to contemplate this paper city, the police is looking for you..</p>
                  <p>Design & Development by Andrea Rovescalli, Praiya Chinagarn, Solkin Keizer</p>
                  <p>Technologies: C++, Shaders, Openframeworks, Cinema4D.</p>
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
                  <img className="d-block w-100" src={'img/skater/pic01.png'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/skater/pic02.png'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/skater/pic03.png'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/skater/pic04.png'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/skater/pic05.png'} alt="Fifth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/skater/pic06.png'} alt="Sixth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/skater/pic07.png'} alt="Seventh slide" />   
                </Carousel.Item>
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/skater/pic09.png'} alt="Eight slide" />   
                </Carousel.Item>    
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/skater/pic09.png'} alt="Eight slide" />   
                </Carousel.Item>
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/skater/pic10.png'} alt="Eight slide" />   
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

export default SkaterPage;