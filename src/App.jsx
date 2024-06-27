import React from 'react'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './pages/About'
import Blog from './pages/Blog'
import Contacts from './pages/Contacts'
import NoPageFound from './pages/NoPageFound'
const App = () => {
  return (
    <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="*" element={<NoPageFound />} />
          </Routes>

      </BrowserRouter>
  )
}

export default App