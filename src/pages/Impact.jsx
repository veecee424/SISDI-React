import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'

export default function Impact(){
  return (
    <>
      <Navbar />
      <PageHero title="Our Impact" subtitle="Measuring success beyond the pitch; transforming lives through football, education, and opportunity." variant="impact" fadeClass="fade-in" />

      <main>
        <section className="impact-section bg-brand">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title statement-text">Our <span>Impact</span> So Far</h2>
              <p className="text-muted mt-2 section-lead">Every program, every child reached, and every school engaged reflects our 
              commitment to shaping brighter futures through education and football.</p>
            </div>

            <div className="row text-center g-4 mb-5">
              <div className="col-md-3">
                <div className="impact-stat stat-card p-4 rounded shadow-sm impact-bg">
                  <h2 className="gold-gradient-text glow counter stat-number" data-target="500">0</h2>
                  <p>Children Reached</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="impact-stat stat-card p-4 rounded shadow-sm impact-bg">
                  <h2 className="gold-gradient-text glow counter stat-number" data-target="10">0</h2>
                  <p>Partner Schools</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="impact-stat stat-card p-4 rounded shadow-sm impact-bg">
                  <h2 className="gold-gradient-text glow counter stat-number" data-target="3">0</h2>
                  <p>Communities Served</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="impact-stat stat-card p-4 rounded shadow-sm impact-bg">
                  <h2 className="gold-gradient-text glow counter stat-number" data-target="1">0</h2>
                  <p>Country so far</p>
                </div>
              </div>
            </div>

            <div className="container text-center">
              <a href="/programs" className="btn btn-donate btn-lg" style={{backgroundColor: '#FFF9DB', color: '#064E3B', margin: '0 auto'}}>See programs</a>
            </div>

          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-md-6">
                <h2 className="statement-text text-center"><span>Beyond the Numbers</span></h2>
                <p className="text-center">Our impact cannot be measured by statistics alone. 
                Behind every program is a child who has found confidence, 
                purpose, and hope. A child who no longer has to choose 
                between education and football. A child who is learning to 
                believe in a future filled with possibilities. <br /><br />Through our school-based 
                approach, we create safe spaces where dreams are nurtured responsibly, 
                talents are guided with care, and education remains the foundation. 
                We reach boys and girls who might otherwise be overlooked, 
                giving them structure, mentorship, and the reassurance that 
                their worth extends far beyond the pitch. <br /><br />Every story we touch is 
                a reminder that when children are supported holistically, communities grow stronger, 
                futures become brighter, and lives are changed for good.</p>
              </div>
              <div className="col-md-6">
                <img src="/images/story.jpeg" className="img-fluid .image-card rounded-4 shadow" alt="Children training" />
              </div>
            </div>
          </div>
        </section>

        <div className="section-separator">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,40 C120,80 320,0 520,20 720,40 920,80 1120,60 1320,40 1440,20 1440,20 L1440,0 L0,0 Z"></path>
          </svg>
        </div>

        <section className="impact-programs section fade-in">
          <div className="container py-2">
            <div className="text-center mb-3">
              <h2 className="section-title statement-text">How Our <span>Programs</span> Make a <span>Difference</span></h2>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="info-card card">
                  <h4 className="text-center">School-Based Football</h4>
                  <p className="text-center">Our programs are delivered directly within schools, 
                  ensuring children can pursue their passion for football 
                  without sacrificing their education. By aligning training 
                  schedules with academic learning, we help students develop 
                  discipline, focus, and time management—skills that strengthen 
                  both classroom performance and athletic growth.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="info-card card">
                  <h4 className="text-center">Career Pathways Beyond Football</h4>
                  <p className="text-center">SISDI goes beyond football by equipping children with practical, 
                  transferable skills that expose them to opportunities in multiple
                   career paths. Through mentorship, guidance, and education-focused 
                   initiatives, we help young players understand their strengths, explore 
                   alternative careers, and prepare for life beyond the pitch.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="info-card card">
                  <h4 className="text-center">Inclusive and Equal Opportunities</h4>
                  <p className="text-center">Our programs create access for both boys and girls, 
                  especially in underserved communities where opportunities 
                  are limited. By integrating football into schools, we remove 
                  financial and cultural barriers and promote equality, 
                  confidence, and community impact.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-dark text-white">
          <div className="container">
            <h2 className="text-center mb-5 statement-text"><span>Impact in Motion</span></h2>

            <button className="slider-btn slider-prev" aria-label="Previous">‹</button>
            <button className="slider-btn slider-next" aria-label="Next">›</button>

            <div className="impact-slider" id="impactSlider">
              <div className="impact-track">
                {['1.jpeg','17.jpeg','3.jpeg','29.jpeg','8.jpeg','22.jpeg','14.jpeg','35.jpeg','27.jpeg','10.jpeg','31.jpeg','6.jpeg','19.jpeg','40.jpeg','12.jpeg','24.jpeg','5.jpeg','33.jpeg','16.jpeg','2.jpeg','28.jpeg','21.jpeg','9.jpeg','36.jpeg','15.jpeg','4.jpeg','26.jpeg','11.jpeg','34.jpeg','18.jpeg','7.jpeg','25.jpeg','39.jpeg','13.jpeg','30.jpeg','20.jpeg','38.jpeg','23.jpeg','32.jpeg','37.jpeg'].map((f)=> (
                  <img key={f} src={`/images/${f}`} className="image-card" alt="" />
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="section-separator wave-lights"></div>

        <section className="section text-center">
          <div className="container">
            <h2 className="cta-text"><span>Be Part of the Impact</span></h2>
            <p className="lead mb-4 center-align-text">Join us in transforming young lives through education and football. 
            Your support helps create opportunity, confidence, and hope where it’s needed most.</p>
            <a href="/get-involved" className="btn btn-donate btn-lg" style={{backgroundColor: '#064E3B', color: '#ffd700'}}>Get Involved</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
