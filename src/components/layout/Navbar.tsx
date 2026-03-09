'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '@/data'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])
  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : '' }, [menuOpen])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'white',
        borderBottom: '1px solid var(--border)',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div className="container">
          <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

            {/* Logo */}
            <Link href="/" aria-label="Vantum Surgical" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
              <Image
                src="/images/vantum-logo.svg"
                alt="Vantum Surgical"
                width={120}
                height={26}
                style={{ height: '22px', width: 'auto', display: 'block' }}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <ul style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }} className="hide-mobile">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={`nav-item ${pathname === item.href || pathname.startsWith(item.href + '/') ? 'active' : ''}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }} className="hide-mobile">
              <a href="tel:+13472722196" style={{ fontSize: '0.8125rem', color: 'var(--text-mid)', textDecoration: 'none' }}>
                +1 (347) 272-2196
              </a>
              <Link href="/quote" className="btn btn-primary" style={{ padding: '0.625rem 1.25rem', fontSize: '0.75rem' }}>
                Request Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="show-mobile"
              style={{ padding: '0.5rem', border: '1px solid var(--border)', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', zIndex: 40 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: '280px', background: 'white', borderLeft: '1px solid var(--border)', zIndex: 50, display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
                <Image src="/images/vantum-logo.svg" alt="Vantum Surgical" width={100} height={22} style={{ height: '18px', width: 'auto' }} />
                <button type="button" onClick={() => setMenuOpen(false)} style={{ padding: '0.375rem', border: '1px solid var(--border)', background: 'white', cursor: 'pointer', display: 'flex' }}>
                  <X size={16} />
                </button>
              </div>

              <nav style={{ flex: 1, overflowY: 'auto' }}>
                {NAV_ITEMS.map((item, i) => (
                  <motion.div key={item.href} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link href={item.href} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '1rem 1.5rem', borderBottom: '1px solid var(--border)',
                      textDecoration: 'none', fontFamily: 'var(--font-tight)', fontSize: '0.9375rem',
                      fontWeight: 500, color: pathname === item.href ? 'var(--accent)' : 'var(--text-dark)',
                      background: pathname === item.href ? 'var(--accent-light)' : 'transparent',
                    }}>
                      {item.label} <span style={{ color: 'var(--accent)', fontSize: '0.875rem' }}>→</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="tel:+13472722196" style={{ fontSize: '0.875rem', color: 'var(--text-mid)', textDecoration: 'none', textAlign: 'center' }}>+1 (347) 272-2196</a>
                <Link href="/quote" className="btn btn-primary" style={{ justifyContent: 'center', width: '100%' }}>Request a Quote</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}