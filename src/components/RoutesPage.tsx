import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9000/api'

function RoutesPage() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default RoutesPage
