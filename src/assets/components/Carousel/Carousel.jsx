import { useLayoutEffect, useState } from 'react';
import { useRef } from 'react';
import video1 from './cImgs/video1.png'
import Player from './Player';
import './Carousel.css'

export default function Carousel() {
  const [state, setState] = useState(0)
  const [lenght, setLength] = useState(0)
  const [screem, setScreem] = useState(0)

  const sliderCarousel = useRef(null)
  let cursorValue;
  state > 0 ? cursorValue = 'pointer' : cursorValue = 'default';
  const styles = [
    {
      transform: `translateX(calc(${state} * -100%))`
    },
    {
      opacity: state,
      cursor: cursorValue
    }
  ]

  function handleSlider(e) {
    let handle;
    if (e.target.matches(".handle")) {
      handle = e.target
    } else {
      handle = e.target.closest(".handle")
    }
    if (handle != null) onHandleClick(handle)
  }

  function onHandleClick(handle) {
    if (handle.classList.contains("left-handle")) {
      if (state < 1) return
      setState(prev => prev - 1)
    }
    if (handle.classList.contains("right-handle")) {
      if (state >= (lenght / screem) - 1) {
        setState(0)
        return
      }
      setState(prev => prev + 1)
    }
  }

  useLayoutEffect(() => {
    let sliderSize = sliderCarousel.current.children.length;
    let itemsOnScreem = parseInt(getComputedStyle(sliderCarousel.current).getPropertyValue("--items-per-screem"))
    setLength(prev => sliderSize)
    setScreem(prev => itemsOnScreem)
  })

  return (
    <>
      <div className='title-header'>
        <h1 className='title'>Title</h1>
        {/* <div className="progress-bar">
          <div className='progress-item'></div>
          <div className='progress-item active'></div>
          <div className='progress-item'></div>
          <div className='progress-item'></div>
        </div> */}
      </div>

      <div className='container-carousel'>
        {<button className="handle left-handle" onClick={handleSlider} style={styles[1]}>
          <div className="text">
            &#8249;
          </div>
        </button>}


        <div className="slider-carousel" style={styles[0]} ref={sliderCarousel}>
        <Player />
        <Player />
        <Player />
        <Player />
        <Player />
        <Player />
        <Player />
        <Player />
        <Player />
        <Player />
        

        </div>
        <button className="handle right-handle" onClick={handleSlider}>
          <div className="text">
            &#8250;
          </div>
        </button>
      </div>
    </>

  )
}