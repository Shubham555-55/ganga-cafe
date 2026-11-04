import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MenueCard from './Components/MenueCard'
import NotFound from './pages/NotFound'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/' element={<MenueCard/>}/>
          <Route path='/home' element={<MenueCard/>}/>
          <Route path='/menu' element={<MenueCard/>}/>
          <Route path='/contact' element={<MenueCard/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App