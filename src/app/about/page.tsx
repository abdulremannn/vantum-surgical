import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FadeUp, Stagger, StaggerItem } from '@/components/animations/FadeUp'

export const metadata: Metadata = {
  title: 'About & Manufacturing',
  description: 'Vantum Surgical manufacturing capabilities, ISO-certified facilities in Sialkot Pakistan, and US distribution.',
}

const STEPS = [
  { n: '01', title: 'Material Selection', desc: 'Grade 304 and 316L surgical stainless steel sourced from certified mills. Every batch tested for composition and hardness.' },
  { n: '02', title: 'CNC Precision Machining', desc: 'Computer-controlled cutting and forming to within 0.01mm tolerances. Consistent geometry across every production run.' },
  { n: '03', title: 'Hand Finishing', desc: 'Skilled craftsmen refine edges, joints, and mechanisms by hand — the touch that machines cannot replicate.' },
  { n: '04', title: 'Electrolytic Polishing', desc: 'Electropolishing removes surface imperfections and creates a smooth finish that resists bacterial adhesion.' },
  { n: '05', title: 'Quality Control', desc: '100% visual inspection under magnification. Functional testing of all moving parts. Dimensional verification against spec sheets.' },
  { n: '06', title: 'Packaging & Sterilization', desc: 'Instruments packaged in validated sterile barrier systems. Autoclave-tested and CE-marked for direct clinical use.' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div style={{ position: 'relative', minHeight: '480px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1600&q=85" alt="Manufacturing" fill className="object-cover" sizes="100vw" priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '3.5rem', paddingTop: '8rem' }}>
          <FadeUp>
            <p className="label" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '0.5rem' }}>About Vantum Surgical</p>
            <h1 className="heading-xl" style={{ color: 'white' }}>Where precision<br />meets purpose.</h1>
          </FadeUp>
        </div>
      </div>

      {/* Story */}
      <div className="section" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem,6vw,6rem)', alignItems: 'center' }}>
            <FadeUp>
              <div style={{ position: 'relative', aspectRatio: '4/3', background: 'var(--light)', overflow: 'hidden' }}>
                <Image src="/images/factory.jpg" alt="Vantum Surgical facility" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <span className="accent-line" />
              <p className="label" style={{ marginBottom: '0.5rem' }}>Our Story</p>
              <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>Sialkot-crafted.<br />US-delivered.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p className="body-lg">Sialkot, Pakistan has supplied over 70% of global surgical instruments for more than a century. Vantum Surgical was built to bring this manufacturing excellence to the world with modern ISO compliance and US-based distribution.</p>
                <p className="body-md">We combine traditional Pakistani craftsmanship with CNC precision machinery and rigorous quality control — instruments trusted by hospitals and distributors in 30+ countries.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="section" style={{ background: 'var(--off-white)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <FadeUp>
            <div style={{ marginBottom: '3.5rem' }}>
              <span className="accent-line" />
              <p className="label" style={{ marginBottom: '0.5rem' }}>Process</p>
              <h2 className="heading-lg">How we build<br />every instrument.</h2>
            </div>
        </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)' }}>
            {STEPS.map((step, i) => (
              <FadeUp key={step.n} delay={i * 60}>
                <div style={{ background: 'var(--off-white)', padding: '2.5rem', height: '100%', transition: 'background 0.25s' }}
                >
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--border-med)', marginBottom: '1rem', lineHeight: 1 }}>{step.n}</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--black)', marginBottom: '0.75rem', fontWeight: 400 }}>{step.title}</h3>
                  <p className="body-md">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeUp>
            <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>Ready to source<br />precision instruments?</h2>
            <p className="body-lg" style={{ marginBottom: '2rem' }}>Get a quote within 24 hours.</p>
            <Link href="/quote" className="btn btn-primary">Request a Quote →</Link>
          </FadeUp>
        </div>
      </div>
    </div>
  )
}
