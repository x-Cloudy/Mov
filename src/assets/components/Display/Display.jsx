import { BsPlayFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from "react-icons/ai";
import video1 from './video/videoIntro.mp4'
import './Display.css'
import { Link } from 'react-router-dom';

export default function Display() {

  function VideoControler() {
    return (
      <div className='video-menu'>
        {/* <button onClick={onPlayClick} className='btn-play'><BsPlayFill id='btn-play-icon' />Assistir</button> */}
        <Link to="/Mov/Video/intro" className='btn-play'>
          <BsPlayFill id='btn-play-icon' />Assistir
        </Link>
        <button className='btn-info'><AiOutlineInfoCircle id='info-btn-icon' />Mais Informações</button>
      </div>
    )
  }

  return (
    <div className='display-container'>
      {/* Video Recomendado */}
      <video className='iframe' autoPlay={true} muted={true} loop={true}>
        <source src={video1} type='video/webm' />
      </video>
      <VideoControler />
      <div className='iframe-shadow' />
    </div>
  )
}