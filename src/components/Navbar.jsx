import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top sisdi-navbar">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/images/logo.png" alt="SISDI Logo" height="40" className="me-2" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/impact">Impact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/get-involved">Get Involved</Link></li>
            <li className="nav-item ms-lg-3"><Link className="btn btn-donate btn-sm" to="/donate">Donate</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
