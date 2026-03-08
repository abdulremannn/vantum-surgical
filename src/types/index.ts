export interface Product {
  id: string
  name: string
  slug: string
  category: string
  subcategory?: string
  description: string
  material?: string
  sizes?: string[]
  certifications?: string[]
  images: string[]
  featured: boolean
  inStock: boolean
  catalogPage?: number
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  heroImage: string
  productCount: number
  icon: string
  subcategories: string[]
}

export interface Catalog {
  id: string
  name: string
  category: string
  coverImage: string
  pdfUrl: string
  pageCount: number
  updatedAt: string
  productCount: number
}

export interface Certification {
  id: string
  name: string
  issuer: string
  description: string
  logoUrl: string
  status: 'active' | 'pending' | 'in-progress'
  validUntil?: string
  documentUrl?: string
}

export interface Inquiry {
  id: string
  name: string
  company: string
  country: string
  email: string
  phone: string
  representative?: string
  products: string[]
  message: string
  createdAt: string
  status: 'new' | 'replied' | 'closed'
}

export interface QuoteFormData {
  name: string
  company: string
  country: string
  email: string
  phone: string
  representative?: string
  products: string[]
  message: string
}

export interface StatItem {
  value: string
  label: string
  suffix?: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}
