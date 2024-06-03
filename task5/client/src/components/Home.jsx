import React, { useEffect, useState } from 'react'

export default function Home() {
  const [registration,setRegistration]=useState("")
  const [name,setName]=useState("")
  const [course,setCourse]=useState("")
  const [data,setData]=useState([]);
  const updatedata = (data) =>{
    // const reg=document.getElementById();
    // const nm=document.getElementById();
    // const crs=document.getElementById();
    setRegistration(data.registration)
    setName(data.name)
    setCourse(data.course)

  }
  const getdata=async()=>{
    const res=await fetch("http://localhost:5000",{

    method: "GET",
    headers: {
      "Content-Type": "application/json",
 
    },

  });
  
  const json = await res.json();
   setData(json);
  }

  
  const update= async() =>{
    const response = await fetch(`http://localhost:5000/update?registration=${registration}&name=${name}&course=${course}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',

        },
        // body: JSON.stringify({id:user.userId}),
  })
  window.location.reload();
};
  const del = async (reg)=>{
    console.log(reg)
   const temp= prompt("type '"+reg+"' to delete")
   if(temp==reg)
   {

     const response = await fetch(`http://localhost:5000/delete?registration=${reg}`,{
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         
        },
      })
      window.location.reload();
    }
    else
    {
      alert("deletion failed")
    }

  }
  useEffect(()=>{
    getdata()
  },[])
  return (
    <>
    <div className='h-[80vh] mt-[10vh] overflow-y-scroll'>
        
        <table className='table table-primary w-[90%] ml-[5%]' >
            <tbody >
            <tr className='h-[50px]'>
                <th className='text-center'>Registration number</th>
                <th className='text-center'>Full Name</th>
                <th className='text-center'>Course</th>
                <th className='text-center'>Actions</th>
            </tr>
            {
              data.map((val)=>{
                return  <tr key={val.registration}>
                <td className='text-center'>{val.registration}</td>
                <td className='text-center'>{val.name}</td>
                <td className='text-center'>{val.course}</td>
                <td className='text-center'><button className='mr-2' onClick={()=>{updatedata(val)}}  data-bs-toggle="modal" data-bs-target="#editModal">📝</button><button onClick={()=>del(val.registration)}>🗑️</button></td>
                
            </tr>  
              })
              
            }
           
         
            </tbody>
        </table>      
    </div>
    <div className='modal fade' id='editModal' tabIndex={-1} aria-labelledby='add new student' aria-hidden="true">
    <div className='modal-dialog'>
        <div className='modal-content'>
            <div className='modal-header'>
                <h1 className='modal-title fs-5' id='header'>Edit details</h1>
                <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
                

            </div>
            <div className='modal-body'>
                <div className='form-floating mb-3'>
                    <input type='text' className="form-control" id='UpregNo' placeholder='Registration No' defaultValue={registration} disabled />
                    <label htmlFor='UpregNo'>Registration No.</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='text' className="form-control" id='Upname' placeholder='Name' onChange={(e)=>{
                        setName(e.target.value)
                    }} value={name}/>
                    <label htmlFor='Upname'>Name</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='text' className="form-control" id='Upcourse' placeholder='Course Name' onChange={(e)=>{
                        setCourse(e.target.value)
                    }} value={course}/>
                    <label htmlFor='Upcourse'>Course Name</label>
                </div>
            </div>
            <div className='modal-footer'>
                <button className='btn btn-secondary' data-bs-dismiss="modal" type='button'>
                    Close
                </button>
                <button className='btn btn-primary' type='button' onClick={update}>
                    Update
                </button>
            </div>
        </div>

    </div>
    
</div>
    </>
  )
}
