"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe, Lock, Database, ShoppingCart, FileText, Users, Play } from "lucide-react"
import Link from "next/link"

export function PracticeSites() {
  const sites = [
    {
      name: "The Internet",
      url: "https://the-internet.herokuapp.com/",
      description: "Sitio clásico de práctica con 40+ escenarios de testing diferentes",
      icon: Globe,
      features: ["Login", "Checkboxes", "Drag & Drop", "Alerts", "File Upload"],
      difficulty: "Principiante",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Sauce Demo",
      url: "https://www.saucedemo.com/",
      description: "E-commerce de prueba con múltiples usuarios y escenarios",
      icon: ShoppingCart,
      features: ["Login", "Carrito", "Checkout", "Inventario"],
      difficulty: "Principiante",
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Automation Practice",
      url: "http://www.automationpractice.pl/",
      description: "Tienda online completa para practicar E2E testing",
      icon: ShoppingCart,
      features: ["Registro", "Compra completa", "Búsqueda", "Wishlist"],
      difficulty: "Intermedio",
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "UI Test Automation Playground",
      url: "http://www.uitestingplayground.com/",
      description: "Desafíos específicos de automatización de UI",
      icon: Play,
      features: ["Dynamic ID", "AJAX", "Visibility", "Text Input"],
      difficulty: "Intermedio",
      color: "from-indigo-600 to-purple-600"
    },
    {
      name: "JSONPlaceholder",
      url: "https://jsonplaceholder.typicode.com/",
      description: "API REST gratuita para practicar testing de APIs",
      icon: Database,
      features: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      difficulty: "Principiante",
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "ReqRes",
      url: "https://reqres.in/",
      description: "API de prueba con usuarios, login y registro",
      icon: Users,
      features: ["Users API", "Login", "Register", "Delayed Response"],
      difficulty: "Principiante",
      color: "from-pink-600 to-rose-600"
    },
    {
      name: "DemoQA",
      url: "https://demoqa.com/",
      description: "Plataforma completa con formularios, widgets y más",
      icon: FileText,
      features: ["Forms", "Alerts", "Tables", "Widgets"],
      difficulty: "Intermedio",
      color: "from-rose-600 to-red-600"
    },
    {
      name: "Practicing Test Automation",
      url: "https://practice.expandtesting.com/",
      description: "Sitio moderno con escenarios realistas de testing",
      icon: Lock,
      features: ["Auth", "Forms", "Dynamic Content", "Notifications"],
      difficulty: "Avanzado",
      color: "from-orange-500 to-amber-600"
    }
  ]

  const difficultyColors = {
    "Principiante": "bg-green-500/10 text-green-400 border-green-500/20",
    "Intermedio": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    "Avanzado": "bg-red-500/10 text-red-400 border-red-500/20"
  }

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Globe className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Sitios de Práctica</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Practica en{" "}
            <span className="text-gradient">Sitios Reales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
            Sitios web especialmente diseñados para practicar testing, automation y QA
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1400px] mx-auto">
          {sites.map((site, index) => {
            const Icon = site.icon
            return (
              <Card
                key={site.name}
                className="group relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all card-3d glassmorphism"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${site.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${site.color} shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full border ${difficultyColors[site.difficulty as keyof typeof difficultyColors]}`}>
                      {site.difficulty}
                    </span>
                  </div>

                  <CardTitle className="text-lg mb-2 line-clamp-1">{site.name}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {site.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5">
                    {site.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                    {site.features.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">
                        +{site.features.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 group"
                  >
                    <Link href={site.url} target="_blank" rel="noopener noreferrer">
                      Visitar Sitio
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-[800px] mx-auto glassmorphism border-primary/30 card-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-3">
                ¿Listo para empezar a practicar?
              </h3>
              <p className="text-muted-foreground mb-6">
                Estos sitios son perfectos para practicar los tutoriales que aprenderás aquí
              </p>
              <Button asChild size="lg" className="bg-gradient-ocean hover:opacity-90">
                <Link href="/modules/pruebas-web">
                  Ir a Tutoriales
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
