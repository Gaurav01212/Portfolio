import React from 'react'
import './Navbar.css'
import GITHUB from '../../assets/images/GITHUB.png'
import CODELOGO from '../../assets/images/CODELOGO.png'


function Navbar() {

  return (
    <>







      <div className='nav-bar'>

      <img  src={CODELOGO} alt="Code logo" style={{height:"30px",weight:"30px"}} />



       <ul>
        <li>Home</li>
        <li>About Me</li>
         
        <img className='git' src={GITHUB} alt="GitHub Logo" style={{height:"30px",weight:"30px"}} />

        <li>Projects</li>
        
        <li>Skills</li>
        
       </ul>

        <div className='nav-con'>Contact Me</div>
      </div>
      
      
    </>
  )
}

export default Navbar
