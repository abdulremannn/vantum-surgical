import type { Category, Certification, Catalog, StatItem, NavItem } from '@/types'

export const SITE_CONFIG = {
  name: 'Vantum Surgical',
  tagline: 'Precision Instruments. Global Trust.',
  description: 'US-distributed surgical instruments manufactured to ISO standards in Pakistan. Trusted by hospitals and distributors in 30+ countries.',
  phone: '+1 (347) 272-2196',
  whatsapp: '+92 (333) 862-5991',
  email: 'sales@vantumsurgical.com',
  address: '39 Turner Palace, Brooklyn, New York',
  countries: 30,
  productCount: 5000,
  yearFounded: 2009,
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Products', href: '/categories' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Manufacturing', href: '/about' },
  { label: 'Contact', href: '/quote' },
]

export const CATEGORIES: Category[] = [
  {
    id: 'surgical-instruments',
    name: 'Surgical Instruments',
    slug: 'surgical-instruments',
    description: 'Precision-crafted stainless steel instruments for general and specialty surgery. Scissors, forceps, needle holders, retractors, clamps — sterilizable and built for daily surgical use.',
    heroImage: '/images/cat-surgical.jpg',
    productCount: 1200,
    icon: 'scalpel',
    subcategories: ['Scissors', 'Forceps', 'Needle Holders', 'Retractors', 'Clamps', 'Dissectors', 'Specula', 'Curettes'],
  },
  {
    id: 'dental-instruments',
    name: 'Dental Instruments',
    slug: 'dental-instruments',
    description: 'High-quality stainless steel dental instruments for clinical and practice use. Probes, mirrors, explorers, extraction forceps — engineered for precision dental procedures.',
    heroImage: '/images/cat-dental.jpg',
    productCount: 800,
    icon: 'tooth',
    subcategories: ['Probes', 'Mirrors', 'Forceps', 'Elevators', 'Scalers', 'Explorers', 'Chisels', 'Burnishers'],
  },
  {
    id: 'holloware',
    name: 'Holloware',
    slug: 'holloware',
    description: 'Premium stainless steel holloware for clinical environments. Trays, basins, bowls, kidney dishes, and sterilization containers designed for maximum durability and hygiene.',
    heroImage: '/images/cat-holloware.jpg',
    productCount: 350,
    icon: 'container',
    subcategories: ['Trays', 'Basins', 'Bowls', 'Kidney Dishes', 'Gallipots', 'Sterilization Trays', 'Instrument Stands'],
  },
  {
    id: 'hospital-furniture',
    name: 'Hospital Furniture',
    slug: 'hospital-furniture',
    description: 'Durable, functional hospital furniture designed for patient comfort and daily medical use. Beds, tables, trolleys, lockers — built to clinical standards.',
    heroImage: '/images/cat-furniture.jpg',
    productCount: 200,
    icon: 'bed',
    subcategories: ['Hospital Beds', 'Examination Tables', 'Mayo Stands', 'IV Stands', 'Trolleys', 'Lockers', 'Overbed Tables'],
  },
  {
    id: 'beauty-instruments',
    name: 'Beauty Instruments',
    slug: 'beauty-instruments',
    description: 'Professional-grade stainless steel beauty and aesthetics instruments. Cuticle tools, nail instruments, tweezers — precision-finished for professional use.',
    heroImage: '/images/cat-beauty.jpg',
    productCount: 450,
    icon: 'sparkles',
    subcategories: ['Nail Care', 'Cuticle Tools', 'Tweezers', 'Scissors', 'Ear & Nose', 'Blackhead Tools', 'Facial Tools'],
  },
]

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'iso-13485',
    name: 'ISO 13485',
    issuer: 'International Organization for Standardization',
    description: 'Medical devices quality management system. Demonstrates consistent ability to provide medical devices and related services that meet customer and regulatory requirements.',
    logoUrl: '/images/cert-iso.svg',
    status: 'active',
    validUntil: '2026-12-31',
  },
  {
    id: 'ce-marking',
    name: 'CE Marking',
    issuer: 'European Commission',
    description: 'Conformité Européenne certification for medical devices sold in the European Economic Area. Products meet EU safety, health, and environmental protection standards.',
    logoUrl: '/images/cert-ce.svg',
    status: 'active',
  },
  {
    id: 'fda-registration',
    name: 'FDA Registration',
    issuer: 'U.S. Food and Drug Administration',
    description: 'United States Food and Drug Administration facility registration. Enables legal distribution of medical devices in the US market.',
    logoUrl: '/images/cert-fda.svg',
    status: 'in-progress',
  },
  {
    id: 'who-gmp',
    name: 'WHO GMP',
    issuer: 'World Health Organization',
    description: 'Good Manufacturing Practice certification issued by the World Health Organization, ensuring consistent production and quality control standards.',
    logoUrl: '/images/cert-who.svg',
    status: 'active',
  },
]

export const CATALOGS: Catalog[] = [
  {
    id: 'surgical-2024',
    name: 'Surgical Instruments Catalog 2024',
    category: 'Surgical Instruments',
    coverImage: '/images/cat-surgical.jpg',
    pdfUrl: '/catalogs/vantum-surgical-instruments-2024.pdf',
    pageCount: 120,
    updatedAt: '2024-01-15',
    productCount: 1200,
  },
  {
    id: 'dental-2024',
    name: 'Dental Instruments Catalog 2024',
    category: 'Dental Instruments',
    coverImage: '/images/cat-dental.jpg',
    pdfUrl: '/catalogs/vantum-dental-instruments-2024.pdf',
    pageCount: 80,
    updatedAt: '2024-02-01',
    productCount: 800,
  },
  {
    id: 'holloware-2024',
    name: 'Holloware & Sterilization Catalog 2024',
    category: 'Holloware',
    coverImage: '/images/cat-holloware.jpg',
    pdfUrl: '/catalogs/vantum-holloware-2024.pdf',
    pageCount: 45,
    updatedAt: '2024-01-20',
    productCount: 350,
  },
  {
    id: 'furniture-2024',
    name: 'Hospital Furniture Catalog 2024',
    category: 'Hospital Furniture',
    coverImage: '/images/cat-furniture.jpg',
    pdfUrl: '/catalogs/vantum-furniture-2024.pdf',
    pageCount: 60,
    updatedAt: '2024-03-01',
    productCount: 200,
  },
  {
    id: 'beauty-2024',
    name: 'Beauty Instruments Catalog 2024',
    category: 'Beauty Instruments',
    coverImage: '/images/cat-beauty.jpg',
    pdfUrl: '/catalogs/vantum-beauty-2024.pdf',
    pageCount: 55,
    updatedAt: '2024-02-15',
    productCount: 450,
  },
]

export const STATS: StatItem[] = [
  { value: '30', label: 'Countries Served', suffix: '+' },
  { value: '5000', label: 'Products', suffix: '+' },
  { value: '15', label: 'Years Experience', suffix: '+' },
  { value: '24', label: 'Hour Quote Turnaround', suffix: 'hr' },
]

export const TESTIMONIALS = [
  {
    id: 1,
    quote: 'We switched to Vantum Surgical and immediately saw the quality difference. Fast shipping from their US warehouse made all the difference for our procurement cycle.',
    author: 'Dr. Rajan Mehta',
    role: 'Procurement Director',
    company: 'Leading Surgical Center, UAE',
    initials: 'RM',
  },
  {
    id: 2,
    quote: 'As a hospital buyer, consistency and reliability matter most. Vantum has never let us down — sterile packaging, durable tools, and responsive support every time.',
    author: 'Sarah Chen',
    role: 'Senior Buyer',
    company: 'Regional Medical Hospital, UK',
    initials: 'SC',
  },
  {
    id: 3,
    quote: 'Our surgeons specifically requested Vantum instruments after testing a sample batch. The precision and comfort speaks volumes about the manufacturing quality.',
    author: 'Marco Rossi',
    role: 'Operations Manager',
    company: 'Specialty Orthopedic Clinic, Italy',
    initials: 'MR',
  },
]

export const COUNTRIES = [
  'United States', 'United Kingdom', 'Germany', 'France', 'Italy', 'Spain',
  'Netherlands', 'Belgium', 'Switzerland', 'Austria', 'Sweden', 'Norway',
  'Denmark', 'Australia', 'Canada', 'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait',
  'Jordan', 'Egypt', 'South Africa', 'Nigeria', 'Kenya', 'India', 'Pakistan',
  'Bangladesh', 'Sri Lanka', 'Malaysia', 'Singapore', 'Indonesia', 'Philippines',
  'Japan', 'South Korea', 'China', 'Brazil', 'Argentina', 'Mexico', 'Colombia',
  'Other',
]
