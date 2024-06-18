import React, { useState } from 'react'
import "../Css/header.css"
import Profile from './Profile';
export default function Header() {
  const [profiletoggler,setProfiletoggler]=useState(0);
  return (
    <>
    <nav className="navbar h-[10vh]" style={{position:"sticky",top:"0px",zIndex:"9",backdropFilter:"blur(20px)"}}>

        <div className="container-fluid">
          <div className='z-10 ml-5'>

                <a className="navbar-brand">🤖</a>
                <a className="navbar-brand brandname text-[#f895f8]">GENZO</a>
          </div>
               <div className='z-10 mr-3'>

                <button className='bg-[#f895f8] rounded-[2px]' onClick={()=>{setProfiletoggler(!profiletoggler)}}>{!profiletoggler?"👤":"❌"}</button>
               </div>

                    
        </div>
    </nav>
    {
      profiletoggler?<Profile/>:""
    }
    <div className='decoration w-full h-[90vh] flex flex-col justify-center items-center  diarycontainer '>
    <div className='decorItem'>

    <div className='deco1'>
    </div>
    <div className='deco2'>
    </div>
    <div className='deco3'>
    </div>
    <div className='deco4'>
    </div>
    </div>
    </div>
    </>
  )
}
