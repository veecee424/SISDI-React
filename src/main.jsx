import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Mount the React app
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Note: legacy scripts from `/public` are loaded via a <script> tag in index.html
// (do NOT import them here; Vite treats /public files as static assets)
