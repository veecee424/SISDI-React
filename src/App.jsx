import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Impact from './pages/Impact'
import Programs from './pages/Programs'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import GetInvolved from './pages/GetInvolved'
import { initScrollAnimations } from './legacy/scroll-animations'

export default function App(){
  const location = useLocation()

  useEffect(() => {
    // Re-run legacy animations whenever the route changes so new DOM nodes
    // (with fade-in etc.) get observers and event listeners.
    const timer = setTimeout(() => {
      try {
        initScrollAnimations()
      } catch (err) {
        console.error('Failed to init animations after route change', err)
      }
    }, 0)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/impact' element={<Impact />} />
      <Route path='/programs' element={<Programs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/donate' element={<Donate />} />
      <Route path='/get-involved' element={<GetInvolved />} />
    </Routes>
  )
}
