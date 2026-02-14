import React from 'react'

export default function PageHero({ title, subtitle, variant='default', fadeClass='' }){
  return (
    <section className={`page-hero hero-${variant} ${fadeClass}`}>
      <div className="container text-center text-white">
        <h1 className="page-title mb-3">{title}</h1>
        {subtitle && <p className="lead">{subtitle}</p>}
      </div>
    </section>
  )
}
