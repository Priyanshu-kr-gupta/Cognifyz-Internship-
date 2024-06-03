import React, { useState }  from 'react'
import "../css/Register.css"

export default function Login() {
    const [pass,setPass] = useState("");
    const [email,setEmail] = useState("")
  return (
   
    <div className='w-full h-[90vh] flex justify-center items-center bg-zinc-800 register'>
        <div className='lg:w-[30%] h-[80%] rounded-3xl flex justify-center flex-col items-center md:w-[50%] sm:w-[60%] w-[90%] registerbox' >
            <input  type="email" className='p-2 w-full' id='email' onChange={(e)=>{
                setEmail(e.target.value)
            }}/>{!email?<label htmlFor='email' id='eml'>Email Id</label>:<br/>}
            <br/>
            <input  type="password" className='p-2 w-full' id='name' onChange={(e)=>{
                setPass(e.target.value)
            }}/>{!pass?<label htmlFor='name' id='nm'>Password</label>:<br/>}
       
            <button className='bg-[aqua]  px-6 py-2 rounded-[99px]'>Login</button><br/>
            {/* <p className='text-[aqua]'>Already have an Account ? </p> */}
        </div>
    </div>
  )
}
