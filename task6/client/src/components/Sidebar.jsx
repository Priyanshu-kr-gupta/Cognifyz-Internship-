import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineSort } from "react-icons/md";
import "../Css/sidebar.css"
export default function Sidebar() {
  const [data,setData]=useState([]);
  const uid=localStorage.getItem("userid")
  const [date,setDate]=useState("");

const backendApi =  process.env.REACT_APP_HOST;
  const getnote =async ()=>{
    const respon = await fetch(`${backendApi}/api/note/getAllNote?uid=${uid}`, {
      method: "POST",
      headers: {
          "Content-Type": "Application/json",
      },
  })
  const result=await respon.json();
  setData(result)
  }
  useEffect(()=>{
    const date =new Date
    setDate(date.getDate()+"-"+parseInt(date.getMonth()+1)+"-"+date.getFullYear())
    
    getnote();
  },[])
  return (
    <>
    <label htmlFor="toggle" id="tgl"><MdOutlineSort/></label>
   <input type="checkbox" name="ap" id="toggle" style={{display: "none"}} />
    <div className="drawer">
      <div className='drawerMenu'>
        {
          data.map((val)=>{
            return <Link to={(!(val.date==date))?`/diary/${val.date}`:"/"} key={val._id} className='block w-[90%] text-center py-2  m-2 shrink-0'>{(!(val.date==date))?val.date:"today"}</Link>
          })
        }
      </div>
      <div className='extraDrawer '>

    <label htmlFor="toggle" ></label>
      </div>
      
   </div>
    </>
  )
}
