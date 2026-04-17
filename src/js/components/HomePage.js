import React, { Component } from "react";
import "../../css/main.css";
import "../../css/homepage.css";
import Contact from './Contact'; 
import Nav from './Nav'; 
import About from './About'; 
import { Link } from "react-router-dom";
import ParticlesScene from './threejs/ParticlesScene';

class HomePage extends Component {
  render() {
    return (
      <>
        <Nav /> 
        <ParticlesScene />
        <section id="projects">
          <ul>
            <li>
              <Link to="/kf">
                <div className="img" style={{backgroundImage: "url('img/kf/kf.png')"}}></div>
                <div className="tableCustom">
                  <div className="rowCustom">
                    <div className="cellCustom">
                      <h1>KF Wathces</h1>
                    </div>
                  </div>
                </div>
              </Link>    
            </li>
            <li>
              <Link to="/ecole42">
                <div className="img" style={{backgroundImage: "url('img/42/42.png')"}}></div>
              </Link>    
            </li>
            <li>
              <Link to="/vaudoise">
                <div className="img" style={{backgroundImage: "url('img/vaudoise/vaudoisEscape.png')"}}></div>
                <div className="tableCustom">
                  <div className="rowCustom">
                    <div className="cellCustom">
                      <h1>THE WAY</h1>
                    </div>
                  </div>
                </div>
              </Link>    
            </li>
            <li>
              <Link to="/spinny">
                <div className="img" style={{backgroundImage: "url('img/spinny/spinny.png')"}}></div>
              </Link>    
            </li>
            <li>
              <Link to="/deathlap">
                <div className="img" style={{backgroundImage: "url('img/deathlap/deathlap.png')"}}></div>
              </Link>    
            </li>
            <li>
              <Link to="/ansharonline">
                <div className="img" style={{backgroundImage: "url('img/ao/ao.png')"}}></div>
                <div className="tableCustom">
                </div>
              </Link>    
            </li>
            <li>
              <Link to="/baudata">
                <div className="img" style={{backgroundImage: "url('img/baudata/baudata.jpg')"}}></div>
                <div className="tableCustom">
                  <div className="rowCustom">
                    <div className="cellCustom">
                      <h1>BAUDATA</h1>
                    </div>
                  </div>
                </div>
              </Link>    
            </li>
            <li>
              <Link to="/aef">
                <div className="img" style={{backgroundImage: "url('img/aef/aef.jpg')"}}></div>
                <div className="tableCustom">
                  <div className="rowCustom">
                    <div className="cellCustom">
                      <h1>ARS ELECTRONICA FESTIVAL</h1>
                    </div>
                  </div>
                </div>
              </Link>    
            </li>
            <li>
              <Link to="/tabakfabrik">
                <div className="img" style={{backgroundImage: "url('img/tabakfabrik/tabakfabrik.jpg')"}}></div>
                <div className="tableCustom">
                  <div className="rowCustom">
                    <div className="cellCustom">
                      <h1>TABAK FABRIK</h1>
                    </div>
                  </div>
                </div>
              </Link>    
            </li>
            <li>
              <Link to="/saltmine">
                <div className="img" style={{backgroundImage: "url('img/saltmine/saltmine.jpg')"}}></div>
                <div className="tableCustom">
                  <div className="rowCustom">
                    <div className="cellCustom">
                      <h1>SALT MINE</h1>
                    </div>
                  </div>
                </div>
              </Link>    
            </li>
            <li>
              <Link to="/doka">
                <div className="img" style={{backgroundImage: "url('img/doka/doka.jpg')"}}></div>
                <div className="tableCustom">
                  <div className="rowCustom">
                    <div className="cellCustom">
                      <h1>DOKA - BAUMA</h1>
                    </div>
                  </div>
                </div>
              </Link>    
            </li>
            <li>
              <Link to="/bmeia">
                <div className="img" style={{backgroundImage: "url('img/bmeia/bmeia.jpg')"}}></div>
                <div className="tableCustom">
                  <div className="rowCustom">
                    <div className="cellCustom">
                      <h1>BMEIA</h1>
                    </div>
                  </div>
                </div>
              </Link>    
            </li>
            <li>
              <Link to="/spymuseum">
                <div className="img" style={{backgroundImage: "url('img/spymuseum/spymuseum.jpg')"}}></div>
                <div className="tableCustom">
                  <div className="rowCustom">
                    <div className="cellCustom">
                      <h1>Spy Museum</h1>
                    </div>
                  </div>
                </div>
              </Link>    
            </li>
            <li>
              <Link to="/metec">
                <div className="img" style={{backgroundImage: "url('img/metec/metec.jpg')"}}></div>
                <div className="tableCustom">
                  <div className="rowCustom">
                    <div className="cellCustom">
                      <h1>Metec</h1>
                    </div>
                  </div>
                </div>
              </Link>    
            </li>
            <li>
              <Link to="/mons">
                <div className="img" style={{backgroundImage: "url('img/mons/mons.jpg')"}}></div>
                <div className="tableCustom">
                  <div className="rowCustom">
                    <div className="cellCustom">
                      <h1>BeeHive</h1>
                    </div>
                  </div>
                </div>
              </Link>    
            </li>
            <li>
              <Link to="/lightscape">
                <div className="img" style={{backgroundImage: "url('img/lightscape/lightscape.jpg')"}}></div>
                <div className="tableCustom">
                  <div className="rowCustom">
                    <div className="cellCustom">
                      <h1>Lightscape</h1>
                    </div>
                  </div>
                </div>
              </Link>    
            </li>
            <li>
              <Link to="/machine">
                <div className="img" style={{backgroundImage: "url('img/machine/machine.gif')"}}></div>
              </Link>    
            </li>
            <li>
              <Link to="/fireplace">
                <div className="img" style={{backgroundImage: "url('img/fireplace/fireplace.jpg')"}}></div>
                <div className="tableCustom">
                  <div className="rowCustom">
                    <div className="cellCustom">
                      <h1>Fireplace</h1>
                    </div>
                  </div>
                </div>
              </Link>    
            </li>
            <li>
              <Link to="/eames">
                <div className="img" style={{backgroundImage: "url('img/eames/eames.png')"}}></div>
                <div className="tableCustom">
                  <div className="rowCustom">
                    <div className="cellCustom">
                      <h1>Re-Think the Eames</h1>
                    </div>
                  </div>
                </div>
              </Link>    
            </li>
            <li>
              <Link to="/onceuponatale">
                <div className="img" style={{backgroundImage: "url('img/onceuponatale/onceuponatale.jpg')"}}></div>
                <div className="tableCustom">
                  <div className="rowCustom">
                    <div className="cellCustom">
                      <h1>Once Upon a Tale</h1>
                    </div>
                  </div>
                </div>
              </Link>    
            </li>
            <li>
              <Link to="/skater">
                <div className="img" style={{backgroundImage: "url('img/skater/skater.jpg')"}}></div>
                <div className="tableCustom">
                  <div className="rowCustom">
                    <div className="cellCustom">
                      <h1>The Skater</h1>
                    </div>
                  </div>
                </div>
              </Link>    
            </li>
            <li>
              <div className="tableCustom">
                <div className="rowCustom">
                  <div className="cellCustom">
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <About /> 
        <Contact /> 
      </>
    );
  }
}

export default HomePage;
