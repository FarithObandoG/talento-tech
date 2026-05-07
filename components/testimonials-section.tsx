"use client"

import { SectionHeader } from "@/components/section-header"
import { TestimonialCard } from "@/components/testimonial-card"
import { testimonials } from "@/lib/mock-data"

export function TestimonialsSection() {
  const displayTestimonials = testimonials.slice(0, 3)

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimonios"
          title="Historias de transformación"
          description="Personas reales compartiendo cómo estas experiencias cambiaron su perspectiva de vida."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
