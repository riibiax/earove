import React, { Component } from "react";
import "../../css/main.css";
import "../../css/tabakFabric.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from "./project/ProjectCarousel";
import Contact from './Contact'; 
import Nav from './Nav'; 

const images = [
  "img/tabakfabrik/pic01.png",
  "img/tabakfabrik/pic02.png",
  "img/tabakfabrik/pic03.png",
  "img/tabakfabrik/pic04.png",
  "img/tabakfabrik/pic05.png",
  "img/tabakfabrik/pic06.png",
  "img/tabakfabrik/pic07.png",
];


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
                  <p>Tabak Fabrik is a 12-minute generative visual piece created from memories of my time working at Ars Electronica Solutions.</p>
                  <p>The work depicts places, people, and events I encountered over two years, transforming them into an abstract narrative about experiences that remain.</p>
                  <p>Located in Linz, Austria, Tabak Fabrik is a 19th-century former tobacco factory transformed into a creative hub and home to Ars Electronica Solutions.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>Using photogrammetry, I recreated buildings, spaces, statues, and objects from this creative environment as 3D models. I then developed a framework to animate them with data collected from meaningful moments during that period: emails, web traffic, images, and sounds converted into binary code.</p>
                  <p>For privacy reasons, the data itself is not visible; the generative animation below is a clean version.</p>
                  <p>Technologies: Three.js, Wireshark, GLSL, AgiSoft Photoscan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProjectCarousel images={images} />

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
