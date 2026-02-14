import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'

export default function About(){
  return (
    <>
      <Navbar />
      <PageHero title="About SISDI" subtitle="Empowering children across Africa through school-based football and education." variant="about" fadeClass="fade-in" />

      <main>
        <section className="section bg-soft fade-in">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-md-3">
                <h2 className="section-title statement-text text-center">Our <span>Mission</span></h2>
                <p className="text-center">To provide every child with access to quality football development in schools, 
                integrating sport and education to nurture well-rounded individuals 
                who excel both on the field and in life.</p>
              </div>

              <div className="col-md-6">
                <img src="/images/about-mission.jpeg" className="img-fluid rounded .image-card shadow" alt="Mission image" />
              </div>

              <div className="col-md-3">
                <h2 className="section-title statement-text text-center">Our <span>Vision</span></h2>
                <p className="text-center">Our vision is to create a future where every child, regardless of background, 
                has access to quality football development opportunities in schools.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section fade-in">
          <div className="container">
            <h2 className="section-title text-center statement-text">Our <span>Story</span></h2>
            <p className="text-center">Across Africa, millions of children grow up with talent, 
            ambition, and dreams, but without the systems needed to 
            nurture them safely and holistically. For many, football 
            is seen as a distraction from education, while for others, 
            poverty makes both quality schooling and structured football 
            development feel out of reach, especially for girls, 
            who are frequently excluded altogether.
            <br /><br />
            Too often, young players are forced to choose between the 
            classroom and the football field, a choice no child should 
            have to make. Yet the reality is clear: football and 
            education are strongest when they work together. 
            <br /><br />
            We saw the consequences of these gaps. Children chasing football 
            dreams without guidance, dropping out of school, and losing 
            direction when those dreams don’t materialize. We also saw 
            untapped potential, young people who, with the right support, 
            could thrive in many areas of life.
            <br /><br />
            By integrating structured football training with learning, life skills, 
            and career exposure, we create a safe, inclusive environment where children 
            children are prepared for life both on and off the pitch. 
            This approach protects futures, expands opportunities for both boys and girls, 
            and builds stronger communities for generations to come.
            <br /><br />
            Our story is one of belief that when education and sport work hand in hand, 
            children don’t just dream of a better future; they are equipped to build it.</p>
          </div>
        </section>

        <section className="section bg-soft fade-in">
          <div className="container">
            <h2 className="section-title text-center statement-text"><span>What We Do</span></h2>
            <div className="row g-4 mt-4">
              <div className="col-md-4">
                <div className="info-card card">
                  <img src="/images/prog-football.jpeg" className="card-img-top .image-card" alt="Football programs" />
                  <div className="card-body">
                    <h4 className="card-title text-center">School-based Football Development</h4>
                    <p className="card-text text-center">We deliver structured football programs directly within schools, ensuring children can develop their 
                    talent in a safe environment while staying fully engaged in their education.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="info-card card">
                  <img src="/images/prog-education.jpeg" className="card-img-top .image-card" alt="Education support" />
                  <div className="card-body">
                    <h4 className="card-title text-center">Education, Life Skills, and Career Exposure</h4>
                    <p className="card-text text-center">Beyond football, we sensitize and equip young players with life skills, mentorship, and 
                    exposure to diverse career pathways, preparing them for success in any future they choose.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="info-card card">
                  <img src="/images/prog-life-skills.jpeg" className="card-img-top .image-card" alt="Life skills" />
                  <div className="card-body">
                    <h4 className="card-title text-center">Inclusive Access and Equal Opportunity</h4>
                    <p className="card-text text-center">We create opportunities for both boys and girls, especially in underserved communities, by removing 
                    financial and social barriers to participation and promoting equality through sport.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-soft fade-in">
          <div className="container" style={{maxWidth: '800px'}}>
            <h2 className="section-title text-center mb-4 statement-text">Our <span>Values</span></h2>
            <div className="values-accordion">
              <div className="value-item value-integrity">
                <button className="value-toggle">
                  <span className="value-label"><span className="value-icon">🎓</span> S — School-based football </span>
                  <span className="chevron">⌄</span>
                </button>
                <div className="value-content"><p>We place schools at the heart of our work, ensuring football 
                  supports education and creates structure, discipline, and balance in every child’s life.</p></div>
              </div>

              <div className="value-item value-community">
                <button className="value-toggle">
                  <span className="value-label"><span className="value-icon">🤝</span> I — Inclusion and Equality</span>
                  <span className="chevron">⌄</span>
                </button>
                <div className="value-content"><p>We champion equal access for boys and girls, removing social, cultural, 
                  and economic barriers to participation in football.</p></div>
              </div>

              <div className="value-item value-holistic">
                <button className="value-toggle">
                  <span className="value-label"><span className="value-icon">🧠</span> S — Skills for Life</span>
                  <span className="chevron">⌄</span>
                </button>
                <div className="value-content"><p>We equip children with practical life and career skills 
                  that prepare them for opportunities beyond football.</p></div>
              </div>

              <div className="value-item value-partnership">
                <button className="value-toggle">
                  <span className="value-label"><span className="value-icon">🧭</span> D — Discipline and Direction</span>
                  <span className="chevron">⌄</span>
                </button>
                <div className="value-content"><p>We instill discipline, purpose, and responsible decision-making, 
                  guiding young players toward positive futures.</p></div>
              </div>

              <div className="value-item value-impact">
                <button className="value-toggle">
                  <span className="value-label"><span className="value-icon">⚡</span> I — Impact Beyond the Pitch</span>
                  <span className="chevron">⌄</span>
                </button>
                <div className="value-content"><p>Our success is measured by transformed lives, stronger communities, 
                  and empowered futures... not just results on the field.</p></div>
              </div>

            </div>
          </div>
        </section>

        <div className="section-separator wave-green"></div>

        <section className="section section-overlap bg-brand final-cta-section text-center text-white fade-in ">
          <div className="container">
            <h2 className="section-title jtm cta-text"><span>Join the Movement</span></h2>
            <p className="lead mb-4">Support our mission or get involved today.</p>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <a href="/donate" className="btn btn-donate btn-lg">Donate Today</a>
              <a href="/get-involved" className="btn btn-outline-light btn-lg">Get Involved</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
