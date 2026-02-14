import React from 'react'

export default function CTA({ fadeClass = '' }){
  return (
    <section className={`final-cta-section bg-brand section-overlap text-center text-white py-5 ${fadeClass}`}>
      <div className="container">
        <h2 className="page-title mb-3 cta-text">
          <span>Help Us Shape the Future</span><br />
          <span>One Child at a Time</span>
        </h2>

        <p className="lead mb-4">
          Your support gives children access to structured football development,
          quality education, and the confidence to succeed in life.
        </p>

        <div className="d-flex justify-content-center flex-wrap gap-3">
          <a href="/donate" className="btn btn-donate btn-lg">Donate Today</a>
          <a href="/get-involved" className="btn btn-outline-light btn-lg">Get Involved</a>
        </div>
      </div>
    </section>
  )
}
