import React from 'react'

export default function Testimonial({ fadeClass = '' }){
  return (
    <section className={`testimonial-section py-5 ${fadeClass}`}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="testimonial-image-wrapper">
              <img src="/images/testimonial-child.jpeg" alt="SISDI participant" className="img-fluid testimonial-image" />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="testimonial-content">
              <span className="testimonial-label">SISDI STORY</span>
              <h3 className="section-title mt-3">“My parents like that I am learning football while in school.”</h3>
              <p className="mt-4">The student’s response reflects the heart of SISDI’s story that football and 
                education can truly go hand in hand. By learning football within the school environment, 
                children are able to grow their passion for the game while staying grounded in their studies. 
                This reinforces our belief that football should complement education, not compete with it, 
                and that when both are intentionally combined, children are better supported to thrive in 
                the classroom, on the pitch, and in life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
