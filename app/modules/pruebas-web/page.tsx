import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Flame, Code2, Route, Database, Monitor, ArrowRight, Clock, BarChart } from "lucide-react"

export default function PruebasWebModule() {
  const tutorials = [
    {
      id: "pruebas-humo",
      title: "Pruebas de Humo",
      description: "Verifica que las funcionalidades principales de tu aplicación funcionan correctamente",
      icon: Flame,
      difficulty: "Principiante",
      duration: "30 min",
      href: "/modules/pruebas-web/pruebas-humo",
      available: true
    },
    {
      id: "pruebas-api",
      title: "Pruebas de API",
      description: "Testing de endpoints REST: GET, POST, PUT, DELETE, autenticación",
      icon: Code2,
      difficulty: "Intermedio",
      duration: "45 min",
      href: "/modules/pruebas-web/pruebas-api",
      available: false
    },
    {
      id: "pruebas-e2e",
      title: "Pruebas End-to-End",
      description: "Flujos completos de usuario desde el inicio hasta el fin",
      icon: Route,
      difficulty: "Intermedio",
      duration: "60 min",
      href: "/modules/pruebas-web/pruebas-e2e",
      available: false
    },
    {
      id: "pruebas-con-bd",
      title: "Pruebas con Base de Datos",
      description: "Testing de aplicaciones que interactúan con bases de datos",
      icon: Database,
      difficulty: "Avanzado",
      duration: "50 min",
      href: "/modules/pruebas-web/pruebas-con-bd",
      available: false
    },
    {
      id: "pruebas-ui",
      title: "Pruebas de Interfaz",
      description: "Testing visual, responsividad y accesibilidad",
      icon: Monitor,
      difficulty: "Intermedio",
      duration: "40 min",
      href: "/modules/pruebas-web/pruebas-ui",
      available: false
    },
    {
      id: "pruebas-integracion",
      title: "Pruebas de Integración",
      description: "Testing de múltiples componentes trabajando juntos",
      icon: BarChart,
      difficulty: "Avanzado",
      duration: "55 min",
      href: "/modules/pruebas-web/pruebas-integracion",
      available: false
    }
  ]

  const difficultyColors: Record<string, string> = {
    "Principiante": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "Intermedio": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    "Avanzado": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
  }

  return (
    <div className="container py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/" className="text-sm text-muted-foreground hover:text-primary mb-4 inline-block">
          ← Volver al inicio
        </Link>
        <h1 className="text-4xl font-bold mb-4">Pruebas Web</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Aprende a testear aplicaciones web de forma profesional. Desde pruebas básicas de humo hasta
          testing end-to-end completo con Playwright, Cypress y otras herramientas modernas.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total de Tutoriales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tutorials.length}</div>
            <p className="text-xs text-muted-foreground">{tutorials.filter(t => t.available).length} disponibles ahora</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Duración Estimada</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5 horas</div>
            <p className="text-xs text-muted-foreground">Tiempo total del módulo</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Tu Progreso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0%</div>
            <p className="text-xs text-muted-foreground">0 de {tutorials.length} completados</p>
          </CardContent>
        </Card>
      </div>

      {/* Tutorials Grid */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">Tutoriales del Módulo</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial) => {
            const Icon = tutorial.icon
            return (
              <Card key={tutorial.id} className="relative overflow-hidden transition-all hover:shadow-lg">
                {!tutorial.available && (
                  <div className="absolute top-4 right-4 bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full z-10">
                    Próximamente
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{tutorial.title}</CardTitle>
                      <div className="flex gap-2 flex-wrap mb-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[tutorial.difficulty]}`}>
                          {tutorial.difficulty}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {tutorial.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {tutorial.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant={tutorial.available ? "default" : "outline"}
                    className="w-full"
                    disabled={!tutorial.available}
                  >
                    <Link href={tutorial.href}>
                      {tutorial.available ? (
                        <>
                          Comenzar Tutorial <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        "Próximamente"
                      )}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
