"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  TrendingDown,
  Heart,
  Sun,
  Users,
  Zap,
  MessageCircle,
  Check,
  ArrowRight,
  Calendar,
  Building2,
  BarChart3,
  Target,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { AnimatedCounter } from "@/components/animated-counter"
import { Button } from "@/components/ui/button"
import { corporateMetrics, corporatePrograms } from "@/lib/mock-data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingDown,
  Heart,
  Sun,
  Users,
  Zap,
  MessageCircle,
}

const mockCalendarEvents = [
  { date: "15 Mar", title: "Retiro Equipo Ventas", participants: 12, status: "confirmed" },
  { date: "22 Mar", title: "Workshop Liderazgo", participants: 8, status: "pending" },
  { date: "05 Abr", title: "Día de Bienestar General", participants: 45, status: "confirmed" },
  { date: "18 Abr", title: "Retiro Ejecutivo", participants: 6, status: "pending" },
]

export default function CorporativoPage() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              Programas Corporativos
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6"
            >
              Bienestar que transforma equipos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Programas diseñados para reducir el burnout, mejorar el clima laboral 
              y aumentar la productividad de tu equipo. Inversión en bienestar, 
              retorno en resultados.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contacto">
                <Button size="lg" className="gap-2">
                  Solicitar propuesta
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Ver demo del dashboard
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KPI Dashboard */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Dashboard Demo"
            title="Métricas de impacto en tiempo real"
            description="Así se vería el panel de control de bienestar de tu empresa después de implementar nuestros programas."
            align="left"
            className="mb-12"
          />

          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-12">
            {corporateMetrics.map((metric, index) => {
              const Icon = iconMap[metric.icon] || BarChart3
              return (
                <motion.div
                  key={metric.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-5 lg:p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className={`text-sm font-medium ${
                      metric.change > 0 ? "text-emerald-600" : "text-red-600"
                    }`}>
                      {metric.change > 0 ? "+" : ""}{metric.change}{metric.unit === "%" ? "pp" : ""}
                    </span>
                  </div>
                  <div className="font-serif text-3xl font-semibold text-foreground mb-1">
                    <AnimatedCounter 
                      value={metric.value} 
                      suffix={metric.unit}
                      duration={1.5}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Dashboard Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Evolución del Bienestar</h3>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Satisfacción</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-chart-2" />
                    <span className="text-muted-foreground">Burnout</span>
                  </div>
                </div>
              </div>
              
              {/* Mock Chart */}
              <div className="h-64 flex items-end justify-between gap-4 px-4">
                {["Ene", "Feb", "Mar", "Abr", "May", "Jun"].map((month, i) => {
                  const satisfaction = [45, 52, 61, 70, 78, 89][i]
                  const burnout = [72, 65, 55, 48, 38, 33][i]
                  return (
                    <div key={month} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full flex items-end justify-center gap-1 h-48">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${satisfaction}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="w-4 bg-primary rounded-t"
                        />
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${burnout}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="w-4 bg-chart-2 rounded-t"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{month}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Próximos Eventos</h3>
              </div>
              <div className="space-y-4">
                {mockCalendarEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-xs text-primary font-medium">
                        {event.date.split(" ")[0]}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {event.date.split(" ")[1]}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {event.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {event.participants} participantes
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      event.status === "confirmed"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                        : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                    }`}>
                      {event.status === "confirmed" ? "Confirmado" : "Pendiente"}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Programas"
            title="Soluciones para cada necesidad"
            description="Desde talleres de un día hasta programas anuales de transformación cultural."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {corporatePrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card border rounded-2xl p-6 lg:p-8 transition-all ${
                  selectedProgram === program.id
                    ? "border-primary shadow-lg"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setSelectedProgram(
                  selectedProgram === program.id ? null : program.id
                )}
              >
                {index === 1 && (
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-4">
                    Más popular
                  </span>
                )}
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {program.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-foreground">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-foreground">{program.participants}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-foreground font-semibold">{program.price}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contacto">
                  <Button 
                    className="w-full" 
                    variant={index === 1 ? "default" : "outline"}
                  >
                    Solicitar información
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Building2 className="h-12 w-12 text-primary mx-auto mb-6" />
            <blockquote className="font-serif text-2xl lg:text-3xl text-foreground leading-relaxed mb-6">
              &ldquo;Después del retiro con Renacer Rural, nuestro índice de rotación 
              bajó un 40% y el NPS interno subió 25 puntos. La mejor inversión 
              en capital humano que hemos hecho.&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-foreground">Carlos Eduardo Méndez</p>
              <p className="text-muted-foreground">CEO, Innovación Digital</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-6">
              Agenda una llamada con nuestro equipo
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Conversemos sobre las necesidades de tu equipo y diseñemos 
              juntos el programa perfecto para tu empresa.
            </p>
            <Link href="/contacto">
              <Button 
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Agendar llamada gratuita
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
