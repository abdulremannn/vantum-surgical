'use client'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG, CATEGORIES } from '@/data'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: 'var(--black)', color: 'white' }}>
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '2.5rem' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div>
            <Image src="/images/vantum-logo.svg" alt="Vantum Surgical" width={130} height={28} style={{ height: '20px', width: 'auto', filter: 'invert(1)', marginBottom: '1.25rem' }} />
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: '1.5rem', fontWeight: 300 }}>
              Precision surgical instruments. US-distributed. Trusted in 30+ countries.
            </p>
            <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.9 }}>
              <div>{SITE_CONFIG.address}</div>
              <a href={`mailto:${SITE_CONFIG.email}`} style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>{SITE_CONFIG.email}</a>
            </div>
          </div>

          {/* Products */}
          <div>
            <p style={{ fontSize: '0.65rem', fontFamily: 'var(--font-tight)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.125rem' }}>Products</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <Link href={`/categories/${cat.slug}`} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'white'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize: '0.65rem', fontFamily: 'var(--font-tight)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.125rem' }}>Company</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[{ l: 'About & Manufacturing', h: '/about' }, { l: 'Certifications', h: '/certifications' }, { l: 'Catalog Downloads', h: '/catalog' }, { l: 'How to Order', h: '/quote' }].map(i => (
                <li key={i.h}>
                  <Link href={i.h} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'white'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >{i.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: '0.65rem', fontFamily: 'var(--font-tight)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.125rem' }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '1.5rem' }}>
              {[{ label: 'USA', val: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` }, { label: 'WhatsApp', val: SITE_CONFIG.whatsapp, href: 'https://wa.me/923279974498' }, { label: 'Email', val: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` }].map(c => (
                <div key={c.label}>
                  <p style={{ fontSize: '0.6rem', fontFamily: 'var(--font-tight)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '0.1rem' }}>{c.label}</p>
                  <a href={c.href} style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>{c.val}</a>
                </div>
              ))}
            </div>
            <Link href="/quote" className="btn btn-white" style={{ fontSize: '0.75rem', padding: '0.5rem 1.125rem' }}>
              Request Quote →
            </Link>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)' }}>© {year} Vantum Surgical. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms & Conditions'].map(t => (
              <span key={t} style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
