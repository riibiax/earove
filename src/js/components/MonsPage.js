import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class MonsPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Mons â€“ CafÃ© Europa: BeeHive</p>
                  <p>In March 2015 I delivered my first project as part of Ars Electronica Solutions team: GeoPulse BeeHive Mons.</p>
                  <p>A part of the project is an Android/iOS App for collecting and contextualizing video content using geo-references. People could record videos that are stored and indexed in a Database. At the â€œCafÃ© Europaâ€ an interactive table enables the visitors of Mons,the European Capital of Culture, to view the stored videos that they find interesting in terms of topic or place.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The term BeeHive serves as the central metaphor: like in a society of bees, registered participants swarm out with their smartphones, capture footage of an event from a multitude of perspectives and return it (to the hive) to be ingested into the collective pool.</p>
                  <p>BeeHive is a co-production of Ars Electronica and Mons 2015 with the support of the Austrian Cultural Forum in Brussels, the Austrian Ministry of Culture and the Austrian Embassy.</p>
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
                  <img className="d-block w-100" src={'img/mons/pic01.jpg'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/mons/pic02.jpg'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/mons/pic03.jpg'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/mons/pic04.jpg'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/mons/pic05.jpg'} alt="Fifth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/mons/pic06.jpg'} alt="Sixth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/mons/pic07.jpg'} alt="Seventh slide" />   
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

export default MonsPage;