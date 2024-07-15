import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import Register from './components/Register'
import {  Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Showdiary from './components/Showdiary'

function App() {

  return (
    <div className='mainContainer'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/diary/:dt' element={<Showdiary />}/>
      </Routes>
    </div>
  )
}

export default App
