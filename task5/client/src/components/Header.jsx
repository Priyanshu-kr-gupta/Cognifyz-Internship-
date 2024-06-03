import React from 'react'
export default function Header() {
  return (
    <>
    <nav className="navbar h-[10vh]" style={{position:"sticky",top:"0px",zIndex:"100",backdropFilter:"blur(20px)"}}>

        <div className="container-fluid">
            <div> 
                
                <a className="navbar-brand text-[25px]">Student Management System</a>
            </div> 
                <div>
               
                {/* <FaDownload /> */}
                </div>
                    
        </div>
    </nav>
    <hr/>
    </>
  )
}
