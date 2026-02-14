import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'

export default function Contact(){
  const apiBase = process.env.REACT_APP_API_BASE || ''
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('idle')
  const [alert, setAlert] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    setAlert(null)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000)

    try {
      const base = apiBase ? apiBase.replace(/\/$/, '') : ''
      const response = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal
      })

      const data = await response.json()
      if (!response.ok || !data.success) {
        throw new Error(data?.errors?.[0]?.msg || data?.error || 'Failed to send message')
      }

      setStatus('success')
      setAlert({ type: 'success', message: 'Message sent successfully!' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      const message = err.name === 'AbortError'
        ? 'Server timed out. Please try again later.'
        : err.message || 'Failed to send message.'
      setAlert({ type: 'danger', message })
    } finally {
      clearTimeout(timeoutId)
    }
  }

  return (
    <>
      <Navbar />
      <PageHero title="Contact SISDI" subtitle="We’d love to hear from you. Reach out and let’s make an impact together." variant="contact" fadeClass="fade-in" />

      <main>
        <section className="contact-options section fade-in contact-page">
          <div className="container py-5">
            <div className="row g-4 text-center">
              <div className="col-md-4">
                <div className="involve-card card simple">
                  <div className="icon-circle">✉️</div>
                  <h5>General Enquiry</h5>
                  <p>Questions about SISDI or our programs.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="involve-card card simple">
                  <div className="icon-circle">🤝</div>
                  <h5>Partnership Enquiry</h5>
                  <p>Organisations interested in collaborating.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="involve-card card simple">
                  <div className="icon-circle">⚽</div>
                  <h5>Sponsorship Enquiry</h5>
                  <p>Brands and supporters exploring sponsorship opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-soft">
          <div className="container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-6">
                <h2 className="section-title statement-text"><span>Get in Touch</span></h2>
                <p className="text-muted mb-4">Whether you have a question, want to partner with us, or are ready to volunteer, send us a message and we’ll get back to you!</p>

                <div className="contact-details mb-4">
                  <p><i className="bi bi-envelope-fill me-2 contact-icon"></i><strong>Email:</strong> <a className="ntd" href="mailto:hello@sisdi.org">schoolsinsoccer@gmail.com</a></p>
                  <p><i className="bi bi-telephone-fill me-2 contact-icon"></i><strong>Phone:</strong> <a className="ntd" href="tel:+2349122328676">+2349122328676</a></p>
                  <p><i className="bi bi-whatsapp me-2 contact-icon"></i><strong>Whatsapp:</strong> <a className="ntd" href="https://wa.me/2348054619954" target="_blank" rel="noreferrer">Chat with us on WhatsApp</a></p>
                </div>
              </div>

              <div className="col-lg-6">
                <h2 className="section-title statement-text"><span>Send Us a Message</span></h2>

                {alert && (
                  <div className={`alert alert-${alert.type}`}>{alert.message}</div>
                )}

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Full Name" name="name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control" placeholder="Email Address" name="email" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="col-md-12">
                      <input type="text" className="form-control" placeholder="Subject" name="subject" required value={formData.subject} onChange={handleChange} />
                    </div>
                    <div className="col-md-12">
                      <textarea className="form-control" name="message" rows="5" placeholder="Your message..." required value={formData.message} onChange={handleChange}></textarea>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button type="submit" className={`btn btn-donate btn-lg`} id="submitBtn" disabled={status === 'loading'}>
                      {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent ✓' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="contact-socials mt-4">
              <h5 className="mb-3">Connect with us</h5>
              <div className="social-icons">
                <a href="https://web.facebook.com/profile.php?id=61563594750242" aria-label="Facebook" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                <a href="https://x.com/schoolsinsoccer?s=20" aria-label="Twitter" target="_blank" rel="noreferrer"><i className="bi bi-twitter-x"></i></a>
                <a href="https://www.instagram.com/schoolsinsoccer_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/company/schools-in-soccer-development-initiative" aria-label="LinkedIn" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
