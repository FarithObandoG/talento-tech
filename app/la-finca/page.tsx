"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Beef,
  Carrot,
  TreePine,
  Cookie,
  Sun,
  Droplets,
  ArrowRight,
  MapPin,
  Heart,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { AnimatedCounter } from "@/components/animated-counter"
import { Button } from "@/components/ui/button"
import { farmFeatures, timelineEvents, sustainabilityMetrics } from "@/lib/mock-data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Beef,
  Carrot,
  TreePine,
  Cookie,
  Sun,
  Droplets,
}

export default function LaFincaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
              <MapPin className="h-4 w-4" />
              Popayán, Cauca, Colombia
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Nuestra tierra, <br />tu santuario
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              150 hectáreas de naturaleza viva donde la ganadería regenerativa, 
              la agricultura orgánica y la conservación se unen para crear 
              experiencias transformadoras.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="filosofia" className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Nuestra Filosofía
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                Más que una finca, un modelo de vida
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Creemos que el bienestar humano está intrínsecamente conectado 
                  con el bienestar del planeta. Por eso, cada decisión que tomamos 
                  busca regenerar la tierra mientras restaura el espíritu de quienes 
                  nos visitan.
                </p>
                <p>
                  Nuestro modelo agroecológico demuestra que es posible producir 
                  alimentos, cuidar la biodiversidad y ofrecer experiencias 
                  transformadoras, todo al mismo tiempo.
                </p>
                <p>
                  Aquí, los animales pastan libremente, las huertas crecen sin 
                  químicos, el bosque se expande cada año, y las personas encuentran 
                  un espacio auténtico para reconectar con lo esencial.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80"
                    alt="Ganadería regenerativa"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"
                    alt="Huerta orgánica"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80"
                    alt="Bosque nativo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
                    alt="Paisaje"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Nuestro Modelo"
            title="Un ecosistema en equilibrio"
            description="Cada elemento de la finca contribuye al bienestar del todo, creando un círculo virtuoso de regeneración."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {farmFeatures.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Heart
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {feature.description}
                      </p>
                      <span className="inline-block px-3 py-1 bg-secondary text-foreground text-sm rounded-full">
                        {feature.stats}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Nuestra Historia"
            title="Un sueño en crecimiento"
            description="El camino que nos trajo hasta aquí y la visión que nos impulsa hacia el futuro."
          />

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="relative">
              {/* Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start gap-6 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2" />
                  
                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2">
                      {event.year}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sostenibilidad" className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6">
              Impacto Sostenible
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold leading-tight mb-4">
              Nuestro compromiso con el planeta
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Cada año medimos y mejoramos nuestro impacto ambiental y social.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {sustainabilityMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10"
              >
                <div className="font-serif text-3xl font-semibold mb-2">
                  <AnimatedCounter 
                    value={metric.value} 
                    suffix={metric.suffix}
                    duration={2}
                  />
                </div>
                <p className="text-sm text-primary-foreground/70">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Ven a conocer nuestro santuario
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Agenda una visita y descubre por ti mismo la magia de este lugar 
              donde la naturaleza y el bienestar se encuentran.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/reserva">
                <Button size="lg" className="gap-2">
                  Reservar experiencia
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline">
                  Contactar para grupos
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
