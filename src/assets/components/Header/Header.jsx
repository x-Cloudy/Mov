import { useEffect, useRef, useState, } from 'react';
import { BiSearch } from 'react-icons/bi'
import { IoMdArrowDropdown } from "react-icons/io";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdNotificationsOutline } from 'react-icons/io'
import MenuDropDown from './MenuDropDown'
import './Header.css'


export default function Header() {
  const rHeader = useRef()
  const [nav, setNav] = useState(false)
  let cName;
  //Pageload
  useEffect(() => {
    if (rHeader.current.offsetWidth < 900) {
      setNav(true)
      return
    }
  })

  //PageResize
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (rHeader.current.offsetWidth < 900) {
        setNav(true)
      } else {
        setNav(false)
      }

    })

    return () => {
      window.removeEventListener('resize', () => {
        console.log(rHeader.current.offsetWidth)
      })
    }
  })

  //NavBar resize
  nav ? cName = 'header-container-close' : cName = 'header-container';
  return (
    <div className={cName} ref={rHeader}>
      <ImgLogo />
      {nav && <NavClose /> || <Nav />}
      <Menu />
    </div>
  )
}



function Menu() {

  return (
    <div className='menu-container'>
      <BiSearch className='search-btn' />
      <IoMdNotificationsOutline className='bel-btn' />
      <MenuDropDown />
    </div>
  )
}

function NavClose() {
  function DropClose() {
    return (
      <div className='drop-close'>
        <ul className='NavCloseDrop'>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Séries</a>
          </li>
          <li>
            <a href="/">Filmes</a>
          </li>
          <li>
            <a href="/">Bombando</a>
          </li>
          <li>
            <a href="/">Minha lista</a>
          </li>
          <li>
            <a href="/">Navegar por idiomas</a>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className='dropAct'>
      <div className='nav-close'>Navegar <IoMdArrowDropdown id='navClose-icon' /></div>
      <DropClose />
    </ div>

  )
}

function Nav() {
  return (
    <ul className='navbar'>
      <li>
        <a href="/">Inicio</a>
      </li>
      <li>
        <a href="/">Séries</a>
      </li>
      <li>
        <a href="/">Filmes</a>
      </li>
      <li>
        <a href="/">Bombando</a>
      </li>
      <li>
        <a href="/">Minha lista</a>
      </li>
      <li>
        <a href="/">Navegar por idiomas</a>
      </li>
    </ul>
  )
}

function ImgLogo() {
  return (
    <a href='/'>
      <img src="src/assets/components/Header/imgs/logo-2icon.png" alt="main-logo" id='main-logo' />
    </a>
  )
}

