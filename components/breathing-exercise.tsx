"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

type BreathingPhase = "inhale" | "hold" | "exhale" | "rest"

interface BreathingPattern {
  id: string
  name: string
  description: string
  inhale: number
  hold: number
  exhale: number
  rest: number
  cycles: number
}

const patterns: BreathingPattern[] = [
  {
    id: "478",
    name: "Respiración 4-7-8",
    description: "Técnica de relajación profunda ideal para antes de dormir",
    inhale: 4,
    hold: 7,
    exhale: 8,
    rest: 0,
    cycles: 4,
  },
  {
    id: "box",
    name: "Respiración Cuadrada",
    description: "Equilibra el sistema nervioso y reduce la ansiedad",
    inhale: 4,
    hold: 4,
    exhale: 4,
    rest: 4,
    cycles: 6,
  },
  {
    id: "calm",
    name: "Respiración Calmante",
    description: "Simple y efectiva para momentos de estrés",
    inhale: 4,
    hold: 2,
    exhale: 6,
    rest: 0,
    cycles: 8,
  },
]

const phaseInstructions: Record<BreathingPhase, string> = {
  inhale: "Inhala profundamente",
  hold: "Mantén la respiración",
  exhale: "Exhala lentamente",
  rest: "Descansa",
}

export function BreathingExercise() {
  const [selectedPattern, setSelectedPattern] = useState<BreathingPattern>(patterns[0])
  const [isRunning, setIsRunning] = useState(false)
  const [phase, setPhase] = useState<BreathingPhase>("inhale")
  const [timeLeft, setTimeLeft] = useState(selectedPattern.inhale)
  const [currentCycle, setCurrentCycle] = useState(1)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const getPhaseColor = (p: BreathingPhase) => {
    switch (p) {
      case "inhale":
        return "text-emerald-500"
      case "hold":
        return "text-amber-500"
      case "exhale":
        return "text-blue-500"
      case "rest":
        return "text-purple-500"
    }
  }

  const getNextPhase = useCallback((): { phase: BreathingPhase; duration: number; newCycle: number } => {
    const p = selectedPattern
    let newCycle = currentCycle

    switch (phase) {
      case "inhale":
        return { phase: "hold", duration: p.hold, newCycle }
      case "hold":
        return { phase: "exhale", duration: p.exhale, newCycle }
      case "exhale":
        if (p.rest > 0) {
          return { phase: "rest", duration: p.rest, newCycle }
        }
        newCycle = currentCycle + 1
        return { phase: "inhale", duration: p.inhale, newCycle }
      case "rest":
        newCycle = currentCycle + 1
        return { phase: "inhale", duration: p.inhale, newCycle }
    }
  }, [phase, currentCycle, selectedPattern])

  useEffect(() => {
    if (!isRunning) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          const next = getNextPhase()
          
          if (next.newCycle > selectedPattern.cycles) {
            setIsRunning(false)
            setIsComplete(true)
            return 0
          }

          setPhase(next.phase)
          setCurrentCycle(next.newCycle)
          return next.duration
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isRunning, getNextPhase, selectedPattern.cycles])

  const handleStart = () => {
    setIsComplete(false)
    setIsRunning(true)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setPhase("inhale")
    setTimeLeft(selectedPattern.inhale)
    setCurrentCycle(1)
    setIsComplete(false)
  }

  const handlePatternChange = (pattern: BreathingPattern) => {
    setSelectedPattern(pattern)
    setPhase("inhale")
    setTimeLeft(pattern.inhale)
    setCurrentCycle(1)
    setIsRunning(false)
    setIsComplete(false)
  }

  const circleScale = phase === "inhale" ? 1.3 : phase === "exhale" ? 0.8 : 1

  return (
    <div className="max-w-2xl mx-auto">
      {/* Pattern Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {patterns.map((pattern) => (
          <motion.button
            key={pattern.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handlePatternChange(pattern)}
            className={`p-4 rounded-xl border text-left transition-all ${
              selectedPattern.id === pattern.id
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card border-border hover:border-primary/50"
            }`}
          >
            <h3 className="font-semibold mb-1">{pattern.name}</h3>
            <p className={`text-xs ${
              selectedPattern.id === pattern.id
                ? "text-primary-foreground/80"
                : "text-muted-foreground"
            }`}>
              {pattern.description}
            </p>
          </motion.button>
        ))}
      </div>

      {/* Breathing Circle */}
      <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
        <div className="flex flex-col items-center">
          {/* Circle Animation */}
          <div className="relative w-64 h-64 mb-8">
            {/* Outer glow */}
            <motion.div
              animate={{
                scale: circleScale,
                opacity: isRunning ? 0.3 : 0.1,
              }}
              transition={{
                duration: timeLeft,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-primary blur-xl"
            />
            
            {/* Main circle */}
            <motion.div
              animate={{
                scale: circleScale,
              }}
              transition={{
                duration: timeLeft,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-primary/50 flex items-center justify-center"
            >
              <div className="text-center">
                <motion.span
                  key={timeLeft}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="block font-serif text-5xl font-semibold text-foreground"
                >
                  {timeLeft}
                </motion.span>
                <span className={`block text-sm font-medium mt-2 ${getPhaseColor(phase)}`}>
                  {phaseInstructions[phase]}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Progress Info */}
          <AnimatePresence mode="wait">
            {isComplete ? (
              <motion.div
                key="complete"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center mb-8"
              >
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  ¡Excelente trabajo!
                </h3>
                <p className="text-muted-foreground">
                  Has completado {selectedPattern.cycles} ciclos de respiración
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="progress"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center mb-8"
              >
                <p className="text-muted-foreground">
                  Ciclo {currentCycle} de {selectedPattern.cycles}
                </p>
                <div className="flex items-center gap-2 mt-2 justify-center">
                  {Array.from({ length: selectedPattern.cycles }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i < currentCycle ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="rounded-full"
            >
              {soundEnabled ? (
                <Volume2 className="h-5 w-5" />
              ) : (
                <VolumeX className="h-5 w-5" />
              )}
            </Button>

            <Button
              size="lg"
              onClick={isRunning ? handlePause : handleStart}
              className="rounded-full px-8 gap-2"
            >
              {isRunning ? (
                <>
                  <Pause className="h-5 w-5" />
                  Pausar
                </>
              ) : (
                <>
                  <Play className="h-5 w-5" />
                  {isComplete ? "Repetir" : "Comenzar"}
                </>
              )}
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={handleReset}
              className="rounded-full"
            >
              <RotateCcw className="h-5 w-5" />
            </Button>
          </div>

          {/* Pattern Details */}
          <div className="mt-8 pt-8 border-t border-border w-full">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <span className="block text-2xl font-serif font-semibold text-foreground">
                  {selectedPattern.inhale}s
                </span>
                <span className="text-xs text-muted-foreground">Inhalar</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-semibold text-foreground">
                  {selectedPattern.hold}s
                </span>
                <span className="text-xs text-muted-foreground">Mantener</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-semibold text-foreground">
                  {selectedPattern.exhale}s
                </span>
                <span className="text-xs text-muted-foreground">Exhalar</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-semibold text-foreground">
                  {selectedPattern.rest}s
                </span>
                <span className="text-xs text-muted-foreground">Descanso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
