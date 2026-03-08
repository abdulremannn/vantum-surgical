import Link from 'next/link'
import Image from 'next/image'
import { CATEGORIES } from '@/data'
import { FadeUp } from '@/components/animations/FadeUp'

export function CategoriesSection() {
  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ marginBottom: '2.5rem' }}>
          <FadeUp>
            <span className="accent-line" />
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <p className="label" style={{ marginBottom: '0.4rem' }}>Assortment</p>
                <h2 className="heading-lg">Our Product Lines</h2>
              </div>
              <Link href="/categories" className="link-arrow">View all <span className="arrow">→</span></Link>
            </div>
          </FadeUp>
        </div>

        {/* Top 2 large */}
        <div className="cat-grid-main" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
          {CATEGORIES.slice(0, 2).map((cat, i) => (
            <FadeUp key={cat.id} delay={i * 80}>
              <Link href={`/categories/${cat.slug}`} className="img-zoom" style={{ display: 'block', position: 'relative', aspectRatio: '4/3', textDecoration: 'none', overflow: 'hidden' }}>
                <Image src={cat.heroImage} alt={cat.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.05) 55%, transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                  <p className="label" style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '0.3rem' }}>{cat.productCount.toLocaleString()} Products</p>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.125rem,2vw,1.5rem)', fontWeight: 400, color: 'white', margin: 0, lineHeight: 1.2 }}>{cat.name}</h3>
                  <p className="link-arrow" style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.6rem', fontSize: '0.75rem' }}>Learn more <span className="arrow">→</span></p>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        {/* Bottom 3 smaller */}
        <div className="cat-grid-sub" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {CATEGORIES.slice(2).map((cat, i) => (
            <FadeUp key={cat.id} delay={(i + 2) * 80}>
              <Link href={`/categories/${cat.slug}`} className="img-zoom" style={{ display: 'block', position: 'relative', aspectRatio: '4/3', textDecoration: 'none', overflow: 'hidden' }}>
                <Image src={cat.heroImage} alt={cat.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.62) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.125rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem', fontWeight: 400, color: 'white', margin: 0 }}>{cat.name}</h3>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
