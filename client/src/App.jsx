import './App.css'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tribute from './routes/Tribute'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "/tribute",
      element:<Tribute/>,
    }
  ])
  

  return (
      <div>
        <Header/>
        <RouterProvider router={router}/> 
        <Footer/>
      </div>
  )
}

export default App
