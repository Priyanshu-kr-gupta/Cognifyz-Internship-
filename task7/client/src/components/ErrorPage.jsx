import React from 'react'
import Header from "../components/Header"

import { CgDanger } from 'react-icons/cg'
import { useParams } from 'react-router-dom'

export default function ErrorPage() {
  const {error}=useParams();

  return (
    <>

    <div className='w-full h-[90vh] flex flex-col justify-center items-center  bg-slate-50'><CgDanger className='text-[red] text-[50px]'/><div className='w-[85%] h-auto text-center break-words'>Error {error}<br/><br/>Please try after sometime <br/>the huggingface api is not responding</div></div>
    </>
  )
}
