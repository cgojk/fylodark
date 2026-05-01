import React from "react";
import IconsElement from "../IconsElements.js";
import Icons from "./Icons.jsx";



export default function Lasticons(){

  const iconElements = IconsElement.map((icon) => {
    return (
      <Icons
        key={icon.id}
       
      
        sectionTitle={icon.sectionTitle}
        imageSrc={icon.imageSrc}
        imageAlt={icon.imageAlt}
        text={icon.text}
      />
    );
  });

  return (
   
       
     <section className="container features__wrapper" aria-label="features">
      {iconElements}
     </section>

  
  );
}
