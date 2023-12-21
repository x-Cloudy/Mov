import { BsPlayFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RxReload } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useRef, useContext, useEffect } from 'react';
import { wordContext } from '../../context/InfoContext';
import video1 from './video/videoIntro.mp4'
import './Display.css'

export default function Display() {
  const myVid = useRef()
  const { currentPlayer } = useContext(wordContext)

  switch (currentPlayer) {
    case true:
      pauseVideo();
      break

    case false:
      playVideo();
      break
  }

  function playVideo() {
    useEffect(() => {
      myVid.current.play()
    })
  }

  function pauseVideo() {
    useEffect(() => {
      myVid.current.pause()
    })
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