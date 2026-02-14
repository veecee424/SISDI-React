import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { initScrollAnimations } from './legacy/scroll-animations'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Initialize legacy DOM-based animations after mount
if (typeof window !== 'undefined') {
  // Delay slightly to ensure React has painted
  setTimeout(() => {
    try {
      initScrollAnimations()
    } catch (e) {
      console.error('scroll animations init failed', e)
    }
  }, 50)
}
