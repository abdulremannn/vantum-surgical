const ITEMS = [
  'ISO 13485 Certified', 'CE Marked', 'WHO GMP Compliant',
  'Grade 304 & 316L Steel', 'US Distribution Hub', 'Autoclave Safe',
  'Sialkot Manufacturing', '24hr Quote Response', '30+ Countries Served',
  '5,000+ Products', 'FDA Registration Underway',
]

export function TrustStrip() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div style={{ background: 'var(--off-white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden', padding: '0.875rem 0', position: 'relative' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '5rem', background: 'linear-gradient(to right, var(--off-white), transparent)', zIndex: 1 }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '5rem', background: 'linear-gradient(to left, var(--off-white), transparent)', zIndex: 1 }} />
      <div className="marquee-track" aria-hidden="true">
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', padding: '0 1.5rem' }}>
            <span className="label" style={{ color: 'var(--text-mid)', whiteSpace: 'nowrap' }}>{item}</span>
            <span style={{ width: '3px', height: '3px', background: 'var(--border-med)', borderRadius: '50%', flexShrink: 0 }} />
          </span>
        ))}
      </div>
    </div>
  )
}
