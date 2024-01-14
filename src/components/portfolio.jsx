import React from "react";

//import stock
import hbl from "../img/hbl.png";
import help from "../img/help.png";
import khaity from "../img/khaity.png";
import goto from "../img/goto.png";
import ck from "../img/ck.png";

import talent from "../img/talent-view.png";
import shifam from "../img/shifam-patient.png";
import whosup from "../img/whosup.png";
import shifaamdr from "../img/shifaam-dr.png";
import PokeRosterLight from "../img/PokeRosterLight.png";
import clicks2 from "../img/2clicks.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">SOME PROJECTS I WORKED ON</h3>
                <p className="subtitle-a">
                This projects were made wether in a professional contex,by my own.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            
          
        
        
          {/* Hbl */}
            <div className="col-md-4">
              <div className="work-box">
                <a href={hbl} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={hbl} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">HBL Mobile App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Java | Kotlin
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>              {/* col md 4 closing div */}


                      {/* Helpp */}
            <div className="col-md-4">
              <div className="work-box">
                <a href={help} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={help} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Helpp</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Kotlin
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>              {/* col md 4 closing div */}

{/* Goto */}

<div className="col-md-4">
              <div className="work-box">
                <a href={goto} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={goto} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Goto Online Shopping</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Kotlin
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>              {/* col md 4 closing div */}
          {/* Shifaam Patient */}

          <div className="col-md-4">
              <div className="work-box">
                <a href={shifam} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={shifam} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Shifaam HealthApp – Your Healt</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Kotlin
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>    
          {/* Shifam Dr */}
          <div className="col-md-4">
              <div className="work-box">
                <a href={shifaamdr} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={shifaamdr} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Shifaam Doctor App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Kotlin
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>    

{/* Talent */}
<div className="col-md-4">
              <div className="work-box">
                <a href={talent} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={talent} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Talentview App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Kotlin
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>    
         {/* Khaity  */}
         <div className="col-md-4">
              <div className="work-box">
                <a href={khaity} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={khaity} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Khaity</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Flutter
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>    
         {/* CK */}
         
         <div className="col-md-4">
              <div className="work-box">
                <a href={ck} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={ck} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">OK Click n Collect</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Flutter
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>    
{/* Whosupp */}
<div className="col-md-4">
              <div className="work-box">
                <a href={whosup} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={whosup} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Who's Up?!</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Flutter
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>    
         
                    {/* Pokster */}
                    {/* 2clicks */}
                    <div className="col-md-4">
              <div className="work-box">
                <a href={clicks2} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={clicks2} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">2Clicks Client & Partner</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Java
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>    
         
                              {/*Personality */}

          </div>                {/* row closing div */}
        </div>
      </section>
    );
  }
}

export default Portfolio;
