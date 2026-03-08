import Image from 'next/image'
import Link from 'next/link'
import { FadeUp } from '@/components/animations/FadeUp'

export function StatsSection() {
  return (
    <section className="section" style={{ background: 'var(--off-white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="stats-section-grid two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2.5rem,5vw,5rem)', alignItems: 'center' }}>
          <FadeUp>
            <span className="accent-line" />
            <p className="label" style={{ marginBottom: '0.5rem' }}>About Us</p>
            <h2 className="heading-lg" style={{ marginBottom: '1.25rem' }}>Precision Made in Pakistan<br />since 2009</h2>
            <p className="body-lg" style={{ marginBottom: '2rem', maxWidth: '440px' }}>
              Vantum Surgical operates from ISO-certified facilities in Sialkot — the world's leading surgical instrument manufacturing cluster.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--border)' }}>
              {[{ value: '2009', label: 'Founded' }, { value: '5', label: 'Lines' }, { value: '30+', label: 'Countries' }].map((s, i) => (
                <div key={s.label} style={{ paddingTop: '1.25rem', paddingRight: '1rem', borderLeft: i > 0 ? '1px solid var(--border)' : 'none', paddingLeft: i > 0 ? '1rem' : 0 }}>
                  <div className="stat-number">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={150}>
            <div style={{ position: 'relative', aspectRatio: '4/5', background: 'var(--light)', overflow: 'hidden' }}>
              <Image src="/images/factory.jpg" alt="Manufacturing" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
