import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield } from 'lucide-react'
import { CERTIFICATIONS } from '@/data'
import { FadeUp, Stagger, StaggerItem } from '@/components/animations/FadeUp'

export const metadata: Metadata = {
  title: 'Certifications & Quality',
  description: 'ISO 13485, CE, FDA, and WHO GMP certifications. Our commitment to global quality standards.',
}

const STATUS = {
  active:        { label: 'Active',       color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0' },
  'in-progress': { label: 'In Progress',  color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
  pending:       { label: 'Pending',      color: '#d97706', bg: '#fffbeb', border: '#fde68a' },
}

const STANDARDS = [
  { title: 'Material Standards', items: ['ASTM A276 — Stainless Steel Bars', 'ASTM F899 — Surgical Instruments', 'ISO 7153 — Instrument Materials'] },
  { title: 'Manufacturing', items: ['ISO 9001:2015 — Quality Management', 'ISO 13485:2016 — Medical Devices', 'EN ISO 10993 — Biocompatibility'] },
  { title: 'Sterilization', items: ['ISO 11135 — EO Sterilization', 'ISO 17665 — Steam Sterilization', 'AAMI ST79 — Autoclave Standards'] },
]

export default function CertificationsPage() {
  return (
    <div>
      <div style={{ background: 'var(--off-white)', borderBottom: '1px solid var(--border)', padding: 'clamp(3rem,6vw,5rem) 0' }}>
        <div className="container">
          <FadeUp>
            <span className="accent-line" />
            <p className="label" style={{ marginBottom: '0.5rem' }}>Quality Assurance</p>
            <h1 className="heading-xl">Certified to<br />global standards.</h1>
            <p className="body-lg" style={{ marginTop: '1rem', maxWidth: '520px' }}>
              Every instrument meets or exceeds international regulatory requirements.
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="section">
        <div className="container">

          {/* Certifications */}
          <div style={{ marginBottom: '1.5rem' }}>
            <FadeUp>
              <h2 className="heading-lg">Our Certifications</h2>
            </FadeUp>
          </div>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20" stagger={80}>
            {CERTIFICATIONS.map((cert) => {
              const s = STATUS[cert.status]
              return (
                <StaggerItem key={cert.id}>
                  <div className="card" style={{ padding: '2.5rem', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ width: '52px', height: '52px', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Shield size={22} color="var(--accent)" />
                      </div>
                      <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-tight)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: s.color, background: s.bg, border: `1px solid ${s.border}`, padding: '0.3rem 0.75rem', whiteSpace: 'nowrap' }}>
                        {s.label}
                      </span>
                    </div>
                    <h3 className="heading-sm" style={{ marginBottom: '0.25rem' }}>{cert.name}</h3>
                    <p className="label" style={{ marginBottom: '1rem' }}>{cert.issuer}</p>
                    <p className="body-md">{cert.description}</p>
                    {cert.validUntil && (
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-faint)', marginTop: '1.25rem', fontFamily: 'var(--font-tight)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                        Valid until {cert.validUntil}
                      </p>
                    )}
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>

          {/* Standards */}
          <div style={{ marginBottom: '1.5rem' }}>
            <FadeUp>
              <h2 className="heading-lg">Applicable Standards</h2>
            </FadeUp>
          </div>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20" stagger={80}>
            {STANDARDS.map((sec) => (
              <StaggerItem key={sec.title}>
                <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', padding: '2rem', height: '100%' }}>
                  <p className="label" style={{ marginBottom: '1.25rem' }}>{sec.title}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {sec.items.map(item => (
                      <li key={item} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                        <span style={{ width: '4px', height: '4px', background: 'var(--accent)', borderRadius: '50%', flexShrink: 0, marginTop: '0.55rem' }} />
                        <span style={{ fontSize: '0.875rem', color: 'var(--text-mid)', fontFamily: 'var(--font-tight)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* CTA */}
          <FadeUp>
            <div style={{ background: 'var(--accent)', padding: '3.5rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }}>
              <div>
                <p className="label" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>Our Commitment</p>
                <h3 className="heading-md" style={{ color: 'white', marginBottom: '0.75rem' }}>Quality is not an option.<br />It is our baseline.</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem', maxWidth: '440px' }}>
                  Every instrument passes multi-stage quality control before leaving our facility.
                </p>
              </div>
              <Link href="/quote" className="btn btn-white" style={{ whiteSpace: 'nowrap' }}>
                Request a Sample →
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  )
}