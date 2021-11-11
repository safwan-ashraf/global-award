import React, { useState } from 'react'
import logo from "../../assets/images/logo.png"
import spoti from "../../assets/images/spot - image.png"
import apple from "../../assets/images/apple.svg"
import freepik from "../../assets/images/freepik-logo-.svg"
import google from "../../assets/images/google.svg"
import flaticon from "../../assets/images/flaticon.svg"
import curve from "../../assets/images/cross - line.svg"
import arrow from "../../assets/images/arrow.svg"
import bg1 from "../../assets/images/pattern - color.png"
import bg2 from "../../assets/images/pattern - color.svg"
import menu from "../../assets/images/menu.svg"
import close from "../../assets/images/close.svg"


export default function Award() {
    const[menuBar, setMenuBar]= useState(false)
    return (
        <>
            <div className="body">   
                <header>
                    <section className="wrapper">
                        <div className="left">
                            <h1>
                                <a href="#">
                                    <div className="image-box">
                                        <img src={logo} alt="images" />
                                    </div>
                                </a>
                            </h1>
                            </div>
                            <div class="right">
                                <ul className="nav">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Awards</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#" className="button">Get Start</a></li>
                                </ul>
                            </div>
                            <a id="menu-icon" onClick={()=>{
                                    setMenuBar(!menuBar)
                                }}>
                                <img src={menu} />
                            </a>
                            {menuBar?(<>
                                    <a id="close-icon" onClick={()=>{
                                    setMenuBar(!menuBar)
                            }}>
                                <img src={close} alt="image" />
                            </a>
                            <nav id="mobile-menu">
                    
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Awards</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </nav>
                            <span className="overlay" onClick={()=>{
                                setMenuBar(!menuBar)
                            }}></span>
                            </>):null}
                        </section>
                </header> 
                <section className="spotlight">
                    <section className="wrapper">
                        <div className="left">
                            <h2>2021 Global Design <span>Awards</span> Published</h2>
                            <p>Here we published 2021 global design awards for the design Competitions</p>
                            <a href="#" className="button"><span>Already impressed?</span><small>Get started today!</small></a>
                        </div>
                        <div className="right">
                            <div className="bg-box one"><img src={bg1} alt="Images" /></div>
                            <div className="bg-box two"><img src={bg2} alt="Images" /></div>
                            <div className="img-box"><img src={spoti} alt="Images" /></div>
                        </div>
                    </section>
                </section>
                <section id="gallery">
                    <section className="wrapper">
                        <ul>
                            <li>
                                <div className="top">
                                    <div className="box">
                                        <div className="img-box"><img src={apple} alt="images" /></div>
                                    </div>
                                    <p className="date">18 Jun 2020</p>
                                </div>
                                <small>Gold Winner</small>
                                <h5>Apple Design Award 2020-21</h5>
                                <span><img src={curve} alt="Images" /></span>
                                <div className="bottom">
                                    <p>United States</p>
                                    <div className="img-box"><img src={arrow} alt="images" /></div>
                                </div>
                            </li>
                            <li>
                                <div className="top">
                                    <div className="box">
                                        <div className="img-box"><img src={google} alt="images" /></div>
                                    </div>
                                    <p className="date">18 Jun 2020</p>
                                </div>
                                <small>Runner Up</small>
                                <h5>Google Design Award 2020-21</h5>
                                <span><img src={curve} alt="Images" /></span>
                                <div className="bottom">
                                    <p>India, New Delhi</p>
                                    <div className="img-box"><img src={arrow} alt="images" /></div>
                                </div>
                            </li>
                            <li>
                                <div className="top">
                                    <div className="box">
                                        <div className="img-box"><img src={freepik} alt="images" /></div>
                                    </div>
                                    <p className="date">18 Jun 2020</p>
                                </div>
                                <small>Silver Award</small>
                                <h5>Freepik Design Award 2020-21</h5>
                                <span><img src={curve} alt="Images" /></span>
                                <div className="bottom">
                                    <p>France</p>
                                    <div className="img-box"><img src={arrow} alt="images" /></div>
                                </div>
                            </li>
                            <li>
                                <div className="top">
                                    <div className="box">
                                        <div className="img-box"><img src={flaticon} alt="images" /></div>
                                    </div>
                                    <p className="date">18 Jun 2020</p>
                                </div>
                                <small>Special Jury</small>
                                <h5>Apple Design Award 2020-21</h5>
                                <span><img src={curve} alt="Images" /></span>
                                <div className="bottom">
                                    <p>New York</p>
                                    <div className="img-box"><img src={arrow} alt="images" /></div>
                                </div>
                            </li>
                        </ul>
                    </section>
                </section>
                <section className="news">
                    <div className="coctainer">
                        <div className="overlay">
                            <div className="left">
                                <h3>Want to get new design news</h3>
                                <h4>Here is an comparison chart of us doing thipsum tool, +but at the end we win</h4>
                                <form>
                                    <input type="email" placeholder="Your Email Adrress" />
                                    <input type="submit" value="Get Started"/>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <section className="wrapper">
                        <div className="left">
                            <h1>
                                <a href="#">
                                    <div className="image-box">
                                        <img src={logo} alt="images" />
                                    </div>
                                </a>
                            </h1>
                            <p className="address" >Apartment 0031Broadmoor Ln,Rotonda West Wood,FL,33947</p>
                        </div>
                        <div className="right">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Awards</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><div className="bar"></div></li>
                            </ul>
                            
                            <h4>Designed by <a> www.steyp.in</a></h4>
                        </div>
                    </section>
                </footer>
            </div>

        </>
    )
}
