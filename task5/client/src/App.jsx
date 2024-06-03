import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {

  return (
    <div className='w-full h-[100vh]'>
      <Header />
      <Home />
      <Footer/>
    </div>
  )
}

export default App
