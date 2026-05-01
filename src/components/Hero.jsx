import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/illustration-intro.png"
import Navigation from "./Navigation.jsx";



export default function Hero(){
    return (
    <section className="hero">
        <Navigation/>
     
   

      <div className="container hero-flex">
        <div className="hero-content">
            <img src={image} className="hero-image" loading="lazy" alt="Illustration of people using a big file put it on and taking off papers and files " />
            <div className="info__hero">
                <h1 className="title_hero">All your files in one secure location, accessible anywhere.</h1>
                <p className="hero_text">
                Fylo stores all your most important files in one secure location. 
                Access them wherever you need, share and collaborate with friends 
                family, and co-workers.
                </p>
                <Link to="/get-started" className="btn btn-primary"> <span>Get Started </span></Link>
            </div>
         </div>
          
    </div>
   
</section>
  );
}