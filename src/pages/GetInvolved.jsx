import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'

export default function GetInvolved(){
  return (
    <>
      <Navbar />
      <PageHero title="Get Involved" subtitle="Your involvement helps us provide children across Africa with access to football, education, and life-changing opportunities." variant="involved" fadeClass="fade-in" />

      <main>
        <section className="get-involved-options section fade-in">
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="involve-card card simple">
                  <div className="icon-circle">🤝</div>
                  <h4>Volunteer</h4>
                  <p>Share your time, skills, or expertise to support football training,
                  education programs, and mentorship for children.</p>
                  <a href="/contact" className="btn btn-outline-primary mt-3">Become a Volunteer</a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="involve-card card simple">
                  <div className="icon-circle">🏫</div>
                  <h4>Partner With Us</h4>
                  <p>Schools, organisations, and institutions can collaborate with SISDI
                  to expand access to structured football and education programs.</p>
                  <a href="/contact" className="btn btn-outline-primary mt-3">Partner With SISDI</a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="involve-card card simple">
                  <div className="icon-circle">⚽</div>
                  <h4>Sponsor a Program</h4>
                  <p>Sponsors help fund training equipment, school programs, and long-term
                  development initiatives across communities.</p>
                  <a href="/donate" className="btn btn-outline-primary mt-3">Sponsor a Program</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="get-involved-cta fade-in">
          <div className="container py-5 text-center">
            <h2 className="section-title statement-text"><span>Every Contribution Matters</span></h2>
            <p className="mt-3">Whether you volunteer, partner, or sponsor, your involvement directly
            impacts the lives of children both on and off the pitch.</p>
            <a href="/donate" className="btn btn-donate mt-4">Support SISDI</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
