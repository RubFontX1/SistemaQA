"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects, getProjectsByLevel, getLevelColor, getLevelBg, type ProjectLevel } from "@/lib/projects-data"
import { ArrowRight, Clock, Trophy, Target } from "lucide-react"

export default function ProjectsPage() {
  const [selectedLevel, setSelectedLevel] = useState<ProjectLevel | "Todos">("Todos")

  const filteredProjects = selectedLevel === "Todos"
    ? projects
    : getProjectsByLevel(selectedLevel)

  const stats = {
    total: projects.length,
    principiante: projects.filter(p => p.level === "Principiante").length,
    intermedio: projects.filter(p => p.level === "Intermedio").length,
    avanzado: projects.filter(p => p.level === "Avanzado").length,
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Compacto */}
      <section className="border-b border-border bg-card/50">
        <div className="container py-12">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Trophy className="mr-2 h-3 w-3" />
              12 Proyectos Prácticos
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Construye tu <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Proyectos reales de automatización. Desde e-commerce hasta CI/CD.
              <strong className="text-foreground"> No más tutoriales pasivos</strong>, construye y aprende haciendo.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-border bg-muted/30">
        <div className="container py-6">
          <div className="grid grid-cols-4 gap-4">
            <Card className="bg-background/50">
              <CardContent className="pt-6 pb-4">
                <div className="text-3xl font-bold text-primary">{stats.total}</div>
                <div className="text-sm text-muted-foreground">Proyectos Total</div>
              </CardContent>
            </Card>
            <Card className="bg-background/50">
              <CardContent className="pt-6 pb-4">
                <div className="text-3xl font-bold text-green-500">{stats.principiante}</div>
                <div className="text-sm text-muted-foreground">Principiante</div>
              </CardContent>
            </Card>
            <Card className="bg-background/50">
              <CardContent className="pt-6 pb-4">
                <div className="text-3xl font-bold text-yellow-500">{stats.intermedio}</div>
                <div className="text-sm text-muted-foreground">Intermedio</div>
              </CardContent>
            </Card>
            <Card className="bg-background/50">
              <CardContent className="pt-6 pb-4">
                <div className="text-3xl font-bold text-red-500">{stats.avanzado}</div>
                <div className="text-sm text-muted-foreground">Avanzado</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content - Layout tipo Dashboard */}
      <section className="container py-8">
        <div className="flex gap-6">
          {/* Sidebar - Filtros */}
          <aside className="w-64 flex-shrink-0">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle className="text-lg">Filtrar por Nivel</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={selectedLevel === "Todos" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedLevel("Todos")}
                >
                  <Target className="mr-2 h-4 w-4" />
                  Todos ({stats.total})
                </Button>
                <Button
                  variant={selectedLevel === "Principiante" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedLevel("Principiante")}
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                  Principiante ({stats.principiante})
                </Button>
                <Button
                  variant={selectedLevel === "Intermedio" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedLevel("Intermedio")}
                >
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2" />
                  Intermedio ({stats.intermedio})
                </Button>
                <Button
                  variant={selectedLevel === "Avanzado" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedLevel("Avanzado")}
                >
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                  Avanzado ({stats.avanzado})
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Grid de Proyectos - NO scroll infinito, grid compacto */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {selectedLevel === "Todos" ? "Todos los Proyectos" : `Nivel ${selectedLevel}`}
              </h2>
              <div className="text-sm text-muted-foreground">
                {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? 's' : ''}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {filteredProjects.map((project, index) => {
                const Icon = project.icon
                return (
                  <Card
                    key={project.id}
                    className="group hover:border-primary/40 transition-all hover:shadow-lg relative overflow-hidden"
                  >
                    {/* Badge de nivel */}
                    <div className="absolute top-4 right-4">
                      <Badge className={`${getLevelBg(project.level)} border`}>
                        {project.level}
                      </Badge>
                    </div>

                    <CardHeader>
                      <div className="flex items-start gap-4 mb-2">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {project.shortTitle}
                          </CardTitle>
                          <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {project.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              {"⭐".repeat(project.difficulty)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="line-clamp-2 text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      {/* Tools */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tools.map(tool => (
                          <Badge key={tool} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>

                      {/* Features preview */}
                      <div className="space-y-1 mb-4 text-sm">
                        {project.objectives.slice(0, 3).map((obj, i) => (
                          <div key={i} className="flex items-center gap-2 text-muted-foreground">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            {obj}
                          </div>
                        ))}
                        {project.objectives.length > 3 && (
                          <div className="text-xs text-muted-foreground pl-3">
                            +{project.objectives.length - 3} más...
                          </div>
                        )}
                      </div>

                      <Button asChild className="w-full group-hover:bg-primary/90">
                        <Link href={`/projects/${project.id}`}>
                          Comenzar Proyecto
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
