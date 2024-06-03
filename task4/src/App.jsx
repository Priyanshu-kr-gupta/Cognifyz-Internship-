import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './component/Home'
import Register from './component/Register'
import Nav from './component/Nav'
import Login from './component/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
