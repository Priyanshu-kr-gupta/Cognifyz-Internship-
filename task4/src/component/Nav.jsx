import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return(
    <div className='w-full h-[10vh] flex items-center justify-between lg:px-11 md:px-8 sm:px-5 px-3 bg-zinc-800' style={{borderBottom:"2px solid  rgba(0,255,255,0.2)"}}>
       <div className='text-[white] text-[22px]'>Task 4</div>
        <div>
          <button className='bg-[aqua] mr-2 px-3 py-2 w-[80px]'><Link to={"/login"}>Login</Link></button>
          <button className='bg-[aqua] ml-2 px-3 py-2 w-[80px]'><Link to={"/register"}>Register</Link></button>
          {/* <Link></Link> */}
          {/* <Link></Link> */}
        </div>
    </div>
  )
}
