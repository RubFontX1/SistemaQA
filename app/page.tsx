import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FlaskConical,
  Zap,
  BarChart3,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Code2,
  Workflow,
  GitBranch,
  TestTube2,
  Rocket,
  Shield,
  Bot
} from "lucide-react"

export default function HomePage() {
  const modules = [
    {
      id: "pruebas-web",
      title: "Pruebas Web",
      description: "Aprende a testear aplicaciones web: pruebas de humo, API, E2E y más",
      icon: FlaskConical,
      tutorialCount: 6,
      gradient: "from-blue-600 to-cyan-600",
      href: "/modules/pruebas-web"
    },
    {
      id: "pruebas-unitarias",
      title: "Pruebas Unitarias",
      description: "Testing de componentes y funciones individuales",
      icon: TestTube2,
      tutorialCount: 8,
      gradient: "from-cyan-600 to-blue-500",
      href: "#",
      comingSoon: true
    },
    {
      id: "cicd",
      title: "CI/CD & Automatización",
      description: "Pipelines, GitHub Actions, Jenkins y deployment automatizado",
      icon: Workflow,
      tutorialCount: 5,
      gradient: "from-blue-500 to-indigo-600",
      href: "#",
      comingSoon: true
    },
    {
      id: "herramientas",
      title: "Herramientas QA",
      description: "Playwright, Cypress, Jest, Selenium y más",
      icon: Wrench,
      tutorialCount: 10,
      gradient: "from-indigo-600 to-purple-600",
      href: "#",
      comingSoon: true
    }
  ]

  const features = [
    {
      icon: Code2,
      title: "Código Real",
      description: "Ejemplos prácticos del mundo real"
    },
    {
      icon: Rocket,
      title: "Aprende Rápido",
      description: "Tutoriales paso a paso optimizados"
    },
    {
      icon: GitBranch,
      title: "CI/CD Integrado",
      description: "Aprende automatización desde el día 1"
    },
    {
      icon: Bot,
      title: "Automatización",
      description: "Scripts y bots de testing avanzados"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section with Ocean Background */}
      <section className="relative container py-20 md:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-6 text-center">
          {/* Badge */}
          <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-primary font-medium">Plataforma de Testing Profesional</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
            Domina el{" "}
            <span className="text-gradient">
              Testing
            </span>
            <br />
            de Software
          </h1>

          {/* Subtitle */}
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl md:text-2xl leading-relaxed">
            Aprende QA, automatización y CI/CD con tutoriales interactivos.
            De principiante a experto en{" "}
            <span className="text-primary font-semibold">testing profesional</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" asChild className="bg-gradient-ocean hover:opacity-90 transition-all text-lg px-8 py-6 h-auto">
              <Link href="/modules/pruebas-web">
                <Rocket className="mr-2 h-5 w-5" />
                Comenzar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary/30 hover:bg-primary/5 text-lg px-8 py-6 h-auto">
              <Link href="/modules/pruebas-web">
                <FlaskConical className="mr-2 h-5 w-5" />
                Ver Tutoriales
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border/50">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient">29+</div>
              <div className="text-sm text-muted-foreground mt-1">Tutoriales</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient">4</div>
              <div className="text-sm text-muted-foreground mt-1">Módulos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Gratis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="container py-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden border-primary/20 bg-gradient-ocean-subtle hover:border-primary/40 transition-all hover:card-glow group">
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="container py-20">
        <div className="mx-auto max-w-[1200px]">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Módulos de Aprendizaje</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Elige Tu{" "}
              <span className="text-gradient">Camino</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
              Desde pruebas básicas hasta CI/CD avanzado
            </p>
          </div>

          {/* Modules */}
          <div className="grid gap-6 md:grid-cols-2">
            {modules.map((module, index) => {
              const Icon = module.icon
              return (
                <Card
                  key={module.id}
                  className="relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all group hover:card-glow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />

                  {/* Coming Soon Badge */}
                  {module.comingSoon && (
                    <div className="absolute top-4 right-4 z-10 bg-muted/90 backdrop-blur text-muted-foreground text-xs px-3 py-1 rounded-full border border-border">
                      Próximamente
                    </div>
                  )}

                  <CardHeader className="relative">
                    <div className="flex items-start gap-4 mb-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${module.gradient} shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{module.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <TestTube2 className="h-4 w-4" />
                          <span>{module.tutorialCount} tutoriales</span>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {module.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative">
                    <Button
                      asChild
                      variant={module.comingSoon ? "outline" : "default"}
                      className={`w-full ${!module.comingSoon && "bg-gradient-ocean hover:opacity-90"}`}
                      disabled={module.comingSoon}
                    >
                      <Link href={module.href}>
                        {module.comingSoon ? (
                          <>
                            <Sparkles className="mr-2 h-4 w-4" />
                            Próximamente
                          </>
                        ) : (
                          <>
                            Explorar Módulo
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-[900px]">
          <Card className="relative overflow-hidden border-primary/30 bg-gradient-ocean-subtle">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-blue-700/10" />
            <CardContent className="relative p-12 text-center">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-6 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para convertirte en un{" "}
                <span className="text-gradient">QA Expert</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
                Únete a miles de ingenieros que ya están dominando el testing y la automatización
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-gradient-ocean hover:opacity-90">
                  <Link href="/register">
                    <Rocket className="mr-2 h-5 w-5" />
                    Crear Cuenta Gratis
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary/30 hover:bg-primary/5">
                  <Link href="/modules/pruebas-web">
                    Ver Tutoriales
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
