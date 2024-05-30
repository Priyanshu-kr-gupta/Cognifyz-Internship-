import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdMail } from 'react-icons/md'
import { SiCodechef, SiCodeforces } from 'react-icons/si'

export default function Footer() {
  return (
    <>
    <br/>
   
    <div className="container-fluid" >
     <div className="row">
        <div className="col"  style={{display:"grid",justifyContent:"center"}}>
          <a href='#'><FaLinkedin/></a>
        </div>
        <div className="col" style={{display:"grid",justifyContent:"center"}}>
        <a href='#'><FaInstagram/></a>
        
        </div>
        <div className="col" style={{display:"grid",justifyContent:"center"}}>
        <a href='#'><FaGithub/></a>
        
        </div>
        <div className="col" style={{display:"grid",justifyContent:"center"}}>
        <a href='#'><SiCodeforces/></a>
        
        </div>
        <div className="col" style={{display:"grid",justifyContent:"center"}}>
        <a href='#'><SiCodechef/></a>
        
        </div>
        <div className="col" style={{display:"grid",justifyContent:"center"}}>
        <a href='#'><MdEmail/></a>
        
        </div>
    </div>
    </div>
    </>
  )
}
