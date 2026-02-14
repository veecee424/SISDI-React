import React from 'react'

export default function GetInvolvedSection({ fadeClass = '' }){
  return (
    <section className={`get-involved-section ${fadeClass}`}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title statement-text"><span>Get Involved</span></h2>
          <p className="section-lead">
            There are many ways to support SISDI’s mission and help shape the future
            of children across Africa. Every action counts. Join us in shaping the next generation.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="involve-card fade-in">
              <h5 className="involve-title">Volunteer</h5>
              <p className="involve-text">Share your skills, time, and passion to support our programs in
                schools and communities.</p>
              <a href="/contact" className="btn btn-outline-primary mt-3">Become a Volunteer</a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="involve-card fade-in">
              <h5 className="involve-title">Partner With Us</h5>
              <p className="involve-text">Collaborate with SISDI as a school, organisation, or sponsor to
                expand our reach and impact.</p>
              <a href="/contact" className="btn btn-outline-primary mt-3">Become a Partner</a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="involve-card highlight fade-in">
              <h5 className="involve-title">Donate</h5>
              <p className="involve-text">Your financial support helps us deliver quality football and
                education programs to more children.</p>
              <a href="/donate" className="btn btn-donate mt-3">Donate Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
