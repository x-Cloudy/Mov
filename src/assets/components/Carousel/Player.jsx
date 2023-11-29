import { useEffect, useState } from "react"
import video1 from './cImgs/video1.png'
import { MdPlayCircleFilled } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import './Carousel.css'
import './Player.css'

export default function Player({embed, prev}) {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(false)

  // turn off handler if info is on
  useEffect(() => {
    const root = document.documentElement;
    if (active) {
      root.style.setProperty("--right-button", 0)
    } else {
      root.style.setProperty("--right-button", 1)
    }
  })

  function onPlayerFocus() {
    setTimeout(() => {
      while (count < 10) {
        setCount(prev => prev + 1)
        break
      }
    }, 100)
    if (count > 5) {
      setActive(true)

    }
  }

  function offPlayerFocus() {
    setActive(prev => prev = false)
    setCount(prev => prev = 0)
  }

  function PlayerInfo() {
    return (
      <div className='player-info'>
        {/* <img src={video1} /> */}
        
        <iframe className="info-player" src={`https://www.youtube.com/embed/${embed}?autoplay=1;si=28ZnN1oGQOSHgWnv&amp;controls=0;`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe>
        
        <div className='player-info-control'>
          <button>
            <MdPlayCircleFilled id='player-info-btn-icon-play' />
          </button>
          <button>
            <CiCirclePlus id='player-info-btn-icon-plus' />
          </button>
          <button id='button-like'>
            <AiOutlineLike id='player-info-btn-icon-like' />
          </button>
        </div>
        <div className='player-info-desc'>
          <p>DRE . MOVBANK . <br /> DEMONSTRATIVO </p>
        </div>
      </div>
    )
  }

  function Preview() {
    return (
      <img src={prev} alt="video-1" className="imgs" />
    )
  }

  return (
    <div className="container-teste" onMouseEnter={onPlayerFocus} onMouseLeave={offPlayerFocus}>
      {active && <PlayerInfo /> || <Preview />}
    </div>
  )
}
