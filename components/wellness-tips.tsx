"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Lightbulb, 
  Sun, 
  Moon, 
  Coffee, 
  Leaf, 
  Heart, 
  Brain,
  Sparkles,
  ChevronRight 
} from "lucide-react"
import { reflexiveQuotes } from "@/lib/mock-data"

interface Tip {
  id: string
  category: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  steps: string[]
}

const wellnessTips: Tip[] = [
  {
    id: "1",
    category: "Mañana",
    icon: Sun,
    title: "Ritual de amanecer consciente",
    description: "Comienza tu día con intención y gratitud antes de revisar tu teléfono.",
    steps: [
      "Al despertar, mantén los ojos cerrados por 30 segundos",
      "Respira profundamente 3 veces",
      "Piensa en una cosa por la que estés agradecido/a",
      "Estira tu cuerpo suavemente antes de levantarte",
      "Espera al menos 30 minutos antes de revisar el celular",
    ],
  },
  {
    id: "2",
    category: "Trabajo",
    icon: Coffee,
    title: "Pausas activas cada 90 minutos",
    description: "Tu cuerpo y mente necesitan micro-descansos para mantener el rendimiento.",
    steps: [
      "Configura una alarma cada 90 minutos",
      "Levántate y camina por 2-3 minutos",
      "Mira a lo lejos para descansar la vista",
      "Haz 5 respiraciones profundas",
      "Hidrátate antes de volver al trabajo",
    ],
  },
  {
    id: "3",
    category: "Naturaleza",
    icon: Leaf,
    title: "Baño de bosque urbano",
    description: "No necesitas un bosque para conectar con la naturaleza.",
    steps: [
      "Busca el parque o área verde más cercana",
      "Camina sin audífonos ni teléfono por 20 minutos",
      "Observa conscientemente las plantas y árboles",
      "Toca la corteza de un árbol o las hojas",
      "Respira profundamente el aire exterior",
    ],
  },
  {
    id: "4",
    category: "Noche",
    icon: Moon,
    title: "Ritual de cierre del día",
    description: "Prepara tu mente para un descanso reparador.",
    steps: [
      "Deja de usar pantallas 1 hora antes de dormir",
      "Escribe 3 cosas positivas que pasaron hoy",
      "Prepara tu ropa y espacio para mañana",
      "Realiza 5 minutos de respiración 4-7-8",
      "Agradece mentalmente antes de cerrar los ojos",
    ],
  },
  {
    id: "5",
    category: "Emocional",
    icon: Heart,
    title: "Check-in emocional diario",
    description: "Conecta con tus emociones antes de que se acumulen.",
    steps: [
      "Cierra los ojos y respira profundamente",
      "Pregúntate: ¿Cómo me siento realmente?",
      "Nombra la emoción sin juzgarla",
      "Localiza dónde la sientes en tu cuerpo",
      "Acepta la emoción y déjala fluir",
    ],
  },
  {
    id: "6",
    category: "Mental",
    icon: Brain,
    title: "Dieta de información consciente",
    description: "Lo que consumes mentalmente afecta tu bienestar.",
    steps: [
      "Limita las noticias a 15 minutos al día",
      "Desactiva notificaciones no esenciales",
      "Elige contenido que te nutra mentalmente",
      "Haz una pausa antes de compartir algo",
      "Dedica tiempo a la lectura profunda",
    ],
  },
]

export function WellnessTips() {
  const [expandedTip, setExpandedTip] = useState<string | null>(null)
  const [currentQuote, setCurrentQuote] = useState(0)

  const handleNextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % reflexiveQuotes.length)
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Inspirational Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-8 text-center cursor-pointer"
        onClick={handleNextQuote}
      >
        <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
        <AnimatePresence mode="wait">
          <motion.p
            key={currentQuote}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="font-serif text-xl lg:text-2xl text-foreground italic"
          >
            &ldquo;{reflexiveQuotes[currentQuote]}&rdquo;
          </motion.p>
        </AnimatePresence>
        <p className="text-sm text-muted-foreground mt-4">
          Toca para otra frase inspiradora
        </p>
      </motion.div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {wellnessTips.map((tip, index) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border border-border rounded-xl overflow-hidden"
          >
            <button
              onClick={() =>
                setExpandedTip(expandedTip === tip.id ? null : tip.id)
              }
              className="w-full p-5 text-left hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <tip.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {tip.category}
                  </span>
                  <h3 className="font-semibold text-foreground mt-1">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {tip.description}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: expandedTip === tip.id ? 90 : 0 }}
                  className="flex-shrink-0"
                >
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </motion.div>
              </div>
            </button>

            <AnimatePresence>
              {expandedTip === tip.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-2 border-t border-border">
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      Pasos a seguir:
                    </h4>
                    <ul className="space-y-2">
                      {tip.steps.map((step, stepIndex) => (
                        <motion.li
                          key={stepIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: stepIndex * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                            {stepIndex + 1}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {step}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Daily Challenge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Lightbulb className="h-6 w-6 text-primary" />
          </div>
          <div>
            <span className="text-xs text-primary font-medium uppercase tracking-wider">
              Reto del día
            </span>
            <h3 className="font-serif text-xl font-semibold text-foreground mt-1">
              5 minutos sin pantalla
            </h3>
            <p className="text-muted-foreground mt-2">
              Toma un descanso de 5 minutos sin mirar ninguna pantalla. 
              Mira por la ventana, estira tu cuerpo, o simplemente respira.
            </p>
            <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              Aceptar el reto
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
