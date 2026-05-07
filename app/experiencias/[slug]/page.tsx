"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Clock,
  Users,
  Star,
  Heart,
  Check,
  Calendar,
  ArrowLeft,
  Share2,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { experiences, testimonials } from "@/lib/mock-data"
import { TestimonialCard } from "@/components/testimonial-card"

export default function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const experience = experiences.find((exp) => exp.slug === slug)

  if (!experience) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const relatedTestimonials = testimonials.filter(
    (t) => t.experienceId === experience.id
  )

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Gallery */}
      <section className="pt-20 lg:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/experiencias"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a experiencias
          </Link>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src={experience.gallery[0]}
                alt={experience.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {experience.gallery.slice(1, 3).map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="relative aspect-square rounded-2xl overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`${experience.title} - Imagen ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Header */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                    {experience.category.name}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{experience.rating}</span>
                    <span className="text-muted-foreground">
                      ({experience.reviewCount} reseñas)
                    </span>
                  </div>
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                  {experience.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>Máx. {experience.maxParticipants} personas</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm">Nivel de relajación:</span>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Heart
                        key={i}
                        className={`h-4 w-4 ${
                          i < experience.relaxationLevel
                            ? "fill-primary text-primary"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Sobre esta experiencia
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {experience.description}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Beneficios para tu bienestar
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {experience.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Schedule */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Agenda del día
                </h2>
                <div className="space-y-4">
                  {experience.schedule.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-4 p-4 bg-card border border-border/50 rounded-xl"
                    >
                      <div className="w-16 flex-shrink-0">
                        <span className="text-sm font-semibold text-primary">
                          {item.time}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {item.activity}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Qué incluye
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {experience.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              {relatedTestimonials.length > 0 && (
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    Lo que dicen nuestros visitantes
                  </h2>
                  <div className="space-y-6">
                    {relatedTestimonials.map((testimonial, index) => (
                      <TestimonialCard
                        key={testimonial.id}
                        testimonial={testimonial}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card border border-border rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-baseline justify-between mb-6">
                    <div>
                      <span className="text-3xl font-serif font-semibold text-foreground">
                        {formatPrice(experience.price)}
                      </span>
                      <span className="text-muted-foreground ml-1">
                        / persona
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-medium">{experience.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 border border-border rounded-xl">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Fecha
                      </label>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-5 w-5" />
                        <span>Seleccionar fecha</span>
                      </div>
                    </div>
                    <div className="p-4 border border-border rounded-xl">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Participantes
                      </label>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-5 w-5" />
                        <span>1 persona</span>
                      </div>
                    </div>
                  </div>

                  <Link href={`/reserva?experiencia=${experience.slug}`}>
                    <Button className="w-full py-6 text-lg rounded-xl">
                      Reservar ahora
                    </Button>
                  </Link>

                  <p className="text-center text-sm text-muted-foreground mt-4">
                    No se realizará ningún cargo ahora
                  </p>

                  <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-border">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Heart className="h-4 w-4" />
                      Guardar
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      Compartir
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
