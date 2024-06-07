import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header"
import "../Css/home.css"
export default function Home() {
  let timeout;
  const navigate = useNavigate();

  const [content,setContent] =useState("");
  const uid=localStorage.getItem("userid")
  const dte =new Date
  const date=(dte.getDate()+"-"+parseInt(dte.getMonth()+1)+"-"+dte.getFullYear());
  const backendApi = "http://localhost:5000";
  
  useEffect(()=>{
  if (localStorage.getItem("auth-token")) {
      getcontent()
   } else {
     navigate("/login");
   }
   
    
  },[])
  const savecontent =async ()=>{
    const encodedText=encodeURIComponent(content)
    const respon = await fetch(`${backendApi}/api/note/saveContent?uid=${uid}&date=${date}&content=${encodedText}`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
        })
  
  }
  const debounce = ()=>{
      clearTimeout(timeout);
      setTimeout(() => {
        savecontent();
      }, 1000);
  }
  const getcontent =async ()=>{
    const respon = await fetch(`${backendApi}/api/note/getNote?date=${date}&uid=${uid}`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
        })
        const result=await respon.json();
        if(result.length==0)
          savecontent();
          else
        setContent((result[0].content));
        
  }
 
  return (
  <>
  <Header />
  <div className="w-full h-[90vh] flex justify-center items-center  diarycontainer relative">
    <input value={date} disabled className='absolute bottom-5 z-10 backdrop-blur-[2px] text-center'/>
    
   
    <textarea  className='diary' onChange={(e)=>{setContent(e.target.value); debounce();}}  value={content}/>

    

  </div>
  </>
  )
}
