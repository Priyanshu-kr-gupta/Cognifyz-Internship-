import React from 'react'
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"
import { FaDownload } from "react-icons/fa6";
import resume from "../assets/resumetemp.pdf"
export default function Header() {
  return (
    <>
    <nav className="navbar" style={{position:"sticky",top:"0px",zIndex:"100",backdropFilter:"blur(20px)"}}>

        <div className="container-fluid">
            <div> 
                <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <GiHamburgerMenu/>
                </button>
                <a className="navbar-brand ">Portfolio</a>
            </div> 
                <div>
                {/* Download my resume */}
                {/* <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom" > */}
  {/* Tooltip on bottom */}
{/* </button> */}
                <a href={resume} download><FaDownload className='cursor-pointer'/></a>
                </div>
                    
        </div>
    </nav>
    </>
  )
}
