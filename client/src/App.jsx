import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
function App() {
 

  return (
    <>
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Projects/>
      <Contact/>
      <Footer/>
     </BrowserRouter>

    
     </>
  )
}

export default App
