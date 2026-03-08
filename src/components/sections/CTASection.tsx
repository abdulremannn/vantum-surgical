'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FadeUp } from '@/components/animations/FadeUp'

export function CTASection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '400px', display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/images/cta-bg.jpg"
          alt="Contact us"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,58,92,0.88)' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: 'clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,3.5rem)' }}>
        <FadeUp>
          <div style={{ maxWidth: '640px' }}>
            <span className="accent-line" style={{ background: 'rgba(255,255,255,0.4)' }} />
            <p className="label" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '0.75rem' }}>Get Started</p>
            <h2 className="heading-lg" style={{ color: 'white', marginBottom: '1.25rem' }}>
              Any questions?<br />We are happy to assist.
            </h2>
            <p className="body-lg" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', maxWidth: '460px' }}>
              Get a custom quote within 24 hours. Detailed pricing, lead times, and certification documentation included.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link href="/quote" className="btn btn-white">
                Request a Quote →
              </Link>
              <Link href="/catalog" className="btn"
                style={{ background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.35)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'white'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.35)'; (e.currentTarget as HTMLElement).style.background = 'transparent' }}
              >
                Download Catalog
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
