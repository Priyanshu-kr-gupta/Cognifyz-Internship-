import React from 'react'
import Footer from './Footer'
export default function Sidebar() {
  return (
    <div>


<div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel"><strong>Priyanshu Kumar</strong></h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <a className="nav-link" href="#Hero" >About me</a><br/>
  <a className="nav-link" href="#myworks">My Works</a><br/>
  <a className="nav-link" href="#myskills">Skills</a><br/>
  <a className="nav-link" href="#contact">Contact</a><br/><br/>
  <Footer/>
  </div>
</div>

    </div>
  )
}
