"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Clock, Star, Sparkles, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Experience } from "@/lib/mock-data"

interface ExperienceCardProps {
  experience: Experience
  index?: number
}

export function ExperienceCard({ experience, index = 0 }: ExperienceCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/experiencias/${experience.slug}`}>
        <motion.article
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={experience.image}
              alt={experience.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
            
            {/* Category Badge */}
            <Badge 
              className="absolute top-4 left-4 bg-background/90 text-foreground backdrop-blur-sm border-0"
            >
              {experience.category.name}
            </Badge>

            {/* Featured Badge */}
            {experience.featured && (
              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground border-0">
                <Sparkles className="h-3 w-3 mr-1" />
                Destacado
              </Badge>
            )}

            {/* Relaxation Level */}
            <div className="absolute bottom-4 left-4 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Heart
                  key={i}
                  className={`h-4 w-4 ${
                    i < experience.relaxationLevel
                      ? "fill-primary text-primary"
                      : "text-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Price */}
            <div className="absolute bottom-4 right-4">
              <span className="px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-sm font-semibold text-foreground">
                {formatPrice(experience.price)}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-2">
              {experience.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {experience.shortDescription}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm font-medium text-foreground">{experience.rating}</span>
                <span className="text-sm text-muted-foreground">({experience.reviewCount})</span>
              </div>
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  )
}
