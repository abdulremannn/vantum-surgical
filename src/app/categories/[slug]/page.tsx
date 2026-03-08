import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Download, ArrowLeft, ArrowRight } from 'lucide-react'
import { CATEGORIES, CATALOGS } from '@/data'
import { FadeUp } from '@/components/animations/FadeUp'
import { getCategory, getProducts, getCatalogs } from '@/lib/api'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = CATEGORIES.find((c) => c.slug === params.slug)
  if (!cat) return {}
  return { title: cat.name, description: cat.description }
}

export default async function CategoryPage({ params }: Props) {
  // Try real API first, fall back to static data
  const apiCat = await getCategory(params.slug)
  const staticCat = CATEGORIES.find((c) => c.slug === params.slug)
  if (!apiCat && !staticCat) notFound()

  const cat = apiCat ? {
    name: apiCat.name,
    slug: apiCat.slug,
    description: apiCat.description,
    heroImage: apiCat.hero_image_url || staticCat?.heroImage || '/images/cta-bg.jpg',
    productCount: apiCat.product_count || 0,
    subcategories: apiCat.subcategories?.map((s: any) => ({ id: s.id, name: s.name })) || [],
  } : {
    name: staticCat!.name,
    slug: staticCat!.slug,
    description: staticCat!.description,
    heroImage: staticCat!.heroImage,
    productCount: staticCat!.productCount,
    subcategories: staticCat!.subcategories.map((s, i) => ({ id: i, name: s })),
  }

  // Get real products
  const apiProducts = await getProducts({ category: params.slug })

  // Get catalogs
  const apiCatalogs = await getCatalogs()
  const catalog = apiCatalogs.find((c: any) =>
    !c.category_name || c.category_name?.toLowerCase().includes(cat.name.split(' ')[0].toLowerCase())
  ) || CATALOGS.find(c => c.category.toLowerCase().includes(cat.name.split(' ')[0].toLowerCase()))

  return (
    <div style={{ background: 'white' }}>

      {/* ── HERO ── */}
      <div style={{ position: 'relative', height: 'clamp(300px, 42vw, 520px)', overflow: 'hidden' }}>
        <Image src={cat.heroImage} alt={cat.name} fill priority className="object-cover" sizes="100vw" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,12,20,0.75) 0%, rgba(6,12,20,0.3) 50%, transparent 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <div className="container" style={{ paddingBottom: '2.5rem' }}>
            <Link href="/categories" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: 'rgba(255,255,255,0.65)', fontSize: '0.8125rem', textDecoration: 'none', fontFamily: 'var(--font-tight)', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              <ArrowLeft size={13} /> All Categories
            </Link>
            <p className="label" style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '0.4rem' }}>{apiProducts.length || cat.productCount} Products</p>
            <h1 className="heading-lg" style={{ color: 'white', margin: 0 }}>{cat.name}</h1>
          </div>
        </div>
      </div>

      {/* ── DESC ── */}
      <div style={{ borderBottom: '1px solid var(--border)', background: 'var(--off-white)' }}>
        <div className="container" style={{ padding: '2rem clamp(1.25rem,5vw,3.5rem)' }}>
          <p className="body-md" style={{ maxWidth: '680px', margin: 0 }}>{cat.description}</p>
        </div>
      </div>

      {/* ── MAIN ── */}
      <div className="container" style={{ padding: 'clamp(2rem,4vw,3.5rem) clamp(1.25rem,5vw,3.5rem)' }}>
        <div className="cat-detail-grid" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 'clamp(2rem,4vw,3.5rem)', alignItems: 'start', minWidth: 0 }}>

          {/* ── SIDEBAR ── */}
          <aside style={{ position: 'sticky', top: '88px' }}>
            <div style={{ marginBottom: '2rem' }}>
              <p className="label" style={{ marginBottom: '0.875rem', color: 'var(--text-faint)' }}>Filter by Type</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '2px' }}>
                  <Link href={`/categories/${cat.slug}`} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '0.5rem 0.75rem', fontSize: '0.875rem', fontFamily: 'var(--font-tight)', fontWeight: 500, background: 'var(--accent)', color: 'white', textDecoration: 'none' }}>
                    All Products
                  </Link>
                </li>
                {cat.subcategories.map((sub: any) => (
                  <li key={sub.id} style={{ marginBottom: '1px' }}>
                    <Link href={`/categories/${cat.slug}?sub=${sub.id}`} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '0.5rem 0.75rem', fontSize: '0.875rem', fontFamily: 'var(--font-tight)', color: 'var(--text-mid)', textDecoration: 'none', background: 'transparent', transition: 'background 0.15s' }}>
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ height: '1px', background: 'var(--border)', marginBottom: '2rem' }} />

            {/* Catalog */}
            {catalog && (
              <div style={{ marginBottom: '1.5rem' }}>
                <p className="label" style={{ marginBottom: '0.875rem', color: 'var(--text-faint)' }}>Catalog</p>
                <div style={{ border: '1px solid var(--border)', overflow: 'hidden' }}>
                  {(catalog.cover_image_url || catalog.coverImage) && (
                    <div style={{ position: 'relative', aspectRatio: '3/4', background: 'var(--light)' }}>
                      <Image src={catalog.cover_image_url || catalog.coverImage} alt={catalog.name} fill className="object-cover" sizes="220px" />
                    </div>
                  )}
                  <div style={{ padding: '0.875rem' }}>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-faint)', marginBottom: '0.625rem', fontFamily: 'var(--font-tight)' }}>
                      {catalog.page_count || catalog.pageCount} pages · {(catalog.product_count || catalog.productCount || 0).toLocaleString()} products
                    </p>
                    <a href={catalog.pdf_url || catalog.pdfUrl} download className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', fontSize: '0.75rem', padding: '0.5rem' }}>
                      <Download size={12} /> Download PDF
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Quote CTA */}
            <div style={{ background: 'var(--accent)', padding: '1.25rem' }}>
              <p style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-serif)', color: 'white', marginBottom: '0.375rem', fontStyle: 'italic' }}>Need a quote?</p>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)', marginBottom: '1rem', fontFamily: 'var(--font-sans)' }}>Pricing within 24 hours.</p>
              <Link href="/quote" className="btn btn-white" style={{ width: '100%', justifyContent: 'center', fontSize: '0.75rem', padding: '0.5rem' }}>
                Request Quote →
              </Link>
            </div>
          </aside>

          {/* ── PRODUCTS ── */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--black)', margin: 0, fontWeight: 400 }}>{cat.name}</h2>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-faint)', marginTop: '0.2rem' }}>
                  {apiProducts.length > 0 ? `${apiProducts.length} products` : 'No products yet'}
                </p>
              </div>
            </div>

            {apiProducts.length > 0 ? (
              <div className="product-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)', marginBottom: '2.5rem' }}>
                {apiProducts.map((product: any, i: number) => (
                  <FadeUp key={product.id} delay={i * 40}>
                    <div style={{ background: 'white', display: 'flex', flexDirection: 'column', transition: 'all 0.25s' }} className="product-card">
                      <div style={{ position: 'relative', aspectRatio: '1/1', background: 'var(--off-white)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {product.image_url ? (
                          <Image src={product.image_url} alt={product.name} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
                        ) : (
                          <div style={{ textAlign: 'center' }}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ opacity: 0.15, margin: '0 auto 0.5rem' }}>
                              <rect x="1" y="1" width="38" height="38" stroke="#1a3a5c" strokeWidth="1"/>
                              <line x1="10" y1="20" x2="30" y2="20" stroke="#1a3a5c" strokeWidth="1.5"/>
                              <line x1="20" y1="10" x2="20" y2="30" stroke="#1a3a5c" strokeWidth="1.5"/>
                            </svg>
                            <p style={{ fontSize: '0.65rem', color: 'var(--text-faint)', fontFamily: 'var(--font-tight)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Photo</p>
                          </div>
                        )}
                        <div className="product-hover" style={{ position: 'absolute', inset: 0, background: 'rgba(26,58,92,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.25s' }}>
                          <Link href="/quote" className="btn btn-white" style={{ fontSize: '0.7rem', padding: '0.5rem 1rem' }}>Request Quote</Link>
                        </div>
                      </div>
                      <div style={{ padding: '0.875rem', flex: 1, borderTop: '1px solid var(--border)' }}>
                        <p style={{ fontFamily: 'var(--font-tight)', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--black)', marginBottom: '0.25rem', lineHeight: 1.3 }}>
                          {product.name}
                        </p>
                        {product.sku && <p style={{ fontSize: '0.7rem', color: 'var(--text-faint)', marginBottom: '0.25rem', fontFamily: 'var(--font-tight)' }}>{product.sku}</p>}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-tight)', color: 'var(--accent)', letterSpacing: '0.04em' }}>{product.grade_display}</span>
                          <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-tight)', color: product.status === 'in_stock' ? '#16a34a' : '#d97706', background: product.status === 'in_stock' ? '#f0fdf4' : '#fffbeb', padding: '0.15rem 0.4rem' }}>
                            {product.status_display}
                          </span>
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--off-white)', marginBottom: '2.5rem' }}>
                <p style={{ color: 'var(--text-faint)', fontSize: '0.875rem' }}>No products in this category yet. Add them via the admin panel.</p>
              </div>
            )}

            {/* Bottom CTA */}
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', padding: 'clamp(1.5rem,3vw,2.5rem)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--black)', marginBottom: '0.375rem', fontWeight: 400 }}>
                  Looking for something specific?
                </h3>
                <p className="body-sm">Contact us for a complete product list with pricing.</p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {catalog && (
                  <a href={catalog.pdf_url || catalog.pdfUrl} download className="btn btn-outline" style={{ fontSize: '0.8125rem' }}>
                    <Download size={13} /> Full Catalog
                  </a>
                )}
                <Link href="/quote" className="btn btn-primary" style={{ fontSize: '0.8125rem' }}>
                  Request Quote <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .product-card:hover .product-hover { opacity: 1 !important; }
        .product-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.08); z-index: 1; }
      `}</style>
    </div>
  )
}