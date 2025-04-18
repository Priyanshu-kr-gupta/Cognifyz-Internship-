import React from 'react'
import profilePath from "../assets/profile.png"
import "../Css/Hero.css"
export default function Hero() {
  return (
<div className="heroSection " id='Hero'>
  <img src={profilePath} className="card-img" alt="..." />
  <div className='heroDescription p-2' style={{textAlign:"center"}}>
    <h3>Hii I'm</h3>
    <h1 className='mb-2'>Priyanshu Kumar</h1>
    <h3>Web team member at Soceity of computer science and engineering Nit Jamshedpur</h3>
<br/>

    <p className='p-2'>
      Mern Stack | PHP Devlopement | Problem Solving  
    </p>
  </div>


</div>
  )
}
