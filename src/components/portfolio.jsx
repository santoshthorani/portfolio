import React from "react";

//import stock
import hbl from "../img/hbl.png";
import help from "../img/help.png";
import khaity from "../img/khaity.png";
import goto from "../img/goto.png";
import ck from "../img/ck.png";
import mirha from "../img/mirha.png"
import shinnyarts from "../img/shinnyarts.png";
import talent from "../img/talent-view.png";
import shifam from "../img/shifam-patient.png";
import whosup from "../img/whosup.png";
import shifaamdr from "../img/shifaam-dr.png";
import clicks2 from "../img/2clicks.png";
import tresor from "../img/tresor.png";
import orderify from "../img/orderify.png";
import gitlab from "../img/logo-gitlab.svg";
import playstore from "../img/logo-google-playstore.svg";
import "../portfolio.css";

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
                  These projects were made whether in a professional context or
                  by my own.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          {/* Tabs Java & Kotlin, Flutter and Web Application */}
          <ul
            className="nav nav-tabs justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="kotlin-java-tab"
                data-toggle="tab"
                href="#kotlin-java"
                role="tab"
                aria-controls="kotlin-java"
                aria-selected="true"
              >
                Native Android
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="flutter-tab"
                data-toggle="tab"
                href="#flutter"
                role="tab"
                aria-controls="flutter"
                aria-selected="false"
              >
                Flutter
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="web-tab"
                data-toggle="tab"
                href="#web"
                role="tab"
                aria-controls="web"
                aria-selected="false"
              >
                Web
              </a>
            </li>
          </ul>
          <br />

          <div className="tab-content" id="myTabContent">
            {/* 1. Kotlin & Java Tab */}
            <div
              className="tab-pane fade show active"
              id="kotlin-java"
              role="tabpanel"
              aria-labelledby="kotlin-java-tab"
            >
              <div className="row">
                {/* Hbl */}
                 {/* Hbl */}
            <div className="col-md-4">
              <div className="work-box">
                <a href={hbl} >
                  <div className="work-img">
                    <img src={hbl} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-10">
                        <h2 className="w-title">HBL Mobile App</h2>
                      <div className="w-more">
                        <span className="w-cdescription">
                          <div>
                            <p>HBL Banking app in Pakistan with 3 million monthly active users.</p>
                            <p>Responsible for design and development of new features, R&D, and POC.</p>
                          </div>
                        </span>
                      </div>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Java | Kotlin
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="w-like">
                          {/* <span className="ion-ios-plus-outline"></span> */}
                          <a href="https://play.google.com/store/apps/details?id=com.hbl.android.hblmobilebanking" target="_blank">

                          <img width="35" height="35" src={playstore}/>
                            </a>
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
                <a href={help} >
                  <div className="work-img">
                    <img src={help} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-10">
                        <h2 className="w-title">Helpp</h2>
                        <div className="w-more">
                        <span className="w-cdescription">
                          <div>
                         <p>Home Services platform connecting customers to service professionals.</p> 
                         <p>Responsible for building new feature, understanding business requirements,communication with designers, backend developers and deploying on the play store </p>
                          </div>
                        </span>
                      </div>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Kotlin
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="w-like">
                          {/* <span className="ion-ios-plus-outline"></span> */}
                          <a href="https://play.google.com/store/apps/details?id=com.helpp.customer" target="_blank">
                          <img width="35" height="35" src={playstore}/>
                            </a>
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
                          <div className="col-sm-10">
                            <h2 className="w-title">Goto Online Shopping</h2>
                            <div className="w-more">
                              <span className="w-cdescription">
                                <div>
                                  <p>Multi-Vendor shopping application </p>
                                  <p>
                                    Responsibile for building the application
                                    from scratch, communication with
                                    cross-function team of desginers, backend
                                    developers, product team, and managers,
                                    deploying on the play store.
                                  </p>
                                </div>
                              </span>
                            </div>
                            <div className="w-more">
                              <span className="w-ctegory">
                                Java | Kotlin | MVVM Architecture
                              </span>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Shifaam Patient */}
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={shifam} data-lightbox="gallery-mf">
                      <div className="work-img">
                        <img src={shifam} alt="" className="img-fluid" />
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-10">
                            <h2 className="w-title">
                              Shifaam HealthApp – Your Health
                            </h2>
                            <div className="w-more">
                              <span className="w-cdescription">
                                <div>
                                  <p>
                                    Health care solution, connecting both
                                    patient and doctors. Appointment booking,
                                    Lab Test bookings, managing history of labs,
                                    appointments, prescriptions etc.
                                  </p>
                                </div>
                              </span>
                            </div>
                            <div className="w-more">
                              <span className="w-ctegory">Kotlin</span>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="w-like">
                              {/* <span className="ion-ios-plus-outline"></span> */}
                              <a href="https://play.google.com/store/apps/details?id=com.shifaam.patient" target="_blank">
                              <img width="35" height="35" src={playstore}/>
                            </a>
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
                          <div className="col-sm-10">
                            <h2 className="w-title">Shifaam Doctor App</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Kotlin</span>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="w-like">
                              {/* <span className="ion-ios-plus-outline"></span> */}
                              <a href="https://play.google.com/store/apps/details?id=com.shifam.doctor" target="_blank">
                          {/* <span className={playstore}></span>   */}
                          <img width="35" height="35" src={playstore}/>
                            </a>
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
                          <div className="col-sm-10">
                            <h2 className="w-title">Talentview App</h2>
                            <div className="w-more">
                              <span className="w-cdescription">
                                <div>Human Resource management application</div>
                              </span>
                            </div>
                            <div className="w-more">
                              <span className="w-ctegory">Java | Kotlin</span>
                            </div>
                          </div>
                          <div className="col-sm-2">
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
                          <div className="col-sm-10">
                            <h2 className="w-title">
                              2Clicks Client & Partner
                            </h2>
                            <div className="w-more">
                              <span className="w-cdescription">
                                <div>
                                  <p>
                                    2clicks is a smart phone app., which
                                    connects the person in need of computer
                                    repair to a reliable & qualified technician
                                    who will visit you on site, anywhere in
                                    Toronto. The technician diagnoses & trouble
                                    shoot your issues related to software and
                                    hard drive for Widows and Mac operating
                                    system.
                                  </p>
                                </div>
                              </span>
                            </div>
                            <div className="w-more">
                              <span className="w-ctegory">Java</span>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Flutter Tab */}
            <div
              className="tab-pane fade"
              id="flutter"
              role="tabpanel"
              aria-labelledby="flutter-tab"
            >
              <div className="row">
                {/* Khaity */}
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={khaity} >
                      <div className="work-img">
                        <img src={khaity} alt="Khaity" className="img-fluid" />
                        <div className="overlay"></div>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-10">
                            <h2 className="w-title">
                            Khaity
                            </h2>
                            <div className="w-more">
                              <span className="w-cdescription">
                                <div>
                                  <p>
                                  The Khaity Farmers app is developed to facilitate
                          farmers in the whole ecosystem of farming. It’s
                          facilitating farmers at every stage of the farming
                          cycle.
                                  </p>
                                </div>
                              </span>
                            </div>
                            <div className="w-more">
                              <span className="w-ctegory">Flutter | Dart</span>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="w-like">
                              {/* <span className="ion-ios-plus-outline"></span> */}
                              <a href="https://play.google.com/store/apps/details?id=com.khaity.khaity" target="_blank">
                              <img width="35" height="35" src={playstore}/>
                             </a>
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
                          <div className="col-sm-10">
                            <h2 className="w-title">OK Click n Collect</h2>
                            <div className="w-more">
                              <span className="w-cdescription">
                                <div>
                                  <p>
                                    OK, Click n Collect is the easiest way to
                                    shop for groceries and household needs from
                                    your neighborhood retailers
                                  </p>
                                </div>
                              </span>
                            </div>
                            <div className="w-more">
                              <span className="w-ctegory">Flutter | Dart</span>
                            </div>
                          </div>
                          <div className="col-sm-2">
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
                          <div className="col-sm-10">
                            <h2 className="w-title">Who's Up?!</h2>
                            <div className="w-more">
                              <span className="w-cdescription">
                                <div>
                                  <p>
                                    Provides an interactive platform for people
                                    hosting sport activities and for people.
                                  </p>
                                  <p>
                                    Looking to participate in those activities,
                                    connecting them together to play the game
                                    they love.
                                  </p>
                                </div>
                              </span>
                            </div>
                            <div className="w-more">
                              <span className="w-ctegory">Flutter | Dart</span>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Application Tab */}
            <div
              className="tab-pane fade"
              id="web"
              role="tabpanel"
              aria-labelledby="web-tab"
            >
              <div className="row">
                {/* Orderify*/}
<div className="col-md-4">
                  <div className="work-box">
                    <a href={orderify} >
                      <div className="work-img">
                        <img src={orderify} alt="" className="img-fluid" />
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-10">
                            <h2 className="w-title">Orderify</h2>
                            <div className="w-more">
                              <span className="w-cdescription">
                                <div>
                                  <p>
Orderify seamlessly synchronizes Shopify orders to Google Sheets 
                                  </p>
                                 
                                </div>
                              </span>
                            </div>
                            <div className="w-more">
                              <span className="w-ctegory">PHP | Laravel | Google Sheet API | Mysql | REST APIS </span>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="w-like">
                              {/* <span className="ion-social-github-outline"></span> */}
                              <a href="https://gitlab.com/santoshthorani/orderify/" target="_blank">
                          {/* <span className="ion-social-github-outline"></span>   */}
                          <img width="35" height="35" src={gitlab}/>
                            </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Mirha */}

                <div className="col-md-4">
                  <div className="work-box">
                    <a href={mirha} >
                      <div className="work-img">
                        <img src={mirha} alt="" className="img-fluid" />
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-10">
                            <h2 className="w-title">MirhaJewels Dubai</h2>
                            <div className="w-more">
                              <span className="w-cdescription">
                                <div>
                                  <p>
                                  Mirha Jewels is a jewelry brand that offers a wide range of customize jewelry items. 
The brand is known for its unique and elegant designs with fast delivery in UAE. 
                                  </p>
                                 
                                </div>
                              </span>
                            </div>
                            <div className="w-more">
                              <span className="w-ctegory"> Shopify | Liquid | HTML | CSS | JS </span>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="w-like">
                              {/* <span className="ion-ios-plus-outline"></span> */}
                              <a href="https://mirhajewels.com" target="_blank">
                          <span className="ion-link"></span>  
                            </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>                  
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={shinnyarts} >
                      <div className="work-img">
                        <img src={shinnyarts} alt="" className="img-fluid" />
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-10">
                            <h2 className="w-title">ShinnyArts</h2>
                            <div className="w-more">
                              <span className="w-cdescription">
                                <div>
                                  <p>
                                  ShinnyArts is a jewelry brand that offers a wide range of customize jewelry items within budget. 
                                  </p>
                                 
                                </div>
                              </span>
                            </div>
                            <div className="w-more">
                              <span className="w-ctegory"> Shopify | Liquid | HTML | CSS | JS </span>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="w-like">
                              {/* <span className="ion-ios-plus-outline"></span> */}
                              <a href="https://shinnyarts.com" target="_blank">
                              <span className="ion-link"></span>  
                            </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
{/* Tresor */}

                <div className="col-md-4">
                  <div className="work-box">
                    <a href={tresor} >
                      <div className="work-img">
                        <img src={tresor} alt="" className="img-fluid" />
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-10">
                            <h2 className="w-title">Tresor Jewels</h2>
                            <div className="w-more">
                              <span className="w-cdescription">
                                <div>
                                  <p>
                                  Tresor Jewels is a 925 Sterling Silver jewelry brand that offers a wide range of exclusive, modern and minimalistic jewelry items within budget. 
                                  </p>
                                 
                                </div>
                              </span>
                            </div>
                            <div className="w-more">
                              <span className="w-ctegory"> Shopify | Liquid | HTML | CSS | JS </span>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="w-like">
                              {/* <span className="ion-ios-plus-outline"></span> */}
                              <a href="https://tresorjewelspk.com" target="_blank">
                              <span className="ion-link"></span>  
                            </a>
                            </div>
                      
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>


            
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
