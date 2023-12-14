import Display from "../Display/Display"
import { Carousel } from "../Carousel/Carousel"

export default function MainContent() {
  return (
    <>
      <Display />

      <div className='video-area'>
        <Carousel />
      </div>
    </>
  )
}