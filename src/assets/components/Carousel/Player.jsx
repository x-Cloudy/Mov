import { useEffect, useState } from "react"
import video1 from './cImgs/video1.png'
import { MdPlayCircleFilled } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import './Carousel.css'
import './Player.css'
import { Link } from "react-router-dom";

export default function Player({ embed, prev, id, desc, desc2 }) {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(false)
  const [deb, setDeb] = useState(false)
  let timeLet;

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
    timeLet = setTimeout(() => {
      console.log('setTeste')
      setActive(true)
    }, 600)
  }

  function offPlayerFocus() {
    clearTimeout(timeLet)
    setActive(prev => prev = false)
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
        </div>
        
        <div className='player-info-desc'>
          <p>{desc}<br /> {desc2} </p>
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
