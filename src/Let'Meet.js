import React from 'react'
import './Let.css';

export default function LetMeet() {
  return (
    <div className='let'>
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

        <div className='top'>
          <p className='top2'>"</p>
          <h3 className='h3'>How about we meet over coffee?</h3>
          <p className='p2'>Let's Discuss key aspects of Film Marketing and revenue 
            <br/>streams from content and other interestings things.</p><br/> 
          <h5 className='p3'>+916355004990</h5><br/>
        </div>  
      </form>
    </div>
  )
}
