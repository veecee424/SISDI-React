import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'

export default function Donate(){
  return (
    <>
      <Navbar />
      <PageHero title="Support SISDI" subtitle="Your donation helps provide children with access to football, education, and life-changing opportunities." variant="donate" fadeClass="fade-in" />

      <main>
        <section className="donate-options section fade-in">
          <div className="container py-5">
            <div className="row g-4 align-items-stretch">
              <div className="col-md-6">
                <div className="donation-card .card-featured card h-100">
                  <div className="donation-card-body">
                    <h4>Bank Transfer</h4>
                    <p className="text-muted">Make a direct bank transfer using the details below.</p>
                    <div className="bank-details">
                      <p><strong>Account Name:</strong> Schools In Soccer Development Initiative</p>
                      <p><strong>Bank Name:</strong> United Bank for Africa (UBA)</p>
                      <p><strong>Account Number:</strong> 1029347244</p>
                      <p><strong>Currency:</strong> NGN</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="donation-card card .card-featured dark featured h-100">
                  <div className="donation-card-body">
                    <h4>Donate Online</h4>
                    <p className="text-light-muted">Secure, fast, and trusted online payments via Flutterwave.</p>
                    <p>Online donations allow us to respond quickly and scale our impact across schools and communities.</p>
                    <a href="#" className="disabled-link btn btn-donate mt-auto" aria-disabled="true" target="_blank" rel="noreferrer">Coming soon</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
