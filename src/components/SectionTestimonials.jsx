import React from "react";
import TestimonialsElement from "../TestimonialsElements.js";
import Testimonials from "./Testimonials.jsx";



export default function SectionTestimonials(){

  const TestimonialElements = TestimonialsElement.map((testimonial) => {
    return (
      <Testimonials
        key={testimonial.id}
        text={testimonial.text}
        imageSrc={testimonial.imageSrc}
        imageAlt={testimonial.imageAlt}
        name={testimonial.name}
        jobTitle={testimonial.jobTitle}

      />
    );
  });

  return (
   
       
     <section className="container testimonial__wrapper" aria-label="testimonials">
      {TestimonialElements}
     </section>

  
  );
}
