import React from 'react'

export default function ImpactSection({ fadeClass = '' }){
  return (
    <section className={`impact-section bg-brand section-overlap py-5 ${fadeClass}`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title statement-text">Our <span>Impact</span> So Far</h2>
          <p className="text-muted mt-2">
            SISDI is transforming the lives of thousands of children across Africa by integrating 
            football in schools. Young players gain skills, confidence, 
            and guidance that prepare them for success both on the pitch and in life. 
            By creating safe, inclusive opportunities especially for girls and underserved 
            communities, we’re nurturing talent, empowering futures, and building stronger, 
            more resilient communities.
          </p>
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
      </div>
    </section>
  )
}
