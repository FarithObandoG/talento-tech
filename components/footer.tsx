"use client"

import Link from "next/link"
import { Leaf, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

const footerLinks = {
  experiencias: [
    { label: "Retiros Antiestrés", href: "/experiencias?category=stress" },
    { label: "Experiencias Familiares", href: "/experiencias?category=family" },
    { label: "Programas Corporativos", href: "/corporativo" },
    { label: "Detox Digital", href: "/experiencias/detox-digital" },
  ],
  bienestar: [
    { label: "Test de Estrés", href: "/bienestar" },
    { label: "Respiración Guiada", href: "/bienestar#respiracion" },
    { label: "Mood Tracker", href: "/bienestar#mood" },
    { label: "Tips de Bienestar", href: "/bienestar#tips" },
  ],
  nosotros: [
    { label: "Nuestra Historia", href: "/la-finca" },
    { label: "Filosofía", href: "/la-finca#filosofia" },
    { label: "Sostenibilidad", href: "/la-finca#sostenibilidad" },
    { label: "Contacto", href: "/contacto" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="font-serif text-2xl font-semibold text-foreground">
                Renacer Rural
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Experiencias rurales transformadoras para tu bienestar emocional. 
              Reconecta contigo mismo en el corazón del Cauca, Colombia.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:hola@renacerrural.com"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </motion.a>
            </div>
          </div>

          {/* Experiencias */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              Experiencias
            </h4>
            <ul className="space-y-3">
              {footerLinks.experiencias.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bienestar */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              Bienestar
            </h4>
            <ul className="space-y-3">
              {footerLinks.bienestar.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nosotros */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              Nosotros
            </h4>
            <ul className="space-y-3">
              {footerLinks.nosotros.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Popayán, Cauca, Colombia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+57 312 456 7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>hola@renacerrural.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 Renacer Rural. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacidad" className="hover:text-foreground transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-foreground transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
