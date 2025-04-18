import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import { useNavigate } from 'react-router-dom';
import "../Css/home.css"
export default function Showdiary() {
  const uid=localStorage.getItem("userid")
  const navigate = useNavigate();


const backendApi =  import.meta.env.VITE_HOST;

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
                method: "GET",
                headers: {
                    "Content-Type": "Application/json",
                },
            })
            const result=await respon.json();
            setContent((result.content));
            
      }
    return (
    <>
     <Header />
    <div className="w-full h-[90vh] flex flex-col justify-center items-center  diarycontainer relative">
    <div className='diarydate flex items-center gap-4'>
    <div className='w-[10px] h-[10px] p-2 bg-[#cd8080]' style={{borderRadius:"50%"}}>

    </div>
    <input value={date} disabled />
    </div>
    
   
    <textarea className='diary' onChange={(e)=>{setContent(e.target.value)}}  value={content} disabled />

    

  </div>
  </>
  )
}
