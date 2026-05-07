"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Filter, X } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { ExperienceCard } from "@/components/experience-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { experiences, categories } from "@/lib/mock-data"

export default function ExperienciasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const filteredExperiences = selectedCategory
    ? experiences.filter((exp) => exp.category.id === selectedCategory)
    : experiences

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Experiencias"
            title="Encuentra tu momento de paz"
            description="Cada experiencia está diseñada para diferentes necesidades. Filtra por categoría y encuentra la que mejor se adapte a ti."
          />
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-16 lg:top-20 bg-background/95 backdrop-blur-md z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-4 lg:mb-0">
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <Filter className="h-4 w-4" />
                Filtros
                {selectedCategory && (
                  <Badge variant="secondary" className="ml-1">1</Badge>
                )}
              </Button>
              {selectedCategory && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className="gap-1 text-muted-foreground"
                >
                  <X className="h-4 w-4" />
                  Limpiar
                </Button>
              )}
            </div>
            
            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-3 flex-wrap">
              <span className="text-sm text-muted-foreground mr-2">Filtrar por:</span>
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className="rounded-full"
              >
                Todas
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="rounded-full"
                >
                  {category.name}
                </Button>
              ))}
            </div>

            <p className="text-sm text-muted-foreground hidden lg:block">
              {filteredExperiences.length} experiencias
            </p>
          </div>

          {/* Mobile Filters Dropdown */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pt-4 border-t border-border mt-4"
            >
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(null)
                    setShowFilters(false)
                  }}
                  className="rounded-full"
                >
                  Todas
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedCategory(category.id)
                      setShowFilters(false)
                    }}
                    className="rounded-full"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredExperiences.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">
                No hay experiencias en esta categoría.
              </p>
              <Button
                variant="outline"
                onClick={() => setSelectedCategory(null)}
                className="mt-4"
              >
                Ver todas las experiencias
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredExperiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
