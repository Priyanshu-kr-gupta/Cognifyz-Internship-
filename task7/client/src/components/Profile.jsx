import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Profile() {
  const navigate=useNavigate();
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const logout= ()=>{
    localStorage.clear("auth-token")
    localStorage.clear("userid")
    localStorage.clear("useremail")
    localStorage.clear("username")
    navigate("/login")
    
  }
  useEffect(()=>{
    setName(localStorage.getItem("username"));
    setEmail(localStorage.getItem("useremail"));
    
  },[])
  return (
    <div className='absolute w-[250px] right-2 top-20 h-[250px] bg-[rgba(171,120,225,0.3)] flex flex-col justify-around items-center' style={{zIndex:"100",boxShadow:"0 0 10px grey",borderRadius:"20px",border:"2px solid rgb(210,139,241)",backdropFilter:"blur(20px)"}}>   
      <div className='w-[50px] h-[50px] bg-[rgb(210,139,241)] rounded-[50%] flex justify-center items-center m-0 p-0 text-[24px]'>{ name[0]}</div>
      <div className='text-[rgb(210,139,241)]'>{email}</div>
      <button onClick={logout} className='py-1 px-2 bg-[rgb(210,139,241)]'>Log out</button>
    </div>
  )
}
