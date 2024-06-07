import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import { useNavigate } from 'react-router-dom';

export default function Showdiary() {
  const uid=localStorage.getItem("userid")
  const navigate = useNavigate();

const backendApi = "http://localhost:5000";

    const parameter=useParams();
  const date=parameter.dt;
  const [content,setContent] =useState(" ");

    useEffect(()=>{
      if (localStorage.getItem("auth-token")) {
        getcontent()
     } else {
       navigate("/login");
     }
      },[date])
    const getcontent =async ()=>{
        // console.log(date)
        const respon = await fetch(`${backendApi}/api/note/getNote?date=${date}&uid=${uid}`, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
            })
            const result=await respon.json();
            setContent((result[0].content));
            
      }
    return (
    <>
     <Header />
    <div className="w-full h-[90vh] flex justify-center items-center  diarycontainer relative">
    <input value={date} disabled className='absolute bottom-5 z-10 backdrop-blur-[2px] text-center'/>
    
   
    <textarea className='diary' onChange={(e)=>{setContent(e.target.value)}}  value={content} disabled />

    

  </div>
  </>
  )
}
