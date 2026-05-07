"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building2,
  Users,
  CheckCircle,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"

const contactReasons = [
  { id: "personal", label: "Reserva Personal", icon: Users },
  { id: "corporate", label: "Programa Corporativo", icon: Building2 },
  { id: "info", label: "Información General", icon: MessageCircle },
]

export default function ContactoPage() {
  const [selectedReason, setSelectedReason] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to an API
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Contacto"
            title="Hablemos de tu bienestar"
            description="Estamos aquí para responder tus preguntas y ayudarte a encontrar la experiencia perfecta para ti o tu equipo."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                <motion.a
                  href="mailto:hola@renacerrural.com"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground text-sm">hola@renacerrural.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+573124567890"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Teléfono</p>
                    <p className="text-muted-foreground text-sm">+57 312 456 7890</p>
                  </div>
                </motion.a>

                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Ubicación</p>
                    <p className="text-muted-foreground text-sm">
                      A 30 minutos de Popayán, <br />
                      Cauca, Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Horario de atención</p>
                    <p className="text-muted-foreground text-sm">
                      Lunes a Viernes: 8am - 6pm <br />
                      Sábado: 8am - 2pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video bg-secondary rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-2 text-primary/30" />
                    <p className="text-sm">Mapa interactivo próximamente</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {!isSubmitted ? (
                <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                    Envíanos un mensaje
                  </h3>

                  {/* Reason Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-3">
                      ¿Cómo podemos ayudarte?
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {contactReasons.map((reason) => (
                        <motion.button
                          key={reason.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedReason(reason.id)}
                          className={`p-4 rounded-xl border text-center transition-all ${
                            selectedReason === reason.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <reason.icon className={`h-6 w-6 mx-auto mb-2 ${
                            selectedReason === reason.id
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`} />
                          <span className={`text-sm ${
                            selectedReason === reason.id
                              ? "text-foreground font-medium"
                              : "text-muted-foreground"
                          }`}>
                            {reason.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          required
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
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full p-4 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full p-4 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                          placeholder="+57 300 123 4567"
                        />
                      </div>
                      {selectedReason === "corporate" && (
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Empresa
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full p-4 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                            placeholder="Nombre de tu empresa"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-4 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
                        rows={5}
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto gap-2">
                      Enviar mensaje
                      <Send className="h-5 w-5" />
                    </Button>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card border border-border rounded-2xl p-8 lg:p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="h-10 w-10 text-primary" />
                  </motion.div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Gracias por contactarnos. Nuestro equipo revisará tu mensaje y 
                    te responderá en las próximas 24 horas.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ name: "", email: "", phone: "", company: "", message: "" })
                      setSelectedReason(null)
                    }}
                  >
                    Enviar otro mensaje
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="FAQ"
            title="Preguntas frecuentes"
            description="Respuestas rápidas a las dudas más comunes."
          />

          <div className="mt-12 max-w-3xl mx-auto grid gap-4">
            {[
              {
                q: "¿Cómo llego a la finca?",
                a: "Estamos a 30 minutos de Popayán. Podemos organizar transporte desde el aeropuerto o terminal de buses. También enviamos indicaciones detalladas una vez confirmes tu reserva."
              },
              {
                q: "¿Qué debo llevar a las experiencias?",
                a: "Recomendamos ropa cómoda, zapatos para caminar, protector solar, y una mente abierta. Para retiros con estadía, te enviamos una lista completa de preparación."
              },
              {
                q: "¿Las experiencias son aptas para niños?",
                a: "Tenemos experiencias específicas para familias. Algunas actividades son exclusivas para adultos. Consúltanos y te orientamos según las edades."
              },
              {
                q: "¿Cuál es la política de cancelación?",
                a: "Cancelaciones con más de 72 horas de anticipación reciben reembolso completo. Entre 24-72 horas, el 50%. Menos de 24 horas no son reembolsables, pero pueden reprogramarse."
              },
              {
                q: "¿Tienen opciones vegetarianas/veganas?",
                a: "Sí, toda nuestra cocina es adaptable. Por favor indícanos tus restricciones alimentarias al momento de reservar."
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
