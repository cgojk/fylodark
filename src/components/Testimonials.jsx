
    
export default function Testimonials(props){
    const {text, imageSrc, imageAlt, name, jobTitle} = props;
 
return(

<div className="testimonials__section">
      
      <div className="testimonials-content">
               <p className="testimonials-text">{text}</p>
      </div>
      <div className="image_testimonials">   
            <img src={imageSrc} alt={imageAlt} className="testimonials_profile" />
            <div className="namejob__testimonials">
                <h4 className="profile__name">{name}</h4>
                <h5 className="job__profile">{jobTitle}</h5>
            </div>
      </div>
    
</div>


);
}
