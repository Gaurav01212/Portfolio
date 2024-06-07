import React from 'react'
import './Hero.css'
import AUTHIMG from '../../assets/images/AUTHIMG.jpg'

function Hero() {
  return (
 
      <div className="hero">
           
        <div className="auth-img">
          <img src={AUTHIMG} alt="" />
        </div>

        <h1><span>I'm Gaurav</span>,Fullstack Developer And Machine Learning 
           Enthusiast</h1>

        <div className="action">
           <div className="act-linkdin">LinkedIn</div>
           <div className="act-resume">My Resume</div>
        </div>
            
      </div>

 
  )
}

export default Hero