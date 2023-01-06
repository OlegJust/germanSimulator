import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Pricing from './pages/Pricing'

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
