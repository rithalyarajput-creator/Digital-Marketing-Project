import HeroSection from '../components/sections/HeroSection'
import MarqueeSection from '../components/sections/MarqueeSection'
import StatsSection from '../components/sections/StatsSection'
import ServicesSection from '../components/sections/ServicesSection'
import AboutSection from '../components/sections/AboutSection'
import ProcessSection from '../components/sections/ProcessSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import CTABanner from '../components/sections/CTABanner'

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  )
}
