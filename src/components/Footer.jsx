import React, { useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/logo.svg";
import iconEmail from "../assets/images/icon-email.svg";
import iconPhone from "../assets/images/icon-phone.svg";
import iconLocation from "../assets/images/icon-location.svg";



export default function Footer() {
  

  return (

     

<section className="footer__container">
  <div className="wrapper__content">
      <div className="footer__content">
                            <div className="imagen__footer__container">
                                <Link to="/">
                                <img src={logo} className="footer-logo" alt="logo" />
                                </Link>
                            </div>
                
    <div className="wrapper__content_links">
                    <div className="footer__content__wrapper">
                                <div className="location__wrapper">
                                        <div className="location__image">
                                            <img src={iconLocation} alt="location icon" className="location__icon" />
                                            <p className="footer__location-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                        </div>
                                </div>
                                
                                <div className="info__content__wrapper">
                                    <div className="tel__text">
                                            <img src={iconPhone} alt="phone icon" className="tel__icon" />
                                            <p className="footer__location-telephone">+1-543-123-4567</p>
                                    </div>

                                    <div className="email__text">
                                            <img src={iconEmail} alt="email icon" className="email__icon" />
                                        <p className="footer__location-email">hello@fylo.com</p>
                                    </div>
                                </div>
                    </div>
                
          <div className="footer__content__wrapper">
                <nav className="footer__nav">
                    <ul className="nav-footer-list">
                        <div className="footer-group_1">
                           <li><Link to="/about" className="nav-footer-item">About</Link></li>
                           <li><Link to="/jobs" className="nav-footer-item">Jobs</Link></li>
                           <li><Link to="/press" className="nav-footer-item">Press</Link></li>
                           <li><Link to="/blog" className="nav-footer-item">Blog</Link></li>
                        </div>
                        <div className="footer-group">
                            <li><Link to="/contact us" className="nav-footer-item">Contact Us</Link></li>
                            <li><Link to="/terms" className="nav-footer-item">Terms</Link></li>
                            <li><Link to="/privacy" className="nav-footer-item">Privacy</Link></li>
                        </div>
                    </ul>
                </nav>
                            
                <div className="footer_socials">
                        <a href="https://www.facebook.com/fylo" target="_blank" rel="noopener noreferrer">
                            <FaFacebookSquare className="footer__social-icon"/>

                        </a>
                        <a href="https://www.twitter.com/fylo" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="footer__social-icon"/>
                        </a>
                        
                        <a href="https://www.instagram.com/fylo" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="footer__social-icon"/>
                        </a>
                </div>
            </div>
        </div>
    </div>
   </div>

 </section>

  );
}

