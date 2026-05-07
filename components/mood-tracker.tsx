"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, TrendingUp, Sparkles } from "lucide-react"
import { moodOptions } from "@/lib/mock-data"

interface MoodEntry {
  date: string
  mood: string
  note?: string
}

// Mock data for mood history
const mockMoodHistory: MoodEntry[] = [
  { date: "2024-01-15", mood: "great", note: "Caminata por la mañana" },
  { date: "2024-01-14", mood: "good" },
  { date: "2024-01-13", mood: "okay", note: "Día ocupado" },
  { date: "2024-01-12", mood: "good" },
  { date: "2024-01-11", mood: "stressed", note: "Mucho trabajo" },
  { date: "2024-01-10", mood: "low" },
  { date: "2024-01-09", mood: "good", note: "Meditación matutina" },
]

const getMoodColor = (moodId: string) => {
  switch (moodId) {
    case "great":
      return "bg-emerald-500"
    case "good":
      return "bg-green-500"
    case "okay":
      return "bg-amber-500"
    case "low":
      return "bg-orange-500"
    case "stressed":
      return "bg-red-500"
    default:
      return "bg-muted"
  }
}

const getMoodEmoji = (moodId: string) => {
  const mood = moodOptions.find((m) => m.id === moodId)
  return mood?.emoji || "😐"
}

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [note, setNote] = useState("")
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId)
  }

  const handleSubmit = () => {
    if (selectedMood) {
      // In a real app, this would save to the database
      setShowConfirmation(true)
      setTimeout(() => {
        setShowConfirmation(false)
        setSelectedMood(null)
        setNote("")
      }, 2000)
    }
  }

  const today = new Date().toLocaleDateString("es-CO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="max-w-2xl mx-auto">
      {/* Today's Mood */}
      <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="h-5 w-5 text-primary" />
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              ¿Cómo te sientes hoy?
            </h3>
            <p className="text-sm text-muted-foreground capitalize">{today}</p>
          </div>
        </div>

        {/* Mood Selector */}
        <div className="grid grid-cols-5 gap-3 mb-6">
          {moodOptions.map((mood) => (
            <motion.button
              key={mood.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleMoodSelect(mood.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                selectedMood === mood.id
                  ? "bg-primary/10 border-primary"
                  : "bg-secondary/50 border-border hover:border-primary/30"
              }`}
            >
              <span className="text-3xl">{mood.emoji}</span>
              <span className="text-xs text-muted-foreground">{mood.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Note Input */}
        {selectedMood && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="space-y-4"
          >
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Agrega una nota sobre tu día (opcional)"
              className="w-full p-4 bg-secondary/50 border border-border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
              rows={3}
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              Guardar estado de ánimo
            </motion.button>
          </motion.div>
        )}

        {/* Confirmation */}
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-2 p-4 bg-primary/10 rounded-xl text-primary"
          >
            <Sparkles className="h-5 w-5" />
            <span className="font-medium">¡Estado de ánimo guardado!</span>
          </motion.div>
        )}
      </div>

      {/* Mood History */}
      <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Tu historial reciente
            </h3>
          </div>
          <span className="text-sm text-muted-foreground">Últimos 7 días</span>
        </div>

        {/* Week View */}
        <div className="grid grid-cols-7 gap-2 mb-8">
          {mockMoodHistory.map((entry, index) => {
            const date = new Date(entry.date)
            const dayName = date.toLocaleDateString("es-CO", { weekday: "short" })
            const dayNum = date.getDate()

            return (
              <motion.div
                key={entry.date}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-xs text-muted-foreground capitalize">
                  {dayName}
                </span>
                <div
                  className={`w-10 h-10 rounded-full ${getMoodColor(
                    entry.mood
                  )} flex items-center justify-center text-lg`}
                >
                  {getMoodEmoji(entry.mood)}
                </div>
                <span className="text-xs text-muted-foreground">{dayNum}</span>
              </motion.div>
            )
          })}
        </div>

        {/* Recent Entries with Notes */}
        <div className="space-y-3">
          {mockMoodHistory
            .filter((e) => e.note)
            .slice(0, 3)
            .map((entry, index) => {
              const date = new Date(entry.date)
              const formattedDate = date.toLocaleDateString("es-CO", {
                day: "numeric",
                month: "short",
              })

              return (
                <motion.div
                  key={entry.date}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl"
                >
                  <div
                    className={`w-10 h-10 rounded-full ${getMoodColor(
                      entry.mood
                    )} flex items-center justify-center text-lg flex-shrink-0`}
                  >
                    {getMoodEmoji(entry.mood)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">{entry.note}</p>
                    <span className="text-xs text-muted-foreground">{formattedDate}</span>
                  </div>
                </motion.div>
              )
            })}
        </div>

        {/* Insights */}
        <div className="mt-8 pt-6 border-t border-border">
          <h4 className="font-medium text-foreground mb-4">Insights de la semana</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-primary/5 rounded-xl">
              <span className="text-2xl font-serif font-semibold text-primary">
                57%
              </span>
              <p className="text-sm text-muted-foreground">Días positivos</p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-xl">
              <span className="text-2xl font-serif font-semibold text-foreground">
                Martes
              </span>
              <p className="text-sm text-muted-foreground">Mejor día promedio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
