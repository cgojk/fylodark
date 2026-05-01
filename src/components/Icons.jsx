
    
export default function Icons(props){
    const {sectionTitle, imageSrc, imageAlt, text} = props;
 
return(

<div className="features">
      <div className="image__feature">   
        <img src={imageSrc} alt={imageAlt} className="icon" />
      </div>
      <div className="icon-content">
        <h1 className="icon-title">{sectionTitle}</h1>
        <p className="icon-text">{text}</p>
      </div>
    
</div>


);
}


           
