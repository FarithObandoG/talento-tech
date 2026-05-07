"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { StressTest } from "@/components/stress-test"
import { BreathingExercise } from "@/components/breathing-exercise"
import { MoodTracker } from "@/components/mood-tracker"
import { WellnessTips } from "@/components/wellness-tips"
import { Brain, Wind, Heart, Lightbulb } from "lucide-react"

const tabs = [
  { id: "stress-test", label: "Test de Estrés", icon: Brain },
  { id: "breathing", label: "Respiración", icon: Wind },
  { id: "mood", label: "Estado de Ánimo", icon: Heart },
  { id: "tips", label: "Tips", icon: Lightbulb },
]

export default function BienestarPage() {
  const [activeTab, setActiveTab] = useState("stress-test")

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Tu Bienestar"
            title="Herramientas para tu paz interior"
            description="Explora nuestras herramientas interactivas diseñadas para ayudarte a entender y mejorar tu bienestar emocional."
          />
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-border sticky top-16 lg:top-20 bg-background/95 backdrop-blur-md z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-foreground hover:bg-secondary"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "stress-test" && <StressTest />}
            {activeTab === "breathing" && <BreathingExercise />}
            {activeTab === "mood" && <MoodTracker />}
            {activeTab === "tips" && <WellnessTips />}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
