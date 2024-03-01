import { useState, useEffect } from 'react'
import gsap from 'gsap'
import Header from './assets/components/Header/Header.jsx'
import MainContent from './assets/components/MainContent/MainContent.jsx'
import img from './assets/components/Header/imgs/logo-2icon.png'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './assets/components/Footer/Footer.jsx'

function Loading() {

  useEffect(() => {
    gsap.to(".loading-anim", {
      rotate: 720,
      duration: 1,
      repeat: -1,
    })
  })

  return (
    <>
      <div className='loading-page'>
        <div className='loading-anim'>
        </div>
        <div className='loading-circle'>
          <img src={img} alt="" />
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      {<div className='container'>
        <Header />

        <Outlet />
        <Footer />
      </div> || <Loading />}
    </>
  )
}

export default App
