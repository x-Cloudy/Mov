import { useEffect, useState } from "react"
import video1 from './cImgs/video1.png'
import { MdPlayCircleFilled } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import './Carousel.css'
import './Player.css'
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Player({ embed, prev, id }) {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(false)
  const navigate = useNavigate()

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
        console.log(count)
        setCount(prev => prev + 1)
        break
      }
    }, 200)
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

        <iframe className="info-player" src={`https://www.youtube.com/embed/${embed}?autoplay=1&mute=1;si=28ZnN1oGQOSHgWnv&amp;controls=0;`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe>

        <div className='player-info-control'>
          <Link to={`/Mov/video/${id}`}>
            <button>
              <MdPlayCircleFilled id='player-info-btn-icon-play' />
            </button>
          </Link>

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
      <Link to={`/Mov/Video/${id}`}>
        <img src={prev} alt="video-1" className="imgs"/>
      </Link>
    )
  }

  return (
    <div className="container-teste" onMouseEnter={onPlayerFocus} onMouseLeave={offPlayerFocus}>
      {active && <PlayerInfo /> || <Preview />}
    </div>
  )
}
