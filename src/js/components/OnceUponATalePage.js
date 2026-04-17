import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from "./project/ProjectCarousel";
import Contact from './Contact'; 
import Nav from './Nav'; 

const images = [
  "img/onceuponatale/pic01.png",
  "img/onceuponatale/pic02.png",
  "img/onceuponatale/pic03.png",
  "img/onceuponatale/pic04.png",
  "img/onceuponatale/pic05.png",
  "img/onceuponatale/pic06.png",
  "img/onceuponatale/pic07.png",
  "img/onceuponatale/pic08.png",
];


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
                  <p>"Once Upon a Tale" is a tactile book and interactive storytelling application.</p>
                  <p>Based on well-known children's stories, the project invites readers to reinvent tales and create their own narrative combinations.</p>
                  <p>Using the card game or the touch interface, players choose characters and settings from different stories, generating countless combinations of text and illustration.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>The stories can be mixed and changed at any moment: Cinderella can become the big bad wolf in Bluebeard's castle.</p>
                  <p>Development by Andrea Rovescalli and Praiya Chinagarn. Illustrations by Benjamin Ben Kemoun.</p>
                  <p>Workshop led by Etienne Mineur and Nicolas Nova.</p>
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
        <ProjectCarousel images={images} />
        <Contact /> 
      </>
    );
  }
}

export default OnceUponATalePage;
