import { BsPlayFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from "react-icons/ai";
import video1 from './video/video1.mp4'
import video2 from './video/video2.mp4'
import './Display.css'

export default function Display() {

  function VideoControler() {
    return (
      <div className='video-menu'>
        <button onClick={() => {
          
        }} className='btn-play'><BsPlayFill id='btn-play-icon' />Assistir</button>
        <button className='btn-info'><AiOutlineInfoCircle id='info-btn-icon'/>Mais Informações</button>
      </div>
    )
  }

  return (
    <div className='display-container'>
      {/* Video Recomendado */}
      <video className='iframe' autoPlay muted loop>
        {/*Video de fundo src*/}
        <source src={video1} type='video/webm' />

      </video>
      <VideoControler />
      <div className='iframe-shadow' />
    </div>
  )
}