"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import type { Testimonial } from "@/lib/mock-data"

interface TestimonialCardProps {
  testimonial: Testimonial
  index?: number
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-6 lg:p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-4 mb-6">
        <Quote className="h-10 w-10 text-primary/20 flex-shrink-0" />
      </div>
      
      <p className="text-foreground/90 leading-relaxed mb-6 text-lg">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      <div className="flex items-center gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating
                ? "fill-primary text-primary"
                : "text-muted"
            }`}
          />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.role}
            {testimonial.company && `, ${testimonial.company}`}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
