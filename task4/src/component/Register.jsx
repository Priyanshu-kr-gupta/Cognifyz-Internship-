import React, { useState } from 'react'
import "../css/Register.css"
import { Link } from 'react-router-dom';
export default function Register() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("")
    const checkPass = ()=>
    {   
        const pass=document.getElementById("pass");
        const password=pass.value;
        const msg=document.getElementById("pStrength")
        if( password.length<8)
            {
                msg.style.color="red"

                msg.innerHTML="password must be of size 8";
            }
        else if(! /[0-9]/.test(password))
            {
                msg.style.color="red"

                msg.innerHTML="password must contain a digit 0-9";
            }
        else if(! /[A-Z]/.test(password))
            {
                msg.style.color="red"
                
                msg.innerHTML="password must consist an uppercase character";
            }
            else if(! /[a-z]/.test(password))
                {
                msg.style.color="red"
                    
                    msg.innerHTML="password must consist a lowercase character";
                }
              else
              {
                msg.style.color="yellowgreen"
                msg.innerHTML="strong password";

              }
    }
    const showPass=()=>{
        const pass=document.getElementById("pass");
        if(pass.type=="password")
        pass.type="text";
        else
        pass.type="password"
    }
  return (
    <div className='w-full h-[90vh] flex justify-center items-center bg-zinc-800 register'>
        <div className='lg:w-[30%] h-[80%] rounded-3xl flex justify-center flex-col items-center md:w-[50%] sm:w-[60%] w-[90%] registerbox' >
            <input  type="email" className='p-2 w-full' id='email' onChange={(e)=>{
                setEmail(e.target.value)
            }}/>{!email?<label htmlFor='email' id='eml'>Email</label>:<br/>}
            <br/>
            <input  type="text" className='p-2 w-full' id='name' onChange={(e)=>{
                setName(e.target.value)
            }}/>{!name?<label htmlFor='name' id='nm'>Name</label>:<br/>}
            <br/>
            <div className='w-full relative'>
                <input  type="password" id='pass' onChange={checkPass} className='p-2 w-full'/>
            <label htmlFor="pass" className="ml-[-30px] absolute cursor-pointer top-[8px]" onClick={showPass} style={{textShadow:"0 0 5px black"}}>👁️</label>
            </div>
            <div id='pStrength' className='text-[aqua]'>set your password</div><br/><br/>
            <button className='bg-[aqua] py-2  px-5 rounded-[99px]'>Register</button><br/>
            {/* <p className='text-[aqua]'>Already have an Account ? </p> */}
        </div>
    </div>
  )
}
