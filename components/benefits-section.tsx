"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { Brain, Heart, Leaf, Sun, Moon, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Brain,
    title: "Claridad Mental",
    description: "Libera el ruido mental y encuentra la paz interior que necesitas para tomar mejores decisiones.",
  },
  {
    icon: Heart,
    title: "Bienestar Emocional",
    description: "Procesa emociones en un espacio seguro y reconecta con tu capacidad de sentir plenamente.",
  },
  {
    icon: Leaf,
    title: "Conexión Natural",
    description: "Recuerda que eres parte de algo más grande mientras te sumerges en ecosistemas vivos.",
  },
  {
    icon: Sun,
    title: "Energía Renovada",
    description: "Recarga tu vitalidad con el ritmo natural del sol, el aire puro y la alimentación consciente.",
  },
  {
    icon: Moon,
    title: "Descanso Profundo",
    description: "Experimenta el sueño reparador que solo llega cuando el cuerpo y la mente están en paz.",
  },
  {
    icon: Sparkles,
    title: "Transformación Real",
    description: "Llévate herramientas prácticas para mantener el bienestar en tu vida cotidiana.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Beneficios"
          title="Tu bienestar merece esta pausa"
          description="Cada experiencia está diseñada científicamente para activar tu capacidad natural de sanación y renovación."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors"
              >
                <benefit.icon className="h-7 w-7 text-primary" />
              </motion.div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
