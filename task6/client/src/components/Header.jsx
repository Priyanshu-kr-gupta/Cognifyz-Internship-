import React, { useState } from 'react'
import "../Css/header.css"
import Sidebar from './Sidebar'
import Profile from './Profile';
import { FaCompress, FaCross, FaCrosshairs, FaUserCircle } from "react-icons/fa";
import { MdCurtainsClosed, MdWrongLocation } from 'react-icons/md';
export default function Header() {
  const [profiletoggler,setProfiletoggler]=useState(0);
  return (
    <>
    <nav className="navbar h-[8vh]" style={{position:"sticky",top:"0px",zIndex:"9",backdropFilter:"blur(20px)"}}>

        <div className="container-fluid">
          <div className='z-10 ml-10'>

                <a className="navbar-brand">📒</a>
                <a className="navbar-brand brandname text-white">KEEPER</a>
          </div>
                <div className='w-[60%] h-[1px] bg-[rgba(255,255,255,0.5)]'></div>
            {/* <input type='text' className='search lg:py-2 lg:px-[2%] md:py-2 md:px-[2%] bg-gray-200 lg:w-[50%] md:w-[50%]' placeholder='search your note' /> */}
               <div className='z-10 mr-3'>

                {/* <a className='mr-3'>🪟</a> */}
                <button onClick={()=>{setProfiletoggler(!profiletoggler)}}>{!profiletoggler?<FaUserCircle className='text-[22px] text-white'/>:<FaCompress className='text-white'/>}</button>
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
