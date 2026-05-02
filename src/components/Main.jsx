import React, { useRef, useEffect } from "react";
import Services from "./Services.jsx";
import Information from "./Information.jsx";
import SectionTestimonials from "./SectionTestimonials.jsx"
import Form from "./form.jsx";
import Footer from "./Footer.jsx";

// import curve from "../assets/images/bg-curvy-mobile.svg";


export default function Main(){
    return (


    <main class="main__content">
        {/* <img src={curve} class="curve" /> */}
   
       <Services/>
       <Information/>
       <SectionTestimonials/>
       <div className="bottom__wrapper">
         <Form/>
         <Footer/>
       </div>
      </main>
  );
}