import { useNavigate } from 'react-router-dom';
import { row1 } from '../RowData/row1-data';
import { useContext } from 'react';
import { wordContext } from '../../context/InfoContext';
import './Search.css';

export default function Search() {
  const navigate = useNavigate()
  const { words, toggleWord } = useContext(wordContext)

  const filtered = row1.filter((item) =>  item.title.includes(words))

  function onImgClick(e) {
    navigate(`/Mov/Video/${e}`)
  }

  const rowRender = filtered.map(item => {
    return (
        <img src={item.preview} key={item.id} onClick={() => onImgClick(item.id)}/>
    )
  })

  return (
    <div className='search-page'>

      <div className='search-carousel'>

        <div className="slider-search">
          {rowRender}
        </div>

      </div>

    </div>
  )
}
