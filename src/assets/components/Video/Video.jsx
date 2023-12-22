import { Outlet, Link, useParams } from "react-router-dom";
import { row1, intro } from "../RowData/row1-data";
import { RiArrowGoBackFill } from "react-icons/ri";
import logo from '../Header/imgs/logo-2icon.png';
import './Video.css'
import { useEffect, useRef } from "react";


export function Video() {

  return (
    <div className='video-container'>
        <img src={logo} className="button-icon-video"/>
      <Link to={'/Mov'} className="video-button">
        <div className="btn-back">
          <p><RiArrowGoBackFill /></p>
        </div>
      </Link>

      <Outlet /> 
    </div>
  )
}

export function VideoId() {
  const { id } = useParams();
  const playerVid = useRef()


  let videoAction
  if (id === 'intro') {
    videoAction = intro[0].url;
  } else {
    videoAction = row1[id - 1].url;
  }

  return (
    <iframe ref={playerVid} className="video-player" src={`https://www.youtube.com/embed/${videoAction}?autoplay=1&mute=0&rel=0;si=X27ge2SJWDsc28jf;`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture; web-share" allowFullScreen='1'></iframe>
  )
}
