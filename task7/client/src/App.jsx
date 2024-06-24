import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import {  Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import ErrorPage from './components/ErrorPage'

function App() {

  return (
    <div className='w-full h-[100vh]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/err/:error" element={<ErrorPage/>} />
      </Routes>
    </div>
  )
}

export default App
