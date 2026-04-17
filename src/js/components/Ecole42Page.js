import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from "./project/ProjectCarousel";
import Contact from './Contact'; 
import Nav from './Nav'; 

const images = [
  "img/42/pic01.png",
  "img/42/pic02.png",
  "img/42/pic03.png",
  "img/42/pic04.png",
  "img/42/pic05.png",
];


class Ecole42Page extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-12 "> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Ecole 42 Renens</p>
                  <p>At UDIMU SA, I worked on a set of interactive installations for 42 Lausanne, the computer science school based on peer-to-peer learning.</p>
                  <p>The space was designed for students, visitors, and staff, with the goal of communicating the school's mission and learning culture through playful interaction.</p>
                  <p>For the inauguration, we created an augmented reality treasure hunt for iOS and Android devices.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>My role covered both design and development, including interactive experiences built with Unity 3D and React JS. The AR game was developed with Unity's AR Foundation framework.</p>
                  <p>Technologies: C#, Shaders, Unity3D, AR Foundation Framework, Blender.</p>
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

export default Ecole42Page;
