import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import WhyItMatters from './sections/WhyItMatters'
import OurApproach from './sections/OurApproach'
import ImpactSection from './sections/ImpactSection'
import GetInvolvedSection from './sections/GetInvolvedSection'
import Testimonial from '../components/Testimonial'
import CTA from '../components/CTA'

export default function Home(){
  return (
    <>
      <Navbar />
      <main>
        <Hero fadeClass="fade-in" />

        <WhyItMatters />

        <div className="section-separator">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,40 C120,80 320,0 520,20 720,40 920,80 1120,60 1320,40 1440,20 1440,20 L1440,0 L0,0 Z"></path>
          </svg>
        </div>

        <OurApproach fadeClass="fade-in" />

        <ImpactSection fadeClass="fade-in" />

        <Testimonial fadeClass="fade-in" />
        <div className="gradient-separator dark"></div>

        <GetInvolvedSection fadeClass="fade-in" />
        <div className="gradient-separator dark"></div>

        <CTA fadeClass="fade-in" />
      </main>
      <Footer />
    </>
  )
}
