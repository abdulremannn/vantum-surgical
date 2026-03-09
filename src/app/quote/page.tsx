'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, CheckCircle2, Mail, Phone } from 'lucide-react'
import { CATEGORIES, COUNTRIES, SITE_CONFIG } from '@/data'
import { FadeUp } from '@/components/animations/FadeUp'

const schema = z.object({
  name:     z.string().min(2, 'Name required'),
  company:  z.string().min(2, 'Company required'),
  country:  z.string().min(1, 'Select a country'),
  email:    z.string().email('Valid email required'),
  phone:    z.string().min(7, 'Phone required'),
  products: z.array(z.string()).min(1, 'Select at least one product line'),
  message:  z.string().min(10, 'Please describe your requirements'),
})
type Form = z.infer<typeof schema>

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: { products: [] },
  })

  const selected = watch('products') || []
  const toggle = (slug: string) => {
    const next = selected.includes(slug) ? selected.filter(s => s !== slug) : [...selected, slug]
    setValue('products', next, { shouldValidate: true })
  }

  const onSubmit = async (data: Form) => {
  setSubmitting(true)
  setError(null)
  try {
    const res = await fetch('https://web-production-10386.up.railway.app/api/quotes/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        full_name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        country: data.country,
        product_lines: data.products,
        message: data.message,
      }),
    })
    // Accept both 200 and 201 status codes (Django REST returns 201 for POST)
    if (res.ok || res.status === 201) {
      setSubmitted(true)
    } else {
      throw new Error('Request failed')
    }
  } catch (err) {
    console.error('Quote submission error:', err)
    setError('Something went wrong. Please email us directly at sales@vantumsurgical.com')
  } finally {
    setSubmitting(false)
  }
}

  if (submitted) return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
        <CheckCircle2 size={40} color="var(--accent)" style={{ margin: '0 auto 1.5rem' }} />
        <h1 className="heading-lg" style={{ marginBottom: '0.75rem' }}>Quote Request Received</h1>
        <p className="body-lg">Our team will respond within 24 hours with pricing and lead times.</p>
      </div>
    </div>
  )

  return (
    <div>
      <div style={{ background: 'var(--off-white)', borderBottom: '1px solid var(--border)', padding: 'clamp(3rem,6vw,5rem) 0' }}>
        <div className="container">
          <FadeUp>
            <span className="accent-line" />
            <p className="label" style={{ marginBottom: '0.5rem' }}>Contact Form</p>
            <h1 className="heading-xl">Request a Quote</h1>
            <p className="body-lg" style={{ marginTop: '1rem', maxWidth: '480px' }}>Custom pricing and lead times within 24 hours.</p>
          </FadeUp>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="quote-layout">

            {/* Sidebar */}
            <FadeUp>
              <div className="quote-sidebar">
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--black)', marginBottom: '1.5rem', fontWeight: 400 }}>Contact Details</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                  {[
                    { icon: Mail, label: 'Email', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                    { icon: Phone, label: 'USA', value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
                    { icon: Phone, label: 'WhatsApp', value: SITE_CONFIG.whatsapp, href: 'https://wa.me/923338625991' },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                      <item.icon size={14} color="var(--accent)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                      <div>
                        <p className="label" style={{ marginBottom: '0.15rem', fontSize: '0.6rem' }}>{item.label}</p>
                        <a href={item.href} style={{ fontSize: '0.875rem', color: 'var(--text-mid)', textDecoration: 'none' }}>{item.value}</a>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ background: 'var(--off-white)', border: '1px solid var(--border)', padding: '1.5rem' }}>
                  <p className="label" style={{ marginBottom: '0.5rem' }}>Response Time</p>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--black)', lineHeight: 1 }}>24hr</div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-faint)', marginTop: '0.5rem' }}>All quote requests receive a detailed response within 24 business hours.</p>
                </div>
              </div>
            </FadeUp>

            {/* Form */}
            <FadeUp delay={120}>
              <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                {/* Products */}
                <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                  <legend className="input-label" style={{ marginBottom: '0.875rem' }}>Product Lines of Interest *</legend>
                  <div className="product-grid">
                    {CATEGORIES.map(cat => {
                      const on = selected.includes(cat.slug)
                      return (
                        <button type="button" key={cat.slug} onClick={() => toggle(cat.slug)}
                          style={{
                            padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.8125rem',
                            fontFamily: 'var(--font-tight)', fontWeight: 500,
                            border: `1px solid ${on ? 'var(--accent)' : 'var(--border)'}`,
                            background: on ? 'var(--accent-light)' : 'white',
                            color: on ? 'var(--accent)' : 'var(--text-mid)',
                            cursor: 'pointer', transition: 'all 0.2s',
                          }}
                        >{cat.name}</button>
                      )
                    })}
                  </div>
                  {errors.products && <p style={{ fontSize: '0.75rem', color: '#c0392b', marginTop: '0.375rem' }}>{errors.products.message}</p>}
                </fieldset>

                {/* Fields */}
                <div className="form-grid">
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Dr. John Smith', key: 'name' },
                    { id: 'company', label: 'Company / Organisation', type: 'text', placeholder: 'General Hospital', key: 'company' },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'procurement@hospital.com', key: 'email' },
                    { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 000-0000', key: 'phone' },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="input-label">{f.label} *</label>
                      <input id={f.id} type={f.type} placeholder={f.placeholder}
                        {...register(f.key as any)}
                        className="input"
                        style={{ borderColor: (errors as any)[f.key] ? '#c0392b' : undefined }}
                      />
                      {(errors as any)[f.key] && <p style={{ fontSize: '0.75rem', color: '#c0392b', marginTop: '0.25rem' }}>{(errors as any)[f.key]?.message}</p>}
                    </div>
                  ))}

                  <div className="form-full">
                    <label htmlFor="country" className="input-label">Country *</label>
                    <select id="country" {...register('country')} className="input" style={{ borderColor: errors.country ? '#c0392b' : undefined }}>
                      <option value="">Select your country...</option>
                      {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    {errors.country && <p style={{ fontSize: '0.75rem', color: '#c0392b', marginTop: '0.25rem' }}>{errors.country.message}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="input-label">Requirements & Message *</label>
                  <textarea id="message" rows={5} {...register('message')} className="input"
                    style={{ resize: 'none', borderColor: errors.message ? '#c0392b' : undefined }}
                    placeholder="Describe the products you need, quantities, specific certifications required..."
                  />
                  {errors.message && <p style={{ fontSize: '0.75rem', color: '#c0392b', marginTop: '0.25rem' }}>{errors.message.message}</p>}
                </div>

                {error && (
                  <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '0.875rem 1rem', fontSize: '0.875rem', color: '#dc2626' }}>{error}</div>
                )}

                <button type="submit" disabled={submitting} className="btn btn-primary"
                  style={{ alignSelf: 'flex-start', minWidth: '200px', justifyContent: 'center', opacity: submitting ? 0.6 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}>
                  {submitting ? <><Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} /> Submitting...</> : 'Submit Quote Request →'}
                </button>

                <p style={{ fontSize: '0.75rem', color: 'var(--text-faint)' }}>
                  By submitting you agree to our privacy policy. We never share your information.
                </p>
              </form>
            </FadeUp>
          </div>
        </div>
      </div>
    </div>
  )
}