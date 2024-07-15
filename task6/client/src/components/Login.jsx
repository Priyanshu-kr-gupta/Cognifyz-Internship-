import React,{useState} from 'react'
import {useNavigate,Link} from "react-router-dom"
import "../Css/register.css"
export default function Login() {
  const navigate=useNavigate();

    const [mes,setMes]=useState("Login");
const backendApi =  process.env.REACT_APP_HOST;

    // const navigate=useNavigate();
    const userInitial={email:"",password:""}
    const [user,setUser]= useState(userInitial)
    const {email,password} = user
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        setMes("wait");
        const {email,password} = user
        const response = await fetch(`${backendApi}/api/auth/loginUser?email=${email}&password=${password}`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
        })
        const json=await response.json()
        if(json.login){
            localStorage.setItem("auth-token",json.authToken)
            localStorage.setItem("userid",json.user_Id)
            localStorage.setItem("username",json.name)
            localStorage.setItem("useremail",json.email)
            // alert(json.msg); 
            navigate("/")
        }
        else{
          alert(json.msg,"warning");
        }
        
    }
 
  return (
    <div  className='w-full h-[90vh] flex  flex-col items-center justify-around'>
    <p className='relative  text-[20px]'>Welcome to 📒 Keeper</p>
    <div className='lg:w-[30%] h-[50%] rounded-3xl flex justify-center flex-col items-center md:w-[50%] sm:w-[60%] w-[90%] registerbox'>
      <form onSubmit={handleSubmit} className='w-[60%] flex justify-center flex-col items-center'>
      <div className='w-full mb-2'>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" value={email}  id="email" onChange={handleChange}  className='w-full'/>
        </div>
        <div className='w-full mb-2'>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" value={password}  id="password" onChange={handleChange}  className='w-full'/>
        </div>
        <br/>
        <br/>
        <button type="submit" className='bg-[#ffc40099] py-1 px-2'>
        {mes}
        </button>
      </form>
      </div>
      <h5 className='text-center'>Don't have a account ? <br/> <Link to="/register">Register</Link></h5>
   
    </div>
  )
}
