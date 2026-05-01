import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/illustration-stay-productive.png"


export default function Information(){
    return (
    <section className="Info">
     
     
      <div className="container info-flex">
        <div className="info-content">
           <div className="image__info">
             <img src={image} className="info-image" loading="lazy" alt="Illustration of people talking about the files  " />
            </div>
            <div className="content__info">
              <h1 className="title_info">Stay productive, whenever you are</h1>
              <p className="info_text">
              Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
              Securely share and folders with frieds, family and colleagues for live collaboraiton. No email attachments required.</p>
               <Link to="/how works" className="link__works">See how Fylo workds </Link>
            </div>
           
         </div>
         
    </div>
  
</section>
  );
}