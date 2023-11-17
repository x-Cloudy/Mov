import Header from './assets/components/Header/Header.jsx'
import Display from './assets/components/Display/Display.jsx'
import Carrosel from './assets/components/Carrosel/Carrosel.jsx'
import './App.css'

function App() {
  return (
    <div className='container'>
      <Header />
      <Display />
      
      <div className='video-area'>
        <Carrosel title={'Populares'} />
        <Carrosel title={'CLT'} />
      </div>

    </div>
  )
}

export default App
