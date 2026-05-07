"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Calendar,
  Users,
  CreditCard,
  Check,
  ChevronRight,
  ChevronLeft,
  Leaf,
  Clock,
  MapPin,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { experiences } from "@/lib/mock-data"

function BookingContent() {
  const searchParams = useSearchParams()
  const experienceSlug = searchParams.get("experiencia")
  
  const [step, setStep] = useState(1)
  const [selectedExperience, setSelectedExperience] = useState(
    experienceSlug 
      ? experiences.find((e) => e.slug === experienceSlug) 
      : null
  )
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [participants, setParticipants] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  // Mock available dates
  const availableDates = [
    { date: "2024-02-15", label: "15 Feb", day: "Sáb" },
    { date: "2024-02-16", label: "16 Feb", day: "Dom" },
    { date: "2024-02-22", label: "22 Feb", day: "Sáb" },
    { date: "2024-02-23", label: "23 Feb", day: "Dom" },
    { date: "2024-02-29", label: "29 Feb", day: "Sáb" },
    { date: "2024-03-01", label: "1 Mar", day: "Dom" },
  ]

  const totalPrice = selectedExperience 
    ? selectedExperience.price * participants 
    : 0

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedExperience !== null
      case 2:
        return selectedDate !== null
      case 3:
        return formData.name && formData.email && formData.phone
      default:
        return true
    }
  }

  const handleNext = () => {
    if (canProceed() && step < 4) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const steps = [
    { num: 1, label: "Experiencia", icon: Leaf },
    { num: 2, label: "Fecha y Personas", icon: Calendar },
    { num: 3, label: "Tus Datos", icon: Users },
    { num: 4, label: "Confirmación", icon: Check },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 lg:pt-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              {steps.map((s, index) => (
                <div key={s.num} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        step >= s.num
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {step > s.num ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <s.icon className="h-5 w-5" />
                      )}
                    </div>
                    <span className={`text-xs mt-2 hidden sm:block ${
                      step >= s.num ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {s.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 sm:w-24 h-0.5 mx-2 ${
                      step > s.num ? "bg-primary" : "bg-border"
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {/* Step 1: Select Experience */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-card border border-border rounded-2xl p-6 lg:p-8"
                >
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    Elige tu experiencia
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {experiences.map((exp) => (
                      <motion.button
                        key={exp.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedExperience(exp)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          selectedExperience?.id === exp.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex gap-4">
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={exp.image}
                              alt={exp.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground line-clamp-1">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <p className="text-primary font-semibold mt-2">
                              {formatPrice(exp.price)}
                            </p>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Date and Participants */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-card border border-border rounded-2xl p-6 lg:p-8"
                >
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    Selecciona fecha y participantes
                  </h2>
                  
                  {/* Date Selection */}
                  <div className="mb-8">
                    <h3 className="text-sm font-medium text-foreground mb-4">
                      Fechas disponibles
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                      {availableDates.map((d) => (
                        <motion.button
                          key={d.date}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedDate(d.date)}
                          className={`p-4 rounded-xl border text-center transition-all ${
                            selectedDate === d.date
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <span className={`block text-xs ${
                            selectedDate === d.date 
                              ? "text-primary-foreground/80" 
                              : "text-muted-foreground"
                          }`}>
                            {d.day}
                          </span>
                          <span className="block font-semibold mt-1">{d.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Participants */}
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-4">
                      Número de participantes
                    </h3>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setParticipants(Math.max(1, participants - 1))}
                        disabled={participants <= 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <span className="text-2xl font-serif font-semibold text-foreground w-12 text-center">
                        {participants}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setParticipants(
                          Math.min(selectedExperience?.maxParticipants || 10, participants + 1)
                        )}
                        disabled={participants >= (selectedExperience?.maxParticipants || 10)}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <span className="text-sm text-muted-foreground">
                        (Máx. {selectedExperience?.maxParticipants || 10} personas)
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mt-8 p-4 bg-secondary/50 rounded-xl">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">
                        {formatPrice(selectedExperience?.price || 0)} x {participants} persona(s)
                      </span>
                      <span className="font-semibold text-foreground">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-card border border-border rounded-2xl p-6 lg:p-8"
                >
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    Tus datos de contacto
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-4 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-4 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-4 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                        placeholder="+57 300 123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Notas adicionales
                      </label>
                      <textarea
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full p-4 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
                        rows={3}
                        placeholder="¿Tienes alguna solicitud especial o restricción alimentaria?"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card border border-border rounded-2xl p-6 lg:p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="h-10 w-10 text-primary" />
                  </motion.div>

                  <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                    ¡Tu experiencia está lista!
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Hemos enviado los detalles de tu reserva a {formData.email}. 
                    Nos pondremos en contacto contigo pronto para confirmar.
                  </p>

                  {/* Reservation Summary */}
                  <div className="bg-secondary/50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
                    <h3 className="font-semibold text-foreground mb-4">Resumen de tu reserva</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <Leaf className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">{selectedExperience?.title}</p>
                          <p className="text-muted-foreground">{selectedExperience?.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-foreground">
                          {availableDates.find((d) => d.date === selectedDate)?.label}, 2024
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-foreground">{participants} persona(s)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-foreground">Popayán, Cauca</span>
                      </div>
                      <div className="flex items-center gap-3 pt-3 border-t border-border">
                        <CreditCard className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-foreground">
                          Total: {formatPrice(totalPrice)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link href="/">
                    <Button size="lg">
                      Volver al inicio
                    </Button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            {step < 4 && (
              <div className="flex items-center justify-between mt-8">
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  disabled={step === 1}
                  className="gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Anterior
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="gap-2"
                >
                  {step === 3 ? "Confirmar reserva" : "Siguiente"}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function ReservaPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Cargando...</div>
      </main>
    }>
      <BookingContent />
    </Suspense>
  )
}
