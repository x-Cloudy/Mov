import { BsPlayFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RxReload } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import video1 from './video/videoIntro.mp4'
import './Display.css'

export default function Display() {
  const myVid = useRef()

  {/* Pause Main Display when player-info open */}
  useEffect(() => {
    document.addEventListener('mouseover', (e) => {
      if (e.target.className === 'player-info' ||
        e.target.className === 'pre-imgs' ||
        e.target.className === 'info-player' ||
        e.target.id === 'player-info-btn-icon-play' || 
        e.target.id === 'player-info-btn-icon-plus' ||
        e.target.parentNode.id === 'player-info-btn-icon-plus' || 
        e.target.parentNode.id === 'player-info-btn-icon-play' || 
        e.target.parentNode.className === 'btn-a' ||
        e.target.parentNode.className === 'player-info-control' ||
        e.target.parentNode.className === 'container-test' ||
        e.target.parentNode.className === 'player-info-desc'
      ) {
        pauseVideo();
      } else {
        playVideo();
      }
    })

    return () => {
      document.removeEventListener('mouseover', (e) => {
        if (e.target.className === 'player-info') {
          myVid.current.pause();
        }
      })
    }
  })

  function playVideo() {
    myVid.current.play()
  }

  function pauseVideo() {
    myVid.current.pause()
  }

  function VideoControler() {
    return (
      <div className='video-menu'>
        <Link to="/Mov/Video/intro" className='btn-play'>
          <BsPlayFill id='btn-play-icon' />Assistir
        </Link>
        <button className='btn-info'><AiOutlineInfoCircle id='info-btn-icon' />Mais Informações</button>
      </div>
    )
  }

  function SoundAndReplay() {
    return (
      <div className='sound-replay'>
        <button className='reload-button' onClick={() => {
          myVid.current.load()
        }}><RxReload /></button>
        <div className='age-tag'>
          <div className='age-free'>
            <p>L</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='display-container'>
      {/* Video Recomendado */}
      <video className='iframe' autoPlay={true} muted={true} loop={true} ref={myVid}>
        <source src={video1} type='video/webm' />
      </video>
      <VideoControler />
      <SoundAndReplay />
      <div className='iframe-shadow' />
    </div>
  )
}