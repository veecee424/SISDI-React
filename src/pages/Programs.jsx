import React from 'react'
import PageHero from '../components/PageHero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Programs(){
  return (
      <>
        <Navbar />
        <PageHero title="Our Programs" subtitle="Structured initiatives that integrate football, education, and life skills to support holistic child development." variant="programs" fadeClass="fade-in" />

        <main>
          <section className="section-padding fade-in">
            <div className="container text-center">
              <p className="statement-text mx-auto" style={{maxWidth: '820px'}}>
                Each SISDI program is intentionally designed to create
                <span>lasting impact</span> on the pitch, in the classroom,
                and throughout life. Discover the programs we’ve delivered, and those shaping lives today.
              </p>
            </div>
          </section>

          <section className="section-padding bg-light fade-in">
            <div className="container">
              <div className="program-stack">
                <div className="program-item">
                  <button className="program-header">
                    <div className="program-header-left">
                      <i className="bi bi-lightbulb-fill"></i>
                      <h3 style={{color: '#FFD700'}}>Football Training Sessions in schools</h3>
                    </div>
                    <span className="program-toggle-icon"><i className="bi bi-plus-lg"></i></span>
                  </button>

                  <div className="program-content">
                    <div className="row align-items-center g-4">
                      <div className="col-md-6">
                        <img src="/images/program-football.jpeg" className="img-fluid rounded shadow-lg" alt="School football program" />
                      </div>
                      <div className="col-md-6 text-center" style={{color:'#064E3B'}}>
                        <p>We designed this program to change how young players are introduced to football. 
                        We deliver structured football training sessions, open to boys and girls, that 
                        combine theoretical classroom learning with practical on-field training.
                        <br /><br />
                        In the classroom, children are introduced to football concepts in simple, relatable ways, 
                        helping them build a mental understanding of the game before stepping onto the pitch.
                        <br /><br />
                        These sessions also create a safe space for questions, discussion, and learning; such that when
                        they finally step onto the pitch, they are no longer guessing... they are applying 
                        what they already understand through guided practical sessions.
                        <br /><br />
                        This approach ensures that every child, regardless of skill level, has the opportunity to 
                        participate, learn, and grow before any form of talent identification takes place.
                        <br /><br />
                        Our belief is simple: <strong>everyone deserves a chance to experience, learn, and enjoy the beautiful game,</strong>
                        before being evaluated.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="program-item">
                  <button className="program-header">
                    <div className="program-header-left">
                      <i className="bi bi-book-half"></i>
                      <h3 style={{color: '#FFD700'}}>Read, Learn, Play</h3>
                    </div>
                    <span className="program-toggle-icon"><i className="bi bi-plus-lg"></i></span>
                  </button>

                  <div className="program-content">
                    <div className="row align-items-center g-4">
                      <div className="col-md-6">
                        <img src="/images/program-life-skills.jpeg" className="img-fluid rounded shadow-lg" alt="Life skills program" />
                      </div>
                      <div className="col-md-6 text-center" style={{color:'#064E3B'}}>
                        <p>For many children, reading can feel like a chore, until it connects 
                        with something they love. Through this program, we brought books to 
                        life by placing football at the center of the story.
                        <br /><br />
                        It is designed to strengthen literacy skills while reinforcing the 
                        importance of education in a young player’s development journey.  By connecting their love 
                        for football with reading, this helps children develop 
                        a deeper interest in books, improve comprehension, and build confidence in learning.
                        <br /><br /> 
                        The initiative sends a clear message: <strong>education and football go hand in hand</strong>, and 
                        success on the pitch is strongest when supported by learning off it.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="program-item">
                  <button className="program-header">
                    <div className="program-header-left">
                      <i className="bi bi-people-fill"></i>
                      <h3 style={{color: '#FFD700'}}>Intra-School Football Competitions</h3>
                    </div>
                    <span className="program-toggle-icon"><i className="bi bi-plus-lg"></i></span>
                  </button>

                  <div className="program-content">
                    <div className="row align-items-center g-4">
                      <div className="col-md-6">
                        <img src="/images/program-community.jpeg" className="img-fluid rounded shadow-lg" alt="Community program" />
                      </div>
                      <div className="col-md-6 text-center" style={{color:'#064E3B'}}>
                        <p>The program provides young players with their first real experience 
                        of football in a competitive setting within their schools. It is an opportunity for them 
                        to test their skills, understand teamwork, and experience the discipline 
                        required in organized football competition. 
                        <br /><br />
                        Through these matches, players also learn how to manage emotions, 
                        respond to challenges, and apply lessons learned during training 
                        in real-game situations.
                        <br /><br />
                        Beyond the games, the program serves a deeper purpose; 
                        an opportunity to work closely with the schools to observe 
                        and <strong>identify promising talents for proper follow-up and guidance.</strong>
                        This collaborative approach ensures that talent development is not 
                        rushed or isolated, but nurtured responsibly alongside education.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="final-cta fade-in">
            <div className="container text-center text-white">
              <h2 className="cta-text" style={{color: '#064E3B'}}>
                Support Programs That <span>Make a Difference</span>
              </h2>
              <a href="/get-involved" className="btn btn-donate btn-lg" style={{backgroundColor: '#064E3B', color: '#ffd700'}}>Get Involved</a>
            </div>
          </section>
        </main>

        <Footer />
      </>
  )
}
