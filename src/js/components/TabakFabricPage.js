import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import "../../css/tabakFabric.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class TabakFabrikPage extends Component {
  componentDidMount() {
    const viewer = document.getElementById('viewer');
    viewer.src = viewer.src;
    const three = document.getElementById('main-threejs');
    const controls = document.getElementById('controls');
    controls.style.display = "none";
    const playPauseControl = document.getElementById('playPauseControl');

    // iOS iframe auto-resize workaround
    if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
      viewer.style.width = getComputedStyle(viewer).width;
      viewer.style.height = getComputedStyle(viewer).height;
      viewer.setAttribute('scrolling', 'no');
    }

    viewer.onload = () => {
      viewer.contentWindow.document.body.onclick = function() {
        controls.style.display = "block";
        three.setAttribute("style", "margin-bottom:12em");
      }
    };

    window.stopAnimation = function() {
      viewer.src = viewer.src;
      controls.style.display = "none";
      three.setAttribute("style", "margin-bottom:6em");
    }

    window.pauseAnimation = function() {
      playPauseControl.src = "img/controls/play.png";
      playPauseControl.alt = "Play"; 
      playPauseControl.setAttribute('onclick', 'playAnimation()');
      viewer.contentWindow.TabakFabrik.togglePlay();
    }

    window.playAnimation = function() {
      playPauseControl.src = "img/controls/pause.png";
      playPauseControl.alt = "Pause"; 
      playPauseControl.setAttribute('onclick', 'pauseAnimation()');
      viewer.contentWindow.TabakFabrik.togglePlay();
    }
  }

  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Tabak Fabrik</p>
                  <p>Tabak Fabrik (12min), is a generative visual piece that I created to record the memories I have of my experience working at Ars Electronica Solutions.</p>
                  <p>The main concept of this introspective piece was to depict and paint places, people and events that I encountered over the last two years: the creation of an abstract narrative as a relationship to experiences that will remain.</p>
                  <p>In the city of Linz, Austria, the Tabak Fabrik is an 19th century ex-tobacco factory that was transformed into a creative hub: a collective of innovative companies and, where Ars Electronica Solutions offices are located.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>Using Photo Scanning technology I recreated 3D models of buildings, spaces, statues and objects that constitute this creative universe in the Tabak Fabrik. Afterwards, I developed a framework able to visualize the data that I collected of the important moments of this time. Emails, web traffic, pictures and sounds were converted in binary codes which animate the 3D models.</p>
                  <p>This data is not visible for privacy reasons: the generative animation below is a clean version.</p>
                  <p>Technologies: Three.js, Wireshark, GLSL, AgiSoft Photoscan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid remove-paddings-margins"> {/* Use container-fluid for full width */}
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-8 remove-paddings-margins"> {/* Adjust column size for larger screens and full width on smaller screens */}
              <Carousel fade interval={3000}>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/tabakfabrik/pic01.png'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/tabakfabrik/pic02.png'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/tabakfabrik/pic03.png'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/tabakfabrik/pic04.png'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/tabakfabrik/pic05.png'} alt="Fifth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/tabakfabrik/pic06.png'} alt="Sixth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/tabakfabrik/pic07.png'} alt="Seventh slide" />   
                </Carousel.Item>  
              </Carousel>
            </div>
          </div>
        </div>

        <div className="threejs" id="main-threejs">
          <iframe id="viewer" name="viewer" src="/playframe.html" allowFullScreen></iframe>
          <div id="controls">
            <img src="img/controls/stop.png" id="stopControl" alt="Stop" onClick={() => window.stopAnimation()} />
            <img src="img/controls/pause.png" id="playPauseControl" alt="Pause" onClick={() => window.pauseAnimation()} />
          </div>
        </div>

        <Contact /> 
      </>
    );
  }
}

export default TabakFabrikPage;