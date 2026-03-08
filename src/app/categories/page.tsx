import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CATEGORIES } from '@/data'
import { FadeUp } from '@/components/animations/FadeUp'
import { getCategories } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Product Categories',
  description: 'Browse our five product lines.',
}

export default async function CategoriesPage() {
  const apiCategories = await getCategories();
  const categories = apiCategories.length > 0 ? apiCategories.map((cat: any) => ({
    id: cat.slug,
    name: cat.name,
    slug: cat.slug,
    description: cat.description,
    heroImage: cat.hero_image_url || '/images/cta-bg.jpg',
    productCount: cat.product_count || 0,
    subcategories: cat.subcategories?.map((s: any) => s.name) || [],
  })) : CATEGORIES;

  return (
    <div>
      <div style={{ background: 'var(--off-white)', borderBottom: '1px solid var(--border)', padding: 'clamp(3rem,6vw,5rem) 0' }}>
        <div className="container">
          <FadeUp>
            <span className="accent-line" />
            <p className="label" style={{ marginBottom: '0.5rem' }}>Assortment</p>
            <h1 className="heading-xl">Our Products</h1>
            <p className="body-lg" style={{ marginTop: '1rem', maxWidth: '520px' }}>
              Five product lines. One standard of excellence. Every instrument ISO-certified and US-distributed.
            </p>
          </FadeUp>
        </div>
      </div>

      <div style={{ borderBottom: '1px solid var(--border)' }}>
        {categories.map((cat: any, i: number) => (
          <FadeUp key={cat.id} delay={i * 60}>
            <Link href={`/categories/${cat.slug}`} className="cat-list-item" style={{ display: 'block', textDecoration: 'none', borderBottom: '1px solid var(--border)', background: 'white' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                <Image src={cat.heroImage} alt={cat.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />
              </div>
              <div style={{ padding: 'clamp(1.5rem,4vw,2.5rem)' }}>
                <p className="label" style={{ marginBottom: '0.5rem' }}>{cat.productCount.toLocaleString()} Products</p>
                <h2 className="heading-md" style={{ marginBottom: '0.75rem' }}>{cat.name}</h2>
                <p className="body-md" style={{ marginBottom: '1.25rem' }}>{cat.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {cat.subcategories.slice(0, 4).map((s: string) => (
                    <span key={s} style={{ fontSize: '0.75rem', padding: '0.25rem 0.625rem', background: 'var(--light)', border: '1px solid var(--border)', color: 'var(--text-mid)', fontFamily: 'var(--font-tight)' }}>
                      {s}
                    </span>
                  ))}
                  {cat.subcategories.length > 4 && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontFamily: 'var(--font-tight)', padding: '0.25rem 0.375rem' }}>
                      +{cat.subcategories.length - 4} more
                    </span>
                  )}
                </div>
                <span className="link-arrow">View products <span className="arrow">→</span></span>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </div>
  )
}