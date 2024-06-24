import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header"
import "../Css/home.css"
export default function Home() {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("");
  const [content,setContent] =useState("");
  const uid=localStorage.getItem("userid")
  const dte =new Date
  const date=(dte.getDate()+"-"+parseInt(dte.getMonth()+1)+"-"+dte.getFullYear());
  const backendApi = "http://localhost:5000";
  const [status,setStatus]=useState(1);
  useEffect(()=>{
  if (!localStorage.getItem("auth-token")) {
 
     navigate("/login");
   }
   
    
  },[])

  const getcontent =async ()=>{
    try{

      const response = await fetch(
        "https://api-inference.huggingface.co/models/Melonie/text_to_image_finetuned",
      {
        headers: { Authorization: "Bearer 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" },
        method: "POST",
        body:JSON.stringify({inputs:content}),
      }
    );
    console.log(response)
    if(!response.ok)
    {
      navigate(`/err/${response.status}`)

    }
    else
    {

      const result = await response.blob();
      return result;
    }
  }
  catch{
    console.log("apple")
  }
        
  }
  const texttoImage = async() =>{
    setStatus(0);
    const blob = await getcontent();
    const objUrl = URL.createObjectURL(blob);
    if(objUrl)
    setImageSrc(objUrl);
    window.scrollTo(0, document.body.scrollHeight);
    setStatus(1);
  }
 
  return (
  <>
  <Header />
  <div className="w-full h-[90vh] flex flex-col justify-center items-center  diarycontainer relative">
    
   
    <textarea  className='diary' onChange={(e)=>{setContent(e.target.value);}}  value={content} placeholder='Write the prompt here'/>
    <button className='submitbtn' onClick={texttoImage}>{status?"▲":"wait.."}</button>
    

  </div>


  <div className='result w-full h-full bg-[rgb(0,12,34)] flex justify-center items-center flex-col gap-5'>
    <p className='w-full text-left pl-[10vw] text-[22px] text-[#f895f8]'>Showing result of "{content}"</p>
    <div className='lg:w-[50%] md:w-[50%] w-[80%] h-[50%]'  style={{backgroundImage:`url(${imageSrc})`,backgroundSize:"100%",backgroundPosition:"center",border:"2px solid #f895f8",boxShadow:"0 0 10px #f895f8,inset 0 0 10px #f895f8"}}>

  {imageSrc && <img src={imageSrc} alt='Generated result' id='resultImg' className='w-[100%] h-[100%] object-contain' style={{backdropFilter:"blur(10px)"}}/>}
  </div>
    </div>
  </>
  )
}
