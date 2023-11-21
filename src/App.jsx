import Header from './assets/components/Header/Header.jsx'
import Display from './assets/components/Display/Display.jsx'
import Carousel from './assets/components/Carousel/Carousel.jsx'
import './App.css'

function App() {
  return (
    <div className='container'>
      <Header />
      <Display />
      
      <div className='video-area'>
        <Carousel />
      </div>

    </div>
  )
}

export default App
