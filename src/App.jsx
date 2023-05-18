import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'

function App() {


  return (
    <div className='w-[80%] mx-auto mt-2'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
