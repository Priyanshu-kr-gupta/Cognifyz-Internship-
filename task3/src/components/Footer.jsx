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
          <a href='https://www.linkedin.com/in/priyanshu-kumar-143995246/'><FaLinkedin/></a>
        </div>
        {/* <div className="col" style={{display:"grid",justifyContent:"center"}}>
        <a href='#'><FaInstagram/></a>
        
        </div> */}
        <div className="col" style={{display:"grid",justifyContent:"center"}}>
        <a href='https://github.com/Priyanshu-kr-gupta/'><FaGithub/></a>
        
        </div>
        <div className="col" style={{display:"grid",justifyContent:"center"}}>
        <a href='https://codeforces.com/profile/Priyanshu_Kmr'><SiCodeforces/></a>
        
        </div>
        <div className="col" style={{display:"grid",justifyContent:"center"}}>
        <a href='https://www.codechef.com/users/priyanshu_kmr'><SiCodechef/></a>
        
        </div>
        <div className="col" style={{display:"grid",justifyContent:"center"}}>
        <a href='mailto:dlnpriyanshu@gmail.com'><MdEmail/></a>
        
        </div>
    </div>
    </div>
    </>
  )
}
