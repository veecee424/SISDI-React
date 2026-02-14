import React from 'react'

export default function Hero({ fadeClass = '' }){
  return (
    <section className={`hero-section ${fadeClass}`}>
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 text-white hero-text .hero-content">
            <h1 className="page-title mb-3 statement-text" style={{fontSize: '3.5rem'}}>
              <span>Building Futures Through</span><br />
              <span>Football & Education</span>
            </h1>
            <div className="section-divider"></div>
            <p className="lead mb-4 text-center">
              Schools In Soccer Development Initiative (SISDI) empowers children 
              across Africa through school-based football development 
              programs that integrate quality football training with education, shaping 
              disciplined, confident, and well-rounded individuals who can excel both 
              in the classroom and on and off the pitch.
            </p>

            <div className="hero-actions hero-buttons">
              <a href="/donate" className="btn btn-donate me-3 mb-2">Donate Now</a>
              <a href="/about" className="btn btn-outline-light me-3 mb-2">Learn More</a>
              <a href="/get-involved" className="btn btn-outline-light me-3 mb-2">Get Involved</a>
            </div>
          </div>

          <div className="col-lg-6 position-relative hero-images">
            <img src="/images/hero-football.jpeg" alt="Children playing football" className="hero-img hero-img-1" />
            <img src="/images/hero-education.jpeg" alt="Children learning in class" className="hero-img hero-img-2" />
          </div>

        </div>
      </div>
    </section>
  )
}
