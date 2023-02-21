import React from 'react'
import './About.css';
import  aboutus from './img/aboutus.png';
import  about1 from './img/about1.jpeg';
import  about2 from './img/about2.jpg';
import  about3 from './img/about3.jpg';
import  t11 from './img/t11.jpg';
import about4 from './img/about4.jpg';
import {AiOutlineUp} from "react-icons/ai";



export default function Aboutus(){
    return (
        <div className='about'>

            <div className='head'>
               <div className='tital'>
                   <h1>About Us </h1>
                   <div className='line'>
                      <div className='line1'></div> 
                      <div className='dot'></div>
                   </div><br/>
               
                   <h3>Welcome <br/> to <font color="bisque"> Proton India</font></h3>
                   <p>"We are 360* Integrated Marketing. Digital<br/>Distribution and Production Company"</p>
               </div> 
               <img src={aboutus} alt=""/>
            </div>
            

            <br/><br/>
            <div className='high'>
                <h3> Let Us Introduce You</h3>
            </div>


            <div className='images'>


                <div className='subimg1'>
                    <img src={about1} alt=''></img>
                    <h4>Who are We</h4>
                    <div className='long1'>
                      <div className='line2'></div> 
                      <div className='dot1'></div>
                    </div>
                </div>

                <div className='subimg2'>
                    <img src={about2} alt=''></img>
                    <h4>What We Do</h4>
                    <div className='long2'>
                      <div className='line3'></div> 
                      <div className='dot2'></div>
                    </div>
                </div>

                <div className='subimg3'>
                    <img src={about3} alt=''></img>
                    <h4>Our Team</h4>
                    <div className='long3'>
                      <div className='line4'></div> 
                      <div className='dot3'></div>
                    </div>
                </div>
             

            </div>


            <div className='horizont'>
                <div className='hori'></div>
            </div>


            <div className='high1'>
                <h4>Our 4-E Process</h4>
            </div>


            <div className='process'>

                <img src={t11} alt=''></img>

                <div className='proce'>

                    <div className='part1'>
                       <h1>01</h1>
                       <div className='list1'>
                          <div className='set1'></div> 
                          <div className='dott1'></div>
                       </div>
                       <h2 > Enable</h2> 
                    </div>

                    <div className='part2'>
                       <h1>02</h1>
                       <div className='list2'>
                          <div className='set2'></div> 
                          <div className='dott2'></div>
                       </div>
                       <h2 > Enhance</h2> 
                    </div>

                    <div className='part3'>
                       <h1>03</h1>
                       <div className='list3'>
                          <div className='set3'></div> 
                          <div className='dott3'></div>
                       </div>
                       <h2 > Entertain</h2> 
                    </div>

                    <div className='part4'>
                       <h1>04</h1>
                       <div className='list4'>
                          <div className='set4'></div> 
                          <div className='dott4'></div>
                       </div>
                       <h2 >Engage</h2> 
                    </div>

                </div>

            </div>


            <div className='chess'>

                <img src={about4} alt=''></img>

                <div className='detail'>

                    <h2>Why Choose Us?</h2>

                    <div className='detail1'>
                        <h6>Experienced Professionals</h6>
                        <p><AiOutlineUp/></p>
                    </div>
                    <div className='detail2'>
                        <h6>Promotion</h6>
                        <p><AiOutlineUp/></p>
                    </div>
                    <div className='detail3'>
                        <h6>24x7 Support</h6>
                        <p><AiOutlineUp/></p>
                    </div>
                    <div className='detail4'>
                        <h6>Result Oriented Projects</h6>
                       <p><AiOutlineUp/></p>
                    </div>
                    <div className='detail5'>
                        <h6>Best Deal for your Projects</h6>
                        <p><AiOutlineUp/></p>
                    </div>

                </div>

            </div>

            
            <div className='high2'>
                <h4>Our Work</h4>
            </div>


            <div className='inform'>

                <div className='imfor1'>
                    <h2>10</h2>
                    <p>Satisfied<br/>Clients</p>
                </div>
                <div className='imfor2'>
                    <h2>10</h2>
                    <p>Projects<br/>Completed</p>
                </div>
                <div className='imfor3'>
                    <h2>05</h2>
                    <p>Digital<br/>Distribution</p>
                </div>
                <div className='imfor4'>
                    <h2>05</h2>
                    <p>Current<br/>Projects</p>
                </div>
                
            </div>

        </div>
    );
}