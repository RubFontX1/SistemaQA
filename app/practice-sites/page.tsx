"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  practiceSites,
  getDifficultyColor,
  getDifficultyBg,
  categories,
  difficulties,
  type SiteCategory,
  type SiteDifficulty
} from "@/lib/practice-sites-data"
import { ExternalLink, Search, Target, Sparkles, Key } from "lucide-react"

export default function PracticeSitesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<SiteCategory | "all">("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState<SiteDifficulty | "all">("all")

  const filteredSites = practiceSites.filter(site => {
    const matchesSearch = site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         site.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || site.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "all" || site.difficulty === selectedDifficulty

    return matchesSearch && matchesCategory && matchesDifficulty
  })

  return (
    <div className="container max-w-7xl py-12">
      {/* Hero Section */}
      <div className="text-center mb-12 space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Target className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold text-primary">
            Practica en Sitios Reales
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Colección curada de sitios web reales diseñados para practicar testing.
          Desde e-commerce hasta APIs, encuentra el entorno perfecto para mejorar tus habilidades.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-accent" />
          <span>{practiceSites.length} sitios disponibles para practicar</span>
        </div>
      </div>

      {/* Filters Section */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar sitios..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category & Difficulty Filters */}
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("all")}
            >
              Todas las categorías
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedDifficulty === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDifficulty("all")}
            >
              Todas las dificultades
            </Button>
            {difficulties.map(difficulty => (
              <Button
                key={difficulty}
                variant={selectedDifficulty === difficulty ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDifficulty(difficulty)}
              >
                {difficulty}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center mb-6">
        <p className="text-sm text-muted-foreground">
          Mostrando {filteredSites.length} de {practiceSites.length} sitios
        </p>
      </div>

      {/* Sites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSites.map((site) => {
          const Icon = site.icon
          return (
            <Card
              key={site.id}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/20 bg-card/50 backdrop-blur"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  {site.recommended && (
                    <Badge variant="default" className="bg-accent text-accent-foreground">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Recomendado
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {site.name}
                </CardTitle>
                <CardDescription className="text-sm">
                  {site.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Category & Difficulty Badges */}
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="text-xs">
                    {site.category}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`text-xs ${getDifficultyBg(site.difficulty)} ${getDifficultyColor(site.difficulty)} border`}
                  >
                    {site.difficulty}
                  </Badge>
                </div>

                {/* Features */}
                <div>
                  <p className="text-sm font-semibold mb-2 text-muted-foreground">Características:</p>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    {site.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-1">
                        <span className="text-primary">•</span>
                        {feature}
                      </li>
                    ))}
                    {site.features.length > 3 && (
                      <li className="text-primary/60">
                        +{site.features.length - 3} más...
                      </li>
                    )}
                  </ul>
                </div>

                {/* Credentials */}
                {site.credentials && (
                  <div className="p-3 rounded-lg bg-muted/50 border border-primary/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Key className="h-3 w-3 text-primary" />
                      <p className="text-xs font-semibold text-primary">Credenciales de prueba:</p>
                    </div>
                    {site.credentials.username && (
                      <p className="text-xs text-muted-foreground">
                        Usuario: <code className="text-primary">{site.credentials.username}</code>
                      </p>
                    )}
                    {site.credentials.password && (
                      <p className="text-xs text-muted-foreground">
                        Pass: <code className="text-primary">{site.credentials.password}</code>
                      </p>
                    )}
                    {site.credentials.note && (
                      <p className="text-xs text-muted-foreground mt-1 italic">
                        {site.credentials.note}
                      </p>
                    )}
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button
                  asChild
                  className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visitar Sitio
                  </a>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      {/* Empty State */}
      {filteredSites.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground space-y-2">
            <p className="text-lg">No se encontraron sitios con esos filtros</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
                setSelectedDifficulty("all")
              }}
            >
              Limpiar filtros
            </Button>
          </div>
        </div>
      )}

      {/* Tips Section */}
      <div className="mt-16 p-8 rounded-lg bg-muted/30 border border-primary/20">
        <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
          <Sparkles className="h-6 w-6" />
          Consejos para Practicar
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2 text-foreground">Para Principiantes:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Comienza con sitios de dificultad "Fácil"</li>
              <li>• Practica flujos básicos antes de casos complejos</li>
              <li>• Documenta tus pruebas y aprendizajes</li>
              <li>• No te frustres, todos empezamos aquí</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-foreground">Para Avanzados:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Implementa Page Object Model</li>
              <li>• Crea suites de tests completas</li>
              <li>• Integra con CI/CD</li>
              <li>• Practica data-driven testing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
