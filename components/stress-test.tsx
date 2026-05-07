"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowLeft, RotateCcw, Leaf, AlertTriangle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { stressQuestions, experiences } from "@/lib/mock-data"
import Link from "next/link"

type StressLevel = "low" | "moderate" | "high" | "critical"

interface StressResult {
  level: StressLevel
  score: number
  title: string
  description: string
  color: string
  recommendations: string[]
}

const getStressResult = (score: number): StressResult => {
  if (score <= 5) {
    return {
      level: "low",
      score,
      title: "Bajo nivel de estrés",
      description: "Tu equilibrio emocional está en un buen punto. Mantén tus hábitos saludables y considera experiencias de mantenimiento.",
      color: "emerald",
      recommendations: [
        "Continúa con tus prácticas de bienestar actuales",
        "Una experiencia de naturaleza puede fortalecer tu paz interior",
        "Comparte tus técnicas con otros que puedan necesitarlas",
      ],
    }
  } else if (score <= 10) {
    return {
      level: "moderate",
      score,
      title: "Estrés moderado",
      description: "Tienes algunas señales de estrés que merecen atención. Un tiempo de reconexión con la naturaleza puede ayudarte a restablecer el equilibrio.",
      color: "amber",
      recommendations: [
        "Considera una caminata terapéutica para despejar la mente",
        "Práctica ejercicios de respiración diariamente",
        "Un fin de semana de desconexión podría ser beneficioso",
      ],
    }
  } else if (score <= 15) {
    return {
      level: "high",
      score,
      title: "Alto nivel de estrés",
      description: "Tu cuerpo y mente están enviando señales importantes. Es momento de tomar acción y priorizar tu bienestar.",
      color: "orange",
      recommendations: [
        "Un retiro antiestrés es altamente recomendado",
        "Considera un detox digital para resetear tu sistema nervioso",
        "Habla con alguien de confianza sobre lo que sientes",
      ],
    }
  } else {
    return {
      level: "critical",
      score,
      title: "Estrés crítico",
      description: "Es urgente que te tomes tiempo para ti. Tu bienestar físico y emocional necesita atención inmediata.",
      color: "red",
      recommendations: [
        "Considera hablar con un profesional de salud mental",
        "Un retiro de varios días podría ser transformador",
        "Implementa cambios inmediatos en tu rutina diaria",
      ],
    }
  }
}

export function StressTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (currentQuestion < stressQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setAnswers(answers.slice(0, -1))
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
  }

  const totalScore = answers.reduce((sum, answer) => sum + answer, 0)
  const result = getStressResult(totalScore)
  const progress = ((currentQuestion + 1) / stressQuestions.length) * 100

  const recommendedExperiences = experiences.filter(
    (exp) => exp.category.id === "stress" || exp.relaxationLevel >= 4
  ).slice(0, 3)

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key="questions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-card border border-border rounded-2xl p-6 lg:p-8"
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span>Pregunta {currentQuestion + 1} de {stressQuestions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-primary rounded-full"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Question */}
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-xl lg:text-2xl font-semibold text-foreground mb-8">
                {stressQuestions[currentQuestion].question}
              </h3>

              <div className="space-y-3">
                {stressQuestions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(index)}
                    className="w-full p-4 text-left bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/30 rounded-xl transition-all"
                  >
                    <span className="text-foreground">{option}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentQuestion === 0}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Anterior
              </Button>
              <Button variant="ghost" onClick={handleReset} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Reiniciar
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-2xl p-6 lg:p-8"
          >
            {/* Result Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                  result.level === "low"
                    ? "bg-emerald-100 dark:bg-emerald-900/30"
                    : result.level === "moderate"
                    ? "bg-amber-100 dark:bg-amber-900/30"
                    : result.level === "high"
                    ? "bg-orange-100 dark:bg-orange-900/30"
                    : "bg-red-100 dark:bg-red-900/30"
                }`}
              >
                {result.level === "low" ? (
                  <CheckCircle className="h-10 w-10 text-emerald-600" />
                ) : result.level === "moderate" ? (
                  <Leaf className="h-10 w-10 text-amber-600" />
                ) : (
                  <AlertTriangle className="h-10 w-10 text-orange-600" />
                )}
              </motion.div>

              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-3">
                {result.title}
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                {result.description}
              </p>
            </div>

            {/* Score Visualization */}
            <div className="bg-secondary/50 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-foreground">Tu puntuación</span>
                <span className="text-2xl font-serif font-semibold text-foreground">
                  {result.score}/20
                </span>
              </div>
              <div className="h-4 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(result.score / 20) * 100}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`h-full rounded-full ${
                    result.level === "low"
                      ? "bg-emerald-500"
                      : result.level === "moderate"
                      ? "bg-amber-500"
                      : result.level === "high"
                      ? "bg-orange-500"
                      : "bg-red-500"
                  }`}
                />
              </div>
            </div>

            {/* Recommendations */}
            <div className="mb-8">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Nuestras recomendaciones
              </h3>
              <ul className="space-y-3">
                {result.recommendations.map((rec, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground">{rec}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Recommended Experiences */}
            <div className="border-t border-border pt-8">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Experiencias recomendadas para ti
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {recommendedExperiences.map((exp) => (
                  <Link key={exp.id} href={`/experiencias/${exp.slug}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors"
                    >
                      <h4 className="font-medium text-foreground text-sm mb-1 line-clamp-1">
                        {exp.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">{exp.duration}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button onClick={handleReset} variant="outline" className="flex-1">
                Repetir test
              </Button>
              <Link href="/reserva" className="flex-1">
                <Button className="w-full">Reservar experiencia</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
