import React from 'react'
import './Service.css';
import t11 from './img/t11.jpg';
import t2 from './img/t2.jpg';  
import t3 from './img/t3.jpg';
import t4 from './img/t4.jpg';


function Service() {
  return (
    
        <div className='whole'>
        
          <div className='text1'>
             <div className='date'>
               <h1>Our Services </h1>
               <div className='fit'>
                 <div className='hr1'></div> 
                 <div className='horizon'></div>
               </div>
               
               <h3> We are Integrated <br/>
                Marketing, <font color="bisque">Digital<br/>
                Distribution and  <br/>
                Production</font> Company</h3>
               <h4>Marketing|Digital Distribution|Production</h4>
             </div> 
              <img src={t11} alt=""/>
          </div>


          <h1 className='heart'>How can we help you?</h1>
          

          <div className='date1'>

            <div className='text2'>
              <div className='head1'>
                <h1>01</h1>
                <div className='fit1'>
                  <div className='hr2'></div> 
                  <div className='horizon1'></div>
                </div>
                <h2 > Marketing</h2> 
              </div> 
              <div className='graf'> 
                <div className='vartic'>
                   <div className='vl1'></div>
                   <div className='vl2'></div>
                   <div className='vl3'></div>
                   <div className='vl4'></div>
                   <div className='vl5'></div>
                </div> 
                <div className='grid'>
                  <p> We are among leaders in Films Publicity and <br/>
                   Promotion in new emerging regional markets.</p>
                  <p> Our strategic and creative marketing solutions in <br/>
                   promoting the films have captured the imagination <br/>
                   of client's target audiences.</p>
                  <p> Our team of driven and talented youngsters in<br/>
                   marketing and creative, sparks brilliance and<br/>
                   Overcome the all obstructions in communication</p>
                   </div>   
              </div>  
            </div>

            <img  className="img2" src={t2} alt=""/> 

          </div>
        

          <div className='date2'>
            <img  className="img3"src={t3} alt=""/>

            <div className='text3'>
            <div className='head2'>
                <h1>02</h1>
                <div className='fit3'>
                  <div className='hr3'></div> 
                  <div className='horizon2'></div>
                </div>
             <h2>  Digital Distribution</h2>
             </div>
             <div className='graf1'> 
                <div className='vartic1'>
                   <div className='vl11'></div>
                   <div className='vl22'></div>
                   <div className='vl33'></div>
                   <div className='vl44'></div>
                   <div className='vl55'></div>
                </div> 
                <div className='grid1'>
                    <p> We bring quality content from production<br/>
                       ouses across markets straight to the<br/>
                       door steps of wide array of content <br/>
                       acquisitions companies and digital<br/>
                       platforms.</p>
                   <p> We offers consultancy service for acquiring <br/>
                       or selling rights of films, web series, songs<br/>
                        etc
                   </p>           
                   <p>We avail options VOD, Satellite TV Rights<br/>
                      and IPTV Rights etc for content belonging to a <br/>
                      wide array of genres and formats</p>
                 </div> 
                </div>      
            </div>
          </div>


         
         <div className='date3'> 
          <div className='text4'>
            <div className='head3'>
                <h1>03</h1>
                <div className='fit4'>
                  <div className='hr4'></div> 
                  <div className='horizon3'></div>
                </div>
                 <h2> Production</h2>
            </div>
             <div className='graf2'> 
                <div className='vartic2'>
                   <div className='vl111'></div>
                   <div className='vl222'></div>
                </div> 
                <div className='grid2'>
                 <p>We create creative promotional content  & visual <br></br>
                    designs for Social Media, Digital and <br></br>
                    physical medium</p>
                </div>
              </div>   
            
          </div>
          <img className="img4" src={t4} alt=""/>
          </div> 


          {/* <div className='top'>
            <p className='top2'>"</p>
            <h3 className='h3'>How about we meet over coffee?</h3>
            <p className='p2'>Let's Discuss key aspects of Film Marketing and revenue 
              <br/>streams from content and other interestings things.</p><br/> 
            <h5 className='p3'>+916355004990</h5><br/>
          </div>  */}

        </div>

  )
}

export default Service;