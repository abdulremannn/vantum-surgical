import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Download, FileText } from 'lucide-react'
import { CATALOGS, CATEGORIES } from '@/data'
import { FadeUp, Stagger, StaggerItem } from '@/components/animations/FadeUp'
import { getCatalogs } from '@/lib/api'

export const metadata: Metadata = {
  title: 'Catalog Downloads',
  description: 'Download complete product catalogs for all Vantum Surgical product lines.',
}

export default async function CatalogPage() {
  const apiCatalogs = await getCatalogs()
  const catalogs = apiCatalogs.length > 0 ? apiCatalogs : CATALOGS.map(c => ({
    id: c.id,
    name: c.name,
    category_name: c.category,
    cover_image_url: c.coverImage,
    pdf_url: c.pdfUrl,
    page_count: c.pageCount,
    product_count: c.productCount,
    updated_at: c.updatedAt,
  }))

  return (
    <div>
      <div style={{ background: 'var(--off-white)', borderBottom: '1px solid var(--border)', padding: 'clamp(3rem,6vw,5rem) 0' }}>
        <div className="container">
          <FadeUp>
            <span className="accent-line" />
            <p className="label" style={{ marginBottom: '0.5rem' }}>Downloads</p>
            <h1 className="heading-xl">Product Catalogs</h1>
            <p className="body-lg" style={{ marginTop: '1rem', maxWidth: '520px' }}>
              Download our complete product catalogs. Each contains full listings, specifications, sizes, and ordering information.
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={80}>
            {catalogs.map((catalog: any) => {
              const categoryName = catalog.category_name || catalog.category || ''
              const coverImage = catalog.cover_image_url || catalog.coverImage
              const pdfUrl = catalog.pdf_url || catalog.pdfUrl
              const pageCount = catalog.page_count || catalog.pageCount || 0
              const productCount = catalog.product_count || catalog.productCount || 0
              const updatedAt = catalog.updated_at || catalog.updatedAt

              const matchedCat = CATEGORIES.find(c =>
                c.name.toLowerCase().includes(categoryName.split(' ')[0].toLowerCase())
              )

              return (
                <StaggerItem key={catalog.id}>
                  <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div className="img-zoom" style={{ position: 'relative', aspectRatio: '4/3', background: 'var(--light)' }}>
                      {coverImage && (
                        <Image src={coverImage} alt={catalog.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                      )}
                      <div style={{ position: 'absolute', top: '0.875rem', left: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.375rem', background: 'white', border: '1px solid var(--border)', padding: '0.3rem 0.625rem' }}>
                        <FileText size={11} color="var(--accent)" />
                        <span className="label" style={{ color: 'var(--accent)', fontSize: '0.6rem' }}>{pageCount} pages</span>
                      </div>
                    </div>

                    <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <p className="label" style={{ marginBottom: '0.4rem' }}>{categoryName}</p>
                      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', fontWeight: 400, color: 'var(--black)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                        {catalog.name}
                      </h2>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--text-faint)', marginBottom: 'auto', paddingBottom: '1.25rem' }}>
                        {productCount.toLocaleString()} products
                        {updatedAt && ` · Updated ${new Date(updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`}
                      </p>

                      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', display: 'flex', gap: '0.75rem' }}>
                        {pdfUrl ? (
                          <a href={pdfUrl} download className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.75rem', padding: '0.625rem 1rem' }}>
                            <Download size={13} /> Download PDF
                          </a>
                        ) : (
                          <span className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.75rem', padding: '0.625rem 1rem', opacity: 0.5 }}>
                            Coming Soon
                          </span>
                        )}
                        <Link href={`/categories/${matchedCat?.slug || ''}`}
                          className="btn btn-ghost" style={{ fontSize: '0.75rem', padding: '0.625rem 0.875rem' }}>
                          Browse →
                        </Link>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>

          <FadeUp delay={300}>
            <div style={{ marginTop: '5rem', padding: '3rem', background: 'var(--off-white)', border: '1px solid var(--border)', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
              <h3 className="heading-sm" style={{ marginBottom: '0.75rem' }}>Need a specific catalog?</h3>
              <p className="body-md" style={{ marginBottom: '1.5rem' }}>
                Can't find what you're looking for? Contact us for custom product lists, specification sheets, or pricing catalogs.
              </p>
              <Link href="/quote" className="btn btn-primary">Contact Us →</Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  )
}