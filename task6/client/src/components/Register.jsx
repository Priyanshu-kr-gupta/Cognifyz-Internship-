import React,{useState} from 'react'
import {useNavigate,Link} from "react-router-dom"
import "../Css/register.css"
export default function Register() {

    const navigate=useNavigate();

    const backendApi =  import.meta.env.VITE_HOST;



    const [email,setEmail]= useState("")
    const [name,setName]= useState("")
    const [password,setPassword]= useState("")
    const [otp,setOtp]= useState("")
    const [checkOtpSent,setCheckotpSent]= useState(false)
    const [checkOtpVerified,setCheckOtpVeified]= useState(false)
    const [loader,setLoader]=useState(false);


    const handleChangeEmail= (e) =>{
    setEmail(e.target.value)
  }
  const handleChangeName= (e) =>{
    setName(e.target.value)
  }
  const handleChangePassword= (e) =>{
    setPassword(e.target.value)
  }
    const handleChangeOtp=(e)=>{
      setOtp(e.target.value)

    }
  
  
  
  const handleOtp=async ()=>{
    setLoader(true);
        const response = await fetch(`${backendApi}/api/auth/sendOtp?email=${email}`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
        })
        const json=await response.json()
        if(json.status){
           setCheckotpSent(json.status);
           setLoader(false);
            // props.showAlert(json.msg,"success")
        }
        else{
          // props.showAlert(json.msg,"warning")
        }
    }
    const verifyOtp=async (e)=>{
    setLoader(true);

      const response = await fetch(`${backendApi}/api/auth/verifyOtp?email=${email}&otp=${otp}`,{
          method:"POST",
          headers:{
              "Content-Type": "application/json"
          },
      })
      const json=await response.json()
      if(json.status){
         setCheckOtpVeified(json.status);
         setLoader(false);
         
          // props.showAlert(json.msg,"successfully verified")
      }
      else{
        props.showAlert(json.msg,"warning")
      }
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
        const respon = await fetch(`${backendApi}/api/auth/createUser?email=${email}&name=${name}&password=${password}`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
        })
        const result=await respon.json();
            console.log(result);
        if(result.signup){
              localStorage.setItem("auth-token",result.authToken)
              localStorage.setItem("username",name)
              localStorage.setItem("useremail",email)
              navigate("/")
              console.log(result.msg)
              alert(result.msg,"success")
          }
    } catch (error) {
    alert("Cant register you");
    }
}
 

  return (
    <div className='w-full h-[90vh]  mt-[2vh] flex  flex-col items-center justify-around bg-white'>
      
    <p className='relative  text-[20px]'>Welcome to 📒 Keeper</p>

     
  {  (checkOtpSent && checkOtpVerified)?

   <div className='lg:w-[30%] h-[50%] rounded-3xl flex justify-center flex-col items-center md:w-[50%] sm:w-[60%] w-[90%] registerbox'>

      <form className='w-[90%] flex justify-center flex-col items-center'> 
       <div className='w-full mb-2'>
         {/* <label htmlFor="name" id='nm'>Set user Name</label> */}
         <input name="name" type="text" id="name" onChange={handleChangeName} required placeholder='set username' className='p-2 w-full' />
       </div>
       <div className='w-full'>
         {/* <label htmlFor="password">Password</label> */}
         <input name="password" type="text" id="password" onChange={handleChangePassword} required placeholder='set your password' className='p-2 w-full' />
       </div>
       <br/>
       <br/>
       <button type="submit" className='bg-[#ffcc0070] px-2 py-1' onClick={handleSubmit}>
       Sign Up
       </button>      
      </form> 
   </div>
   

      :
      
      
      (!checkOtpSent)?
      
          <div className='lg:w-[30%] h-[30%] rounded-3xl flex justify-center items-center md:w-[40%] sm:w-[60%] w-[80%] '>
            <input name="email" type="email"  id="email" onChange={handleChangeEmail} required key={1} placeholder='enter your email here' className='w-full p-2 border-b-black border-b-2'/>
            <button style={{cursor:"pointer",borderBottom:"2px solid black"}} className=" p-2" onClick={handleOtp}>{loader?"wait...":"Next"}</button>
          </div>
        
        :  
        
        <div className='lg:w-[30%] h-[30%] rounded-3xl flex justify-center items-center md:w-[40%] sm:w-[60%] w-[80%]'>
            {/* <label htmlFor="otp">Enter verification code</label> */}
            <input name="otp" type="text"  id="otp"  required key={2} onChange={handleChangeOtp} placeholder='enter otp' className='w-full p-2 border-b-black border-b-2'/>
            <button style={{cursor:"pointer",borderBottom:"2px solid black"}} className=" p-2" onClick={verifyOtp}>{loader?"wait...":"Continue"}</button>
          </div>
        
      }
    <h5 style={{textAlign:"center"}}>Already have an account ? <br/><Link to="/login" className=' border-b-black border-b-2'>Login</Link></h5>
      
    </div>
  )
}
