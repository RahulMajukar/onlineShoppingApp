import React from 'react'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './pages/About'
import Blog from './pages/Blog'
import Contacts from './pages/Contacts'
import NoPageFound from './pages/NoPageFound'
import ProductDetail from './pages/ProductDetail'
import { UserProvider } from './context/UserContext'
import './App.css'

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>

      </BrowserRouter>
    </UserProvider>
  )
}

export default App