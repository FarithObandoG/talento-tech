"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/animated-counter"
import { Users, TreePine, Heart, Star } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 2847,
    label: "Visitantes Transformados",
    suffix: "+",
  },
  {
    icon: TreePine,
    value: 150,
    label: "Hectáreas de Naturaleza",
    suffix: "ha",
  },
  {
    icon: Heart,
    value: 98,
    label: "Satisfacción",
    suffix: "%",
  },
  {
    icon: Star,
    value: 4.9,
    label: "Calificación Promedio",
    suffix: "/5",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-2">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix}
                  duration={2}
                />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
