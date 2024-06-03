import React, { useState } from 'react'

export default function Footer() {
  const [registration,setRegistration]=useState("")
  const [name,setName]=useState("")
  const [course,setCourse]=useState("")
  


  const addData = async() =>{

    const response = await fetch(`http://localhost:5000/submit?registration=${registration}&name=${name}&course=${course}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        // body: JSON.stringify({id:user.userId}),
  }
)
    window.location.reload();
};

    return (
    <>  
     <button className='absolute bottom-10 right-10 btn btn-primary text-[white] rounded-[9999px] ' type='button' data-bs-toggle="modal" data-bs-target="#addModal">New</button>


<div className='modal fade' id='addModal' tabIndex={-1} aria-labelledby='add new student' aria-hidden="true">
    <div className='modal-dialog'>
        <div className='modal-content'>
            <div className='modal-header'>
                <h1 className='modal-title fs-5' id='header'>Add new student</h1>
                <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
                

            </div>
            <div className='modal-body'>
                <div className='form-floating mb-3'>
                    <input type='text' className="form-control" id='regNo' placeholder='Registration No' onChange={(e)=>{
                        setRegistration(e.target.value)
                    }} value={registration}/>
                    <label htmlFor='regNo'>Registration No.</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='text' className="form-control" id='name' placeholder='Name' onChange={(e)=>{
                        setName(e.target.value)
                    }} value={name}/>
                    <label htmlFor='name'>Name</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='text' className="form-control" id='course' placeholder='Course Name' onChange={(e)=>{
                        setCourse(e.target.value)
                    }} value={course}/>
                    <label htmlFor='regNo'>Course Name</label>
                </div>
            </div>
            <div className='modal-footer'>
                <button className='btn btn-secondary' data-bs-dismiss="modal" type='button'>
                    Close
                </button>
                <button className='btn btn-primary' type='button' onClick={addData}>
                    Add
                </button>
            </div>
        </div>

    </div>
    
</div>
    </>
  )
}
