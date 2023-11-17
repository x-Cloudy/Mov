import Header from './assets/components/Header/Header.jsx'
import Display from './assets/components/Display/Display.jsx'
import Carrosel from './assets/components/Carrosel/Carrosel.jsx'
import './App.css'

function App() {
  return (
    <div className='container'> 
      <Header />
      <Display />
      <Carrosel title={'Populares'}/>
      <Carrosel title={'CLT'}/>
    </div>
  )
}

export default App
