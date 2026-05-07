import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { BenefitsSection } from "@/components/benefits-section"
import { FeaturedExperiences } from "@/components/featured-experiences"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <FeaturedExperiences />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
