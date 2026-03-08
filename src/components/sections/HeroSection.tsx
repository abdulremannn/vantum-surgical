'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 60); return () => clearTimeout(t) }, [])

  const fade = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'none' : 'translateY(20px)',
    transition: `opacity 0.9s ease ${delay}ms, transform 0.9s ease ${delay}ms`,
  })

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image src="/images/cta-bg.jpg" alt="Surgical instruments" fill priority className="object-cover object-center" sizes="100vw" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(8,14,22,0.78) 0%, rgba(8,14,22,0.5) 55%, rgba(8,14,22,0.15) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,14,22,0.65) 0%, transparent 45%)' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: 'clamp(3rem,6vw,5rem)', paddingTop: '5rem' }}>
        <div style={{ maxWidth: '600px' }}>
          <p className="label" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.25rem', ...fade(100) }}>
            ISO Certified · US Distributed · 30+ Countries
          </p>
          <h1 className="heading-xl" style={{ color: 'white', marginBottom: '1.25rem', ...fade(220) }}>
            Passion &amp; Expertise<br />for Precision<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.75)' }}>Surgical Instruments</em>
          </h1>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '460px', ...fade(360) }}>
            World-class instruments manufactured in Pakistan, distributed from the United States. Trusted by hospitals and distributors across 30+ countries.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', ...fade(480) }}>
            <Link href="/categories" className="btn btn-white">Explore Products →</Link>
            <Link href="/quote" className="btn" style={{ background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.97)', borderTop: '1px solid var(--border)', opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease 700ms' }}>
        <div className="container">
          <div className="hero-stats-bar" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {[
              { value: '2009', label: 'Founded' },
              { value: '5', label: 'Product Lines' },
              { value: '5,000+', label: 'Products' },
              { value: '30+', label: 'Countries' },
            ].map((s, i) => (
              <div key={s.label} style={{ padding: '1.375rem 0', borderLeft: i > 0 ? '1px solid var(--border)' : 'none', paddingLeft: i > 0 ? '1.5rem' : 0 }}>
                <div className="stat-number">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
