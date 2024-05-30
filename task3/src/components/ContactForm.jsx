import React from 'react'

export default function ContactForm() {
  return (
    <>

      <p style={{fontSize:"35px",fontWeight:"700",marginLeft:"5%"}} id='contact'>Contact</p>
      <br/>
      <br/>
      <br/>
    <div style={{width:"90%",marginLeft:"5%"}}>

    <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Name</label>
    <input type="text" className="form-control" id="inputPassword4" />
  </div>
  <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "150px"}}></textarea>
  <label htmlFor="floatingTextarea2" style={{marginLeft:"10px"}}>Message</label>
</div>
 
   <center><button type="submit" className="btn btn-primary" style={{width:"200px"}}>Send</button></center> 
</form>
<br/>
<br/>
<br/>
    </div>
    </>
  )
}
