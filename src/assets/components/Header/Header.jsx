import { useEffect, useRef, useState, useContext } from 'react';
import { BiSearch } from 'react-icons/bi'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdNotificationsOutline } from 'react-icons/io'
import { wordContext } from '../../context/InfoContext';
import { Link, useNavigate } from 'react-router-dom';
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
  const searchNavigate = useNavigate()
  const { words, toggleWord } = useContext(wordContext)
  const [search, setSearch] = useState(false)
  let cnSearch;
  let currentWord;

  function onInputChange(e) {
    currentWord = e.target.value.toLowerCase()
  }

  function onEnterPress(e) {
    if (e.key === 'Enter') {
      searchNavigate('/Mov/search')
      toggleWord(currentWord)
    }
  }


  useEffect(() => {
    window.addEventListener('click', handleChange)

    return () => {
      window.removeEventListener('click', handleChange)
    }
  })

  function handleChange(e) {
    if (e.target.nodeName === 'HTML') {
      setSearch(prev => false)
      return
    }

    if (e.target.className.baseVal === 'search-btn'      || 
        e.target.className === 'search-container'        || 
        e.target.className === 'search-container active' || 
        e.target.id === 'input-search'                   ||
        e.target.parentElement.className.baseVal === 'search-btn') {
      setSearch(prev => true)
    } else {
      setSearch(prev => false)
    }

    if (e.target.className === null || 
      e.target.className === ''     || 
      e.target.className === undefined) return
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
        <input type='text' placeholder='Titulos' id="input-search" ref={searchInput} onChange={onInputChange} onKeyDown={onEnterPress} />
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
        <Link to={'/Mov'}>Inicio</Link>
      </li>
      <li>
        <Link to={'/Mov'}>Minha lista</Link>
      </li>
      <li className='idiomas-nav'>
        <a href="/">Navegar por idiomas <IoMdArrowDropdown /></a>
        <div className='idiomas-container'>
          <div className='idiomas-drop'>
            <ul>
              <li>English</li>
              <li>Français</li>
              <li>Deutsch</li>
              <li id='hebraico'>עִברִית</li>
              <li id='arabe'>عربي</li>
            </ul>
          </div>
        </div>

      </li>
    </ul>
  )
}

function ImgLogo() {
  return (
    <Link to={'/Mov'}>
      <img src={mainLogo} alt="main-logo" id='main-logo' />
    </Link>
  )
}

