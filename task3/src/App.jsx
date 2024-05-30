import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Myworks from './components/Myworks'
import Skills from './components/Skills'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {

  return (
    <div className='mainContainer'>
    <Header/>
    <Sidebar/>
    <Hero/>
    <Myworks/>
    <Skills/>
    <ContactForm/>
    {/* <Footer /> */}
    </div>
  )
}

export default App
