import React from 'react'
import './Hero.css'
import AUTHIMG from '../../assets/images/AUTHIMG.jpg'

function Hero() {
  return (
 
      <div id='hero' className="hero">
           
        <div className="auth-img">
          <img src={AUTHIMG} alt="" />
        </div>

        <h1><span>I'm Gaurav</span>,Fullstack Developer And Machine Learning 
           Enthusiast</h1>

        <div className="action">
           <div className="act-linkdin"><a href="https://www.linkedin.com/in/gaurav-kumar-b810a524a/">Linkedin</a></div>
           <div className="act-resume"><a href="https://drive.google.com/file/d/1g4KvGWy4pW-qIHpKBv3gvIenQIPnaiBu/view?usp=drive_link">My Resume</a></div>
        </div>
            
      </div>

 
  )
}

export default Hero