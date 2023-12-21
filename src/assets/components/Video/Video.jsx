import { Outlet, Link, useParams } from "react-router-dom";
import { row1, intro } from "../RowData/row1-data";
import logo from '../Header/imgs/logo-2icon.png';
import './Video.css'

export function Video() {
  return (
    <div className='video-container'>
      <Link to={'/Mov'} className="video-button">
        <img src={logo} className="button-icon-video"/>
      </Link>

      <Outlet /> 
    </div>
  )
}

export function VideoId() {
  const { id } = useParams();
  let videoAction
  if (id === 'intro') {
    videoAction = intro[0].url;
  } else {
    videoAction = row1[id - 1].url;
  }

  return (
    <iframe className="video-player" src={`https://www.youtube.com/embed/${videoAction}?autoplay=1&mute=0&rel=0;si=X27ge2SJWDsc28jf;`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture; web-share" allowFullScreen='1'></iframe>
  )
}
