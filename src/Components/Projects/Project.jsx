import React from 'react'
import { IoLink } from "react-icons/io5";
import './Project.css'

function Project({title,img,url}) {
  return (
    <div id='projects' className='main-container'>
        <div className='container'>
        <img src={img} alt="" />
        <div className='pop-up'>
        <h2 >{title}</h2>
        <a className='logo' href={url} target="_blank" rel={title}>
        <IoLink/>
      </a>
        </div>
        </div>
    </div>
  )
}

export default Project