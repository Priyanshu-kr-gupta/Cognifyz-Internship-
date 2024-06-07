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
    <div className='absolute w-[250px] right-2 top-20 h-[250px] bg-white flex flex-col justify-around items-center' style={{zIndex:"100",boxShadow:"0 0 10px grey",borderRadius:"20px"}}>   
      <div className='w-[50px] h-[50px] bg-blue-400 rounded-[50%] flex justify-center items-center m-0 p-0 text-[24px]'>{ name[0]}</div>
      <div>{email}</div>
      <button onClick={logout} className='py-1 px-2 bg-[#ffae00]'>Log out</button>
    </div>
  )
}
