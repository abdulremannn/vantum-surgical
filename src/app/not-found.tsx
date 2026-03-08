import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div style={{ padding: '4rem 1.5rem' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '5rem', color: 'var(--border)', lineHeight: 1, marginBottom: '1.5rem' }}>404</p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--black)', marginBottom: '0.75rem', fontWeight: 400 }}>Page Not Found</h1>
        <p style={{ color: 'var(--text-mid)', fontSize: '1rem', marginBottom: '2rem' }}>The page you're looking for doesn't exist.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary">Go Home →</Link>
          <Link href="/categories" className="btn btn-ghost">Browse Products</Link>
        </div>
      </div>
    </div>
  )
}
