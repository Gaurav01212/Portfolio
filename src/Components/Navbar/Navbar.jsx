import React from 'react'
import './Navbar.css'
import GITHUB from '../../assets/images/GITHUB.png'
import CODELOGO from '../../assets/images/CODELOGO.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';



function Navbar() {

  return (
    <>







      <div className='nav-bar'>

      <img  className='code-logo' src={CODELOGO} alt="Code logo" style={{height:"30px",weight:"30px"}} />



       <ul>
       
       <AnchorLink className='anchor-link' offset={50} href='#hero'><li>Home</li></AnchorLink>
        <AnchorLink className='anchor-link' offset={50} href='#about'><li>About Me</li></AnchorLink>
         
        <a href="https://github.com/Gaurav01212" target='_blank'><img className='git' src={GITHUB} alt="GitHub Logo" style={{height:"30px",weight:"30px"}} /></a>
        
        <AnchorLink className='anchor-link' offset={50} href='#projects'><li>Projects</li></AnchorLink>
        
        <AnchorLink className='anchor-link' offset={50} href='#projects'><li>Skills</li></AnchorLink>
        
       </ul>

        <div className='nav-con'>Contact Me</div>
      </div>
      
      
    </>
  )
}

export default Navbar
