import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import {  Route, Routes } from 'react-router-dom'
import Login from './components/Login'

function App() {

  return (
    <div className='w-full h-[100vh]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
