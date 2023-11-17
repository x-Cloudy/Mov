import { IoIosArrowForward } from "react-icons/io";
import Player from './Player.jsx';
import './Carrosel.css'


export default function Carrosel({title}) {

  return (
    <div className='carrosel-container'>
      <h1>{title}</h1>
      <div className='slider'>
        <ul>
          <li><Player /></li>
          <li><Player /></li>
          <li><Player /></li>
          <li><Player /></li>
          <li><Player /></li>
          <li><Player /></li>
          <li><Player /></li>
        </ul>

        {/*Botão de rolagem */}
        {/* <button className='roll-carrosel'>
          <p id='arrow-roll'><IoIosArrowForward /></p>
        </button> */}
      </div>
    </div>
  )
}