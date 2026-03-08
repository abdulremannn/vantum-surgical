import Image from 'next/image'
import Link from 'next/link'
import { FadeUp } from '@/components/animations/FadeUp'

const POINTS = [
  'Grade 304 & 316L surgical stainless steel',
  'CNC precision machining to 0.01mm tolerances',
  'Electrolytic polishing for sterility assurance',
  'ISO 13485 Quality Management System',
  'CE marked for European distribution',
  '100% autoclave and sterilization tested',
]

export function ManufacturingSection() {
  return (
    <section className="section" style={{ background: 'white', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="mfg-grid two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2.5rem,5vw,5rem)', alignItems: 'center' }}>
          <FadeUp>
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: 'var(--light)' }}>
              <Image src="/images/manufacturing.jpg" alt="Manufacturing" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
          </FadeUp>
          <FadeUp delay={120}>
            <span className="accent-line" />
            <p className="label" style={{ marginBottom: '0.5rem' }}>Manufacturing</p>
            <h2 className="heading-lg" style={{ marginBottom: '1.25rem' }}>Built to the<br />highest standard.</h2>
            <p className="body-lg" style={{ marginBottom: '1.75rem' }}>Sialkot, Pakistan supplies over 70% of the world's surgical instruments. Our ISO-certified facility combines generations of craft expertise with modern precision equipment.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {POINTS.map(p => (
                <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ width: '5px', height: '5px', background: 'var(--accent)', borderRadius: '50%', flexShrink: 0, marginTop: '0.55rem' }} />
                  <span className="body-md">{p}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="link-arrow">View manufacturing capabilities <span className="arrow">→</span></Link>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
