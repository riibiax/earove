import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from "./project/ProjectCarousel";
import Contact from './Contact'; 
import Nav from './Nav'; 

const images = [
  "img/spymuseum/pic01.jpg",
  "img/spymuseum/pic02.jpg",
  "img/spymuseum/pic03.jpg",
  "img/spymuseum/pic04.jpg",
  "img/spymuseum/pic05.jpg",
  "img/spymuseum/pic06.jpg",
  "img/spymuseum/pic07.jpg",
  "img/spymuseum/pic08.jpg",
  "img/spymuseum/pic09.jpg",
  "img/spymuseum/pic10.jpg",
];


class SpymuseumPage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Spy Museum - Berlin</p>
                  <p>In September 2015, I worked with Ars Electronica Solutions on interactive installations for the Spy Museum in Berlin.</p>
                  <p>The permanent exhibition uses multimedia and museum technology to tell stories of covert operations, espionage cases, and legendary spies across more than 3,000 square meters.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The museum combines historical objects, documents, photographs, film material, interviews, and expert testimony with interactive experiences designed to make exploration and discovery part of the visit.</p>
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

export default SpymuseumPage;
