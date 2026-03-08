import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    default: 'Vantum Surgical | Precision Instruments. Global Trust.',
    template: '%s | Vantum Surgical',
  },
  description: 'US-distributed surgical, dental, and hospital instruments manufactured to ISO standards. Trusted by hospitals and distributors in 30+ countries worldwide.',
  metadataBase: new URL('https://vantumsurgical.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: '#ffffff', color: '#2c2b28', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <Navbar />
        <main id="main-content" style={{ paddingTop: '64px' }}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
