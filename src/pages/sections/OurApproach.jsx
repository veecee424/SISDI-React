import React from 'react'

export default function OurApproach({ fadeClass='' }){
  return (
    <section className={`our-approach-section ${fadeClass}`}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title statement-text">Our <span>Approach</span></h2>
          <p className="section-lead">
            SISDI integrates football and education within school environments to
            nurture disciplined, confident, and well-rounded young individuals.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="approach-card fade-in">
              <div className="approach-number">1</div>
              <h5 className="approach-title">School-Based Programs</h5>
              <p className="approach-text">
                We work directly with schools to deliver structured football
                training programs within the academic environment.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="approach-card fade-in">
              <div className="approach-number">2</div>
              <h5 className="approach-title">Qualified Coaching</h5>
              <p className="approach-text">
                Our trained coaches focus on technical football skills, discipline,
                teamwork, and character development.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="approach-card fade-in">
              <div className="approach-number">3</div>
              <h5 className="approach-title">Career Exposure</h5>
              <p className="approach-text">
                We teach practical, real-world skills and provide guidance, 
                exposing young players to diverse career opportunities beyond the football field.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="approach-card fade-in">
              <div className="approach-number">4</div>
              <h5 className="approach-title">Long-Term Support</h5>
              <p className="approach-text">
                We provide pathways for continued development, ensuring children
                succeed both within and beyond football.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
