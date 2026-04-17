import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from "./project/ProjectCarousel";
import Contact from './Contact'; 
import Nav from './Nav'; 

const images = [
  "img/mons/pic01.jpg",
  "img/mons/pic02.jpg",
  "img/mons/pic03.jpg",
  "img/mons/pic04.jpg",
  "img/mons/pic05.jpg",
  "img/mons/pic06.jpg",
  "img/mons/pic07.jpg",
];


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
                  <p className="titleContainer">Mons - Cafe Europa: BeeHive</p>
                  <p>In March 2015, I delivered my first project as part of the Ars Electronica Solutions team: GeoPulse BeeHive Mons.</p>
                  <p>One part of the project was an Android and iOS app for collecting and contextualizing video content through georeferences. People could record videos that were stored and indexed in a database. At Cafe Europa, an interactive table allowed visitors to Mons, the European Capital of Culture, to browse videos by topic or place.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>BeeHive served as the central metaphor: like bees, registered participants moved through the city with their smartphones, captured events from multiple perspectives, and returned the material to a shared collective pool.</p>
                  <p>BeeHive is a co-production of Ars Electronica and Mons 2015 with the support of the Austrian Cultural Forum in Brussels, the Austrian Ministry of Culture and the Austrian Embassy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProjectCarousel images={images} />
        <Contact /> 
      </>
    );
  }
}

export default MonsPage;
