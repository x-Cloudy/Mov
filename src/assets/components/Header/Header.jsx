import { useEffect, useRef, useState, } from 'react';
import { BiSearch } from 'react-icons/bi'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdNotificationsOutline } from 'react-icons/io'
import MenuDropDown from './MenuDropDown'
import mainLogo from './imgs/logo-2icon.png'
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
  const searchInput = useRef()
  const [search, setSearch] = useState(false)
  let cnSearch;


  useEffect(() => {
    window.addEventListener('click', handleChange)

    return () => {
      window.removeEventListener('click', handleChange)
    }
  })

  function handleChange(e) {
    if (e.target.className.baseVal === 'search-btn'      || 
        e.target.className === 'search-container'        || 
        e.target.className === 'search-container active' || 
        e.target.id === 'input-search') {
      setSearch(prev => true)
    } else {
      setSearch(prev => false)
    }
  }

  if (search) {
    cnSearch = "search-container active"
    setTimeout(() => {
      searchInput.current.focus()
    }, 800);
  } else {
    cnSearch = "search-container"
  }


  return (
    <div className='menu-container'>
      <button className={cnSearch}>
        <BiSearch className='search-btn' />
        <input type='text' placeholder='Titulos' id="input-search" ref={searchInput} />
      </button>
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
      {/* <li>
        <a href="/">Séries</a>
      </li>
      <li>
        <a href="/">Filmes</a>
      </li>
      <li>
        <a href="/">Bombando</a>
      </li> */}
      <li>
        <a href="/">Minha lista</a>
      </li>
      <li className='idiomas-nav'>
        <a href="/">Navegar por idiomas <IoMdArrowDropdown /></a>
        <div className='idiomas-container'>
          <div className='idiomas-drop'>
            <ul>
              <li>Engles</li>
              <li>Frances</li>
              <li>Alemão</li>
              <li>Ebraico</li>
              <li>Árabe</li>
            </ul>
          </div>
        </div>

      </li>
    </ul>
  )
}

function ImgLogo() {
  return (
    <a href='/'>
      <img src={mainLogo} alt="main-logo" id='main-logo' />
    </a>
  )
}

