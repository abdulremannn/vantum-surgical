import { TESTIMONIALS } from '@/data'
import { FadeUp, Stagger, StaggerItem } from '@/components/animations/FadeUp'

export function TestimonialsSection() {
  return (
    <section className="section" style={{ background: 'var(--off-white)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ marginBottom: '3.5rem' }}>
          <FadeUp>
            <span className="accent-line" />
            <p className="label" style={{ marginBottom: '0.5rem' }}>Trusted By</p>
            <h2 className="heading-lg">Trusted by leading<br />surgeons worldwide.</h2>
          </FadeUp>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)' }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.id} style={{ background: 'white', padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-dark)', fontStyle: 'italic', flex: 1, marginBottom: '2rem' }}>
                "{t.quote}"
              </p>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{ width: '36px', height: '36px', background: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-tight)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em', flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-tight)', fontSize: '0.875rem', fontWeight: 500, color: 'var(--black)' }}>{t.author}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-faint)' }}>{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}