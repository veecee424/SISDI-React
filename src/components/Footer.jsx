import React from 'react'

export default function Footer(){
  return (
    <footer className="sisdi-footer">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <img src="/images/logo.png" alt="SISDI Logo" height="50" className="mb-2" />
            <p className="footer-text">Schools In Soccer Development Initiative is a pan-African nonprofit empowering children through football and education. Through our programs, we aim to nurture not just skilled athletes, but well-rounded, resilient individuals who can make meaningful contributions to their communities and the world.</p>
          </div>

          <div className="col-md-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/programs">Programs</a></li>
              <li><a href="/impact">Impact</a></li>
              <li><a href="/get-involved">Get Involved</a></li>
              <li><a href="/donate">Donate</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="footer-title">Connect With Us</h5>
            <p className="footer-text mb-2">Email: schoolsinsoccer@gmail.com</p>
            <p className="footer-text mb-2">Call: +2349122328676</p>

            <div className="footer-socials mt-3">
              <a href="https://web.facebook.com/profile.php?id=61563594750242" aria-label="Facebook" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
              <a href="https://x.com/schoolsinsoccer?s=20" aria-label="Twitter" target="_blank" rel="noreferrer"><i className="bi bi-twitter-x"></i></a>
              <a href="https://www.instagram.com/schoolsinsoccer_" aria-label="Instagram" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/company/schools-in-soccer-development-initiative" aria-label="LinkedIn" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />
        <div className="text-center footer-bottom">© {new Date().getFullYear()} SISDI. All rights reserved.</div>
      </div>
    </footer>
  )
}
