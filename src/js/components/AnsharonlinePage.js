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
                  <p>In 2017 I moved back to Switzerland and I joined the OZWE Games team to develop VR videogames. At the beginning my main task was to design and implement cinematics for a massively multiplayer online game (MMO), Anshar Online. After that, I continued to work as a Graphics Programmer focusing on the video game shaders and performances. As Game Designer/Developer I built some Anshar Online levels and I realized the videogame trailer.</p>
                  <p>Anshar Online is an online multiplayer space shooter. The players can fight intense coop battles in over 50 missions, contracts and assaults, against ever more challenging opponents.</p>
                </div>
                <div className="col-md-6">
                  <p>&nbsp;</p>
                  <p>They can compete against other players in an exhilarating race to determine who among you is the fastest, and battle in an 8-player death match to determine who is the top ace.</p>
                  <p>Each successful mission increases the player level and skill, preparing for the next fight. The players can customize theirs ships by mounting equipment obtained through in-game loot drops, as well as by selecting upgrades in exchange for obtained resources. Or switch ship classes and get themselves a tank or engineer ship, each with specialized weaponry, unique special abilities, and a variety of skins.</p>
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
              <img src="img/ao/award-ao-imga-2019-v3@2x.png" alt="Best VR Gameâ€ Nominated at the 15th IMGA San Francisco 2019" className="img-fluid" />
            </div>
          </div>
          <div className="row justify-content-center awards">
            <div className="col-md-6 d-flex justify-content-center">
              <img src="img/ao/award-ao-indigo-award-2019-v3@2x.png" alt="Best Mobile Gameâ€ Winner Gold category at the Indigo Award 2019" className="img-fluid" />
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img src="img/ao/award-ao-ludicious-2019-v3@2x.png" alt="Best Swiss Gameâ€œ Nominated at the Ludicious &amp; SGDA Game Awards 2019" className="img-fluid" />
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
