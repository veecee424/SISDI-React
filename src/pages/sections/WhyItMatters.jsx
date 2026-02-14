import React from 'react'

export default function WhyItMatters(){
  return (
    <section className="light-band fade-in">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title statement-text">Why <span>This Matters</span></h2>
          <p className="text-muted mt-3 section-lead">
            Across Africa, millions of children grow up with talent, ambition, and 
            dreams, but without the systems and resources needed to nurture them safely and holistically.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="why-card h-100">
              <img src="/images/why-education.jpeg" alt="Access to football in schools" className="why-card-img" />
              <div className="why-card-body">
                <h4 className="text-center">Education and Football Grow Stronger Together</h4>
                <p className="text-center">By embedding football development within schools, SISDI ensures children 
                  do not have to choose between their education and their passion. This balanced 
                  approach keeps learners in school while using football to reinforce discipline, 
                  focus, and academic commitment.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="why-card h-100">
              <img src="/images/why-access.jpeg" alt="Education and discipline" className="why-card-img" />
              <div className="why-card-body">
                <h4 className="text-center">Securing Children’s Futures Beyond the Game</h4>
                <p className="text-center">SISDI sensitizes and equips young players with education, 
                  life skills, trainings, and guidance to succeed in different career paths, even 
                  beyond football, reducing the risk of lost potential and social vulnerability.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="why-card h-100">
              <img src="/images/why-community.jpeg" alt="Community development through sports" className="why-card-img" />
              <div className="why-card-body">
                <h4 className="text-center">Equal Access to Opportunity for Every Child</h4>
                <p className="text-center">School-based programs make football and education accessible 
                  regardless of gender or economic background. SISDI creates safe, 
                  inclusive spaces where both boys and girls can learn, play, and 
                  grow, especially in communities where such opportunities are rare.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
