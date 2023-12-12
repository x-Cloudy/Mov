import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { row1 } from '../RowData/row1-data';
import Player from './Player';
import './Carousel.css'

export default function Carousel() {
  return (
    <>
      <Row d={row1} title={'Populares'}/>
      <Row d={row1} title={'row2'}/>
    </>
  )
}


function Row({ d, title }) {
  const [state, setState] = useState(0)
  const [lenght, setLength] = useState(0)
  const [screem, setScreem] = useState(0)
  const sliderCarousel = useRef(null)
  let cursorValue;
  const styles = [
    {
      transform: `translateX(calc(${state} * -100%))`
    },
    {
      visibility: state,
      cursor: cursorValue
    }
  ]

  state > 0 ? cursorValue = 'pointer' : cursorValue = 'default';

  // coleta o tamanho e a quantidade de item
  useEffect(() => {
    let sliderSize = sliderCarousel.current.children.length;
    let itemsOnScreem = parseInt(getComputedStyle(sliderCarousel.current).getPropertyValue("--items-per-screem"))
    setLength(prev => sliderSize)
    setScreem(prev => itemsOnScreem)
  })

  // Active roll button on callback
  function handleSlider(e) {
    let handle;
    if (e.target.matches(".handle")) {
      handle = e.target
    } else {
      handle = e.target.closest(".handle")
    }
    if (handle != null) onHandleClick(handle)
  }

  // handleSlider callback, verifica o tamanho e rolagem
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

  const rowRender = d.map(item => {
    return (
      <Player embed={item.url} key={item.id} prev={item.preview} id={item.id}/>
    )
  })

  return (
    <div className='container-row'>
      <div className='title-header'>
        <h1 className='title'>{title}</h1>
      </div>

      <div className='container-carousel'>

        {/* Button Left Carousel */}
        <button className="handle left-handle"
          onClick={handleSlider} style={styles[1]}>
          <div className="text"> &#8249;</div>
        </button>

        <div className="slider-carousel" style={styles[0]} ref={sliderCarousel}>
          {rowRender}
        </div>

        {/* Button Right Carousel */}
        <button className="handle right-handle" onClick={handleSlider}>
          <div className="text"> &#8250;</div>
        </button>

      </div>
    </div>
  )
}


