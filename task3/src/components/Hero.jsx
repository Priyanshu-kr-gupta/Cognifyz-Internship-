import React from 'react'
import profilePath from "../assets/profile.png"
import "../Css/Hero.css"
export default function Hero() {
  return (
<div className="heroSection " id='Hero'>
  <img src={profilePath} className="card-img" alt="..." />
  <div className='heroDescription' style={{textAlign:"center"}}>
    <h3>Hii I'm</h3>
    <h1>Priyanshu Kumar</h1>
    <h3>Web team member at Soceity of computer science and engineering</h3>
<br/>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et impedit vero, optio, vel ipsam corporis, mollitia ut explicabo perferendis doloribus praesentium dicta fugiat? Quas facere repellendus ipsum illo repellat voluptatibus provident reprehenderit, ullam nesciunt rem? Sunt, aut tempore nobis alias ea voluptate voluptas! Incidunt cumque quod voluptatum possimus suscipit!
    </p>
  </div>


</div>
  )
}
