import { HeroSection } from '@/components/sections/HeroSection'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { CategoriesSection } from '@/components/sections/CategoriesSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ManufacturingSection } from '@/components/sections/ManufacturingSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <CategoriesSection />
      <StatsSection />
      <ManufacturingSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
