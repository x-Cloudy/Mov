import { BiSolidDownArrow } from 'react-icons/bi'
import { PiPencilDuotone } from 'react-icons/pi'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import './Header.css'

function Perfis({ pic, name }) {
  return (
    <span>
      <a href="/" className='menu-perfil'>
        <img src={pic} alt="photo-perfil" />
        <span>{name}</span>
      </a>
    </span>
  )
}

export default function MenuDropDown() {
  const container = useRef()
  const tl = useRef()

  //animation
  function toggleTimeLine() {
    tl.current.reversed(!tl.current.reversed());
  }

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const drop = self.selector('#drop-icon')
      tl.current = gsap.timeline()
        .to(drop, { rotation: 180, duration: 0.3 })
        .reverse();
    }, container) // <= scop
    return () => ctx.revert()
  }, [])
  //

  return (
    <div className='menu-drop' ref={container} onMouseEnter={toggleTimeLine} onMouseLeave={toggleTimeLine}>
      <img src="src/assets/components/Header/imgs/img-logo.png" alt="perfil-img"/>
      <BiSolidDownArrow id='drop-icon' />
      <div className='drop-container'>
        <div className='drop-menu'>
          <Perfis pic={'src/assets/components/Header/imgs/img-logo.png'} name={'Markup'}
          />
          <Perfis pic={'src/assets/components/Header/imgs/img-logo.png'} name={'CLT'}
          />
          <Perfis pic={'src/assets/components/Header/imgs/img-logo.png'} name={'MEI'}
          />
          <Perfis pic={'src/assets/components/Header/imgs/img-logo.png'} name={'CNAE'}
          />
          <br />
          {/* Second menu*/}
          <div className='second-drop-menu'>
            <button className='btn-second'>
              <PiPencilDuotone className='menus-icon' /> <span>Gerenciar perfis</span>
            </button>
            <button className='btn-second'>
              <PiPencilDuotone className='menus-icon' /> <span>Gerenciar perfis</span>
            </button>
            <button className='btn-second'>
              <PiPencilDuotone className='menus-icon' /> <span>Gerenciar perfis</span>
            </button>
          </div>
          <br /> 
          <span id='hr-menu'></span>
          <br />
          <button className='button-exit'>
              <a href="/">Sair do Estudo</a>
          </button>
        </div> {/*Menu Dropdown */}
      </div>
    </div>
  )
}