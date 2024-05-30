import React from 'react'
import "../Css/skills.css"
import { FaPhp, FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiMysql } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
export default function Skills() {
  return (
    <>
    <br/>
    <br/>
    
      <p id='myskills' style={{fontSize:"35px",fontWeight:"700",marginBottom:"50px",marginLeft:"5%"}}>My Skills</p>
    
    <div className='allskills'>
      <div className='skillsBox'>
       <div className='skillsCred'>
        <FaReact />
         <strong>React</strong>
       </div>
     </div>
     <div className='skillsBox'>
       <div className='skillsCred'>
       <FaNode />

         <strong>Node Js</strong>
       </div>
     </div>
     <div className='skillsBox'>
       <div className='skillsCred'>
       <TbBrandCpp />

         <strong>C++</strong>
       </div>
     </div>
     <div className='skillsBox'>
       <div className='skillsCred'>
       <FaHtml5 />

         <strong>Html</strong>
       </div>
     </div>
     <div className='skillsBox'>
       <div className='skillsCred'>
       <IoLogoCss3 />

         <strong>Css</strong>
       </div>
     </div>
     <div className='skillsBox'>
       <div className='skillsCred'>
        <FaPhp />
         <strong>Php</strong>
       </div>
     </div>
     <div className='skillsBox'>
       <div className='skillsCred'>
        <IoLogoJavascript />
         <strong>JavaScript</strong>
       </div>
     </div>
     <div className='skillsBox'>
       <div className='skillsCred'>
        <SiMysql />
         <strong>MySql</strong>
       </div>
     </div>
     <div className='skillsBox'>
       <div className='skillsCred'>
       <RiTailwindCssFill />
         <strong>Tailwind</strong>
       </div>
     </div>
     <div className='skillsBox'>
       <div className='skillsCred'>
        <SiMongodb />
         <strong>MongoDb</strong>
       </div>
     </div>
   


     </div>


    </>
  )
}
