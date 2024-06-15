import React,{useState} from 'react'
import {useNavigate,Link} from "react-router-dom"
import "../Css/register.css"
import {auth,provider} from "./Config";
import {signInWithPopup} from "firebase/auth";

export default function Login() {
  const navigate=useNavigate();

const backendApi = "http://localhost:5000";

    // const navigate=useNavigate();
    const handleClick =()=>{
      signInWithPopup(auth,provider).then((data)=>{
        // console.log(data)
          localStorage.setItem("auth-token",data.user.accessToken)
          localStorage.setItem("username",data.user.displayName)
          localStorage.setItem("useremail",data.user.email)
          navigate("/");
      })
  }
 
  return (
    <div  className='w-full h-[100vh] flex  flex-col items-center justify-center gap-48 bg-[rgb(0,12,34)] text-[rgb(210,139,241)]'>
    <p className='relative  text-[20px]'>Welcome to 🤖 Genzo</p>
    <button className='px-5 py-2 bg-[rgb(210,139,241)] text-black' onClick={handleClick}>Continue With Google</button>
    </div>
  )
}
