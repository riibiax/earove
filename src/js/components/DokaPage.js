import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class DokaPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Doka Group - BAUMA</p>
                  <p>BAUMA is an international trade fair for construction machinery, building materials machinery, mining machinery, construction vehicles and construction equipment.</p>
                  <p>For the Doka Groupâ€™s trade show booth, Ars Electronica Solutions provided an attractive, innovative presentation possibilities to vividly depict the companyâ€™s worldwide network of locations. This was accomplished by means of two central, interactive Reference Walls for the visual presentation of geo-referenced data.</p>
                  <p>The two Wallsâ€”each consisting of 12 monitorsâ€”played a dominant role at the booth as eye-catching attractions displaying special effects to steer trade show visitors inside and to encourage them to interact with Dokaâ€™s sales force.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The main motif is a globe displaying localized references to Doka. Itâ€™s also possible to rotate the globe, zoom in and select individual spots. A variety of formats including videos, photographic stills, texts and statistics graphically document the relevance of the reference.</p>
                  <p>My involvement as part of the Ars Electronica engineering team included the development of Ars Electronica Solutions' GeoStage Software.</p>
                  <p>Technologies: C#, Unity3D, TUIO, QGis, GlobalMapper.</p>
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
                  <img className="d-block w-100" src={'img/doka/pic01.jpg'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/doka/pic02.jpg'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/doka/pic03.jpg'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/doka/pic04.jpg'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/doka/pic05.jpg'} alt="Fifth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/doka/pic06.jpg'} alt="Sixth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/doka/pic07.jpg'} alt="Seventh slide" />   
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

export default DokaPage;
