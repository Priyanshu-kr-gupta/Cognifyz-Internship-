import React from 'react'

export default function Myworks() {
  return (
    <div id='Myworks' >
      <br/>
      <br/>
      <br/>
      <p style={{fontSize:"35px",fontWeight:"700",marginLeft:"5%"}} id='myworks'>My works</p>
      <br/>
      <br/>
      <br/>

<div className="accordion accordion-flush" id="accordionFlushExampleone" style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

<p>real time</p><br/>
  <div className="accordion-item" style={{width:"90%"}} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseone" aria-expanded="false" aria-controls="flush-collapseone">
        <strong>Sunspaa.com</strong>
      </button>
    </h2>
    <div id="flush-collapseone" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleone"  style={{visibility:"visible"}}>
      <div className="accordion-body">
        Company name: sunspa jamshedpur<br/>
        <br/>
      <a href='https://www.sunspaa.com/'><code>live site link</code></a>
   
  </div>
    </div>
  </div>
  <br/>
  
  <div className="accordion-item" style={{width:"90%"}} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
        <strong>Society of computer science and engeenering (SCSE Nit jamshedpur) official website</strong>
      </button>
    </h2>
    <div id="flush-collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExamplefive"  style={{visibility:"visible"}}>
      <div className="accordion-body">

        <br/>
      <p>Currently working on it will be live soon</p>
   
  </div>
    </div>
  </div>
  <br/>
  <p >Personal projects</p><br/>

  <div className="accordion-item" style={{width:"90%"}} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <strong>Mediabook (version 1.O)</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"  style={{visibility:"visible"}}>
      <div className="accordion-body">
        <ul>

  <li> › Created a social media platform where users can post pictures, like, comment, edit, and delete posts (CRUD).</li>
  <li> › Implemented email otp based user authentication.</li>
  <li> › Technologies Used: HTML,CSS,BOOTSTRAP,JS,ReactJS.</li>
  <li> › Created own APIs and related end-points for user authentication and notes CRUD operation.</li>
  <li> › Used bcryptJs for password hashing and Json web-token for user encryption.</li>
  <li> › Technologies Used: Js,NodeJS,ExpressJS,Mongoose,MngoDB Atlas(database).</li>
        </ul>
        <br/>
      <a href='https://mediabook-lime.vercel.app/'><code>live site link</code></a>
   
  </div>
    </div>
  </div>
  <br/>
  {/* <div className="accordion-item"  style={{width:"90%"}} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapsesix">
        <strong>Foody Adda</strong>
      </button>
    </h2>
    <div id="flush-collapsesix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={{visibility:"visible"}}>
      <div className="accordion-body">
      
     <code>.accordion-flush</code>
     <ul>

    <li> › Developed a E-commerce website for a food store.</li>
    <li> › Technologies Used:  HTML,CSS,JS,BOOTSTRAP,MYSQL,PHP</li>
      </ul>
      <a href='https://foodyadda.free.nf/' ><code>live site link</code></a>
      <br/>
     </div>
    </div>
  </div>
  <br/> */}

  <div className="accordion-item"  style={{width:"90%"}} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <strong>Newstagram</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={{visibility:"visible"}}>
      <div className="accordion-body">
      
     {/* <code>.accordion-flush</code> */}
     <ul>
    
    <li> ›  Developed a website where users can see, save, and search news.</li>
    <li> › Technologies Used: NodeJS,React,Tailwind Css,Redux toolkit</li>
      </ul>
      <br/>
      <a href='https://persist-ventures-assignment-weld.vercel.app' ><code>live site link</code></a>
     </div>
    </div>
  </div>
  <br/>

  <div className="accordion-item"  style={{width:"90%"}} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        <strong>Dhun - a music website</strong>
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={{visibility:"visible"}}>
      <div className="accordion-body">
      
     {/* <code>.accordion-flush</code> */}
     <ul>

    <li> › Developed a website where users can search, play, and download songs.</li>
    <li> › Admin functionalities include inserting, updating, and deleting songs (CRUD).</li>
    <li> › Technologies Used: HTML,CSS,JS,BOOTSTRAP,MYSQL,PHP.</li>
      </ul>
      <br/>
      <a href='https://dhun-music.epizy.com'><code>live site link</code></a>
     </div>
    </div>
  </div>
</div>
<br/>
      <br/>
      <br/>
    </div>
  
  )
}
