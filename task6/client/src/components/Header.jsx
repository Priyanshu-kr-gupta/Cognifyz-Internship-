import React, { useState } from 'react'
import "../Css/header.css"
import Sidebar from './Sidebar'
import Profile from './Profile';
export default function Header() {
  const [profiletoggler,setProfiletoggler]=useState(0);
  return (
    <>
    <nav className="navbar h-[10vh]" style={{position:"sticky",top:"0px",zIndex:"9",backdropFilter:"blur(20px)"}}>

        <div className="container-fluid">
          <div className='z-10 ml-10'>

                <a className="navbar-brand">📒</a>
                <a className="navbar-brand brandname ">KEEPER</a>
          </div>
            {/* <input type='text' className='search lg:py-2 lg:px-[2%] md:py-2 md:px-[2%] bg-gray-200 lg:w-[50%] md:w-[50%]' placeholder='search your note' /> */}
               <div className='z-10 mr-3'>

                {/* <a className='mr-3'>🪟</a> */}
                <button onClick={()=>{setProfiletoggler(!profiletoggler)}}>{!profiletoggler?"👤":"❌"}</button>
               </div>

                    
        </div>
    </nav>
    <Sidebar />
    {
      profiletoggler?<Profile/>:""
    }
    </>
  )
}
