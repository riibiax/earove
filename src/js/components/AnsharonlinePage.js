import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact'; 
import Nav from './Nav'; 

class AnsharonlinePage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <div className="colsContainer container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-12"> 
              <div className="row remove-paddings-margins">
                <div className="col-md-6">
                  <p className="titleContainer">Anshar Online</p>
                  <p>In 2017, I returned to Switzerland and joined OZWE Games to develop VR games. I first designed and implemented cinematics for Anshar Online, then continued as a graphics programmer focused on shaders and performance. I also worked as a game designer and developer, building levels and creating the game trailer.</p>
                  <p>Anshar Online is a multiplayer space shooter where players fight cooperative battles across more than 50 missions, contracts, and assaults.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>Players can race against each other, compete in 8-player deathmatches, and improve their ships through loot drops, resources, upgrades, and class changes.</p>
                  <p>The project gave me the chance to work across cinematic direction, real-time graphics, level design, optimization, and production assets for a commercial VR title.</p>
                  <p>Technologies: C#, Shaders, Unity3D, Blender.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <div className="row justify-content-center awards">
            <div className="col-md-4 d-flex justify-content-center">
              <img src="img/ao/award-ao-casualconnect-2018-v3@2x.png" alt="&quot;Best VR Game&quot; Nominated at the Indie Prize London - Casual Connect Europe 2018" className="img-fluid" />
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <img src="img/ao/award-ao-halo-award-2018-v3@2x.png" alt="&quot;Best VR Game&quot; Winner Bronze at the Halo Awards - VRDays Europe 2018" className="img-fluid" />
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <img src="img/ao/award-ao-imga-2019-v3@2x.png" alt="&quot;Best VR Game&quot; Nominated at the 15th IMGA San Francisco 2019" className="img-fluid" />
            </div>
          </div>
          <div className="row justify-content-center awards">
            <div className="col-md-6 d-flex justify-content-center">
              <img src="img/ao/award-ao-indigo-award-2019-v3@2x.png" alt="&quot;Best Mobile Game&quot; Winner Gold category at the Indigo Award 2019" className="img-fluid" />
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img src="img/ao/award-ao-ludicious-2019-v3@2x.png" alt="&quot;Best Swiss Game&quot; Nominated at the Ludicious &amp; SGDA Game Awards 2019" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="container-fluid remove-paddings-margins"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-8 d-flex justify-content-center"> 
              <div class="embed-responsive embed-responsive-16by9 movie">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/fP8N_tY6SfE?si=2wihavxPurvlTLAJ&rel=0&amp;showinfo=0&amp;loop=1&amp;vq=hd1080" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid remove-paddings-margins py-4"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-8 remove-paddings-margins ">
              <Carousel fade interval={3000}>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/ao/pic01.jpg'} alt="First slide" />
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/ao/pic02.jpg'} alt="Second slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/ao/pic03.jpg'} alt="Third slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/ao/pic04.jpg'} alt="Fourth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/ao/pic05.jpg'} alt="Fifth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/ao/pic06.jpg'} alt="Sixth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/ao/pic07.jpg'} alt="Seventh slide" />   
                </Carousel.Item>
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/ao/pic08.jpg'} alt="Eight slide" />   
                </Carousel.Item>    
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/ao/pic09.jpg'} alt="Ninth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/ao/pic10.jpg'} alt="Tenth slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/ao/pic11.jpg'} alt="11th slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/ao/pic12.jpg'} alt="12th slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/ao/pic13.jpg'} alt="13th slide" />   
                </Carousel.Item>  
                <Carousel.Item>  
                  <img className="d-block w-100" src={'img/ao/pic14.jpg'} alt="14th slide" />   
                </Carousel.Item>  
              </Carousel>
            </div>
          </div>
        </div>
        <div className="container-fluid remove-paddings-margins pt-3"> 
          <div className="row justify-content-center remove-paddings-margins">
            <div className="col-md-8 d-flex justify-content-center"> 
              <div class="embed-responsive embed-responsive-16by9 movie movieVimeo" >
                <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/379442315" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <Contact /> 
      </>
    );
  }
}

export default AnsharonlinePage;
