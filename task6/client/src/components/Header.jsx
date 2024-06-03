import React from 'react'
import "../Css/header.css"
export default function Header() {
  return (
    <>
    <nav className="navbar h-[10vh] " style={{position:"sticky",top:"0px",zIndex:"100",backdropFilter:"blur(20px)"}}>

        <div className="container-fluid">
            <div className='ml-5'> 
                <a className="navbar-brand z-10">📒</a>
                <a className="navbar-brand brandname z-10">KEEPER</a>
            </div> 
            <input type='text' className='search py-2 px-[2%] bg-gray-200 ' placeholder='search your note' />
                <div>
                <a>🪟</a>
                <a>👤</a>

                {/* <FaDownload /> */}
              
                </div>
                    
        </div>
    </nav>
    <hr></hr>
    </>
  )
}
