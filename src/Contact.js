import React from 'react'
import './Contact.css';

export default function Contact() {
  return (
    <div className='contact'>
       

      <div className='con'>
         <h1>Contact Us</h1>
         <div className='un'>
          <div className='hr'></div> 
          <div className='horizontal'></div>
         </div>
         <h2>We'd Love to Hear from you </h2>
         <p>We Integrated Marketing, Digital Disribution and Production Company</p>
      </div>


      <div className='con1'>

        <div className='subcon1'>
          <h2>Get in Touch</h2>
          <p>Our friendly team is here  to help.</p>
          <h3>connect@protonindia.in</h3>
        </div>

        <div className='subcon2'>
          <h2>Reach us</h2>
          <p>Let's meet over a cup of coffee.</p>
          <h3>1108, tivoli, Godrej Garden city,<br/> Ahmedabad</h3>
        </div>

        <div className='subcon3'>
          <h2>Contact us</h2>
          <p>24x7 Available</p>
          <h3>+916355004990<br/>+916355004990</h3>
        </div>

      </div>

      <div className='call'><br/>
        <h1 className='form-title'>Request for Cunsultation</h1>
        <form>
          
            <div className='info'>
                <input type='text' placeholder='Your Name'/>
            </div>
              
            <div className='no'>
                <input type='text' placeholder='Moblie Number'/>
            </div>

            <div className='em'>
                <input type='text' placeholder='Your Email'/>
            </div>

             <div className='msg'>
                <textarea type='text' placeholder='Your Messages'/>
            </div>

            <div className='bg'>
              <button className='btn'>Submit</button>
            </div>
          {/* <div className='top'>
            <p className='top2'>"</p>
            <h3 className='h3'>How about we meet over coffee?</h3>
            <p className='p2'>Let's Discuss key aspects of Film Marketing and revenue 
              <br/>streams from content and other interestings things.</p><br/> 
            <h5 className='p3'>+916355004990</h5><br/>
          </div>   */}
        </form>
      </div>

    </div>
  )
}
