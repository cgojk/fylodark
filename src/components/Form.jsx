import React from 'react';



export default function Form(){

  
    
function singUp(formData){
 
       const email = formData.get("email");
       console.log(email);
    

}

return(

<section className="container form__section">
    <div className="form__details">
        <div className="form__content">
           <h1 className="form__title">Get early access today</h1>
           <p className="form__text">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        </div>
        <form action={singUp} className="form__wrapper" aria-label="form">
            <div className="form__input">
                <input  aria-label="Add your email" type="email" name="email" placeholder="Enter your email..." />
                {/* <input type="submit" value="Get Started For Free" className="btn btn-primary" /> */}
                <button className="btn"><span>Get Started For Free</span></button>
            </div>
  
       </form>
    </div>

     
    
</section>


);
}
