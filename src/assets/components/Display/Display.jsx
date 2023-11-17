import { BsPlayFill } from 'react-icons/bs'
import './Display.css'

export default function Display() {

  function VideoControler() {
    return (
      <div className='video-menu'>
        <button onClick={() => {
          console.log('foi btn')
        }} className='btn-play'><BsPlayFill id='btn-play-icon' />Assistir</button>
        <button className='btn-info'>Mais Informações</button>
      </div>
    )
  }

  return (
    <div className='display-container'>
      {/* Video Recomendado */}
      <video className='iframe' autoPlay muted loop>
        <source src='src/assets/components/Display/video/video1.mp4' type='video/webm' />

      </video>
      <VideoControler />
      <div className='iframe-shadow' />
    </div>
  )
}