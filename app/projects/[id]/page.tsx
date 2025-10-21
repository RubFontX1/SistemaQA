"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects, getLevelColor, getLevelBg } from "@/lib/projects-data"
import { ArrowLeft, Play, RotateCcw, CheckCircle2, Terminal as TerminalIcon, Code2, Eye } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

// Importar Monaco de forma dinámica para evitar problemas de SSR
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false })

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string

  const project = projects.find(p => p.id === projectId)

  const [code, setCode] = useState("")
  const [terminalOutput, setTerminalOutput] = useState<string[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [activeTab, setActiveTab] = useState<"editor" | "terminal" | "preview">("editor")
  const [testsPassed, setTestsPassed] = useState(0)
  const [totalTests, setTotalTests] = useState(0)

  useEffect(() => {
    if (project) {
      setCode(project.starterCode)
    }
  }, [project])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Proyecto no encontrado</CardTitle>
            <CardDescription>El proyecto que buscas no existe</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Proyectos
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const Icon = project.icon

  const handleRunTests = async () => {
    setIsRunning(true)
    setTerminalOutput([])
    setActiveTab("terminal")

    // Simulación de ejecución de tests
    const outputs = [
      "🚀 Iniciando suite de tests...",
      `📦 Cargando configuración de ${project.tools[0]}...`,
      "",
      "✓ Test 1: Verificar navegación a la página principal",
      "✓ Test 2: Validar elementos de la interfaz",
      "✓ Test 3: Interacción con formularios",
    ]

    for (let i = 0; i < outputs.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 500))
      setTerminalOutput(prev => [...prev, outputs[i]])
    }

    await new Promise(resolve => setTimeout(resolve, 1000))
    setTerminalOutput(prev => [...prev, "", "📊 Resultados:", "✅ 3 tests pasados", "❌ 0 tests fallados", "⏱️  Tiempo: 2.3s"])
    setTestsPassed(3)
    setTotalTests(3)
    setIsRunning(false)
  }

  const handleReset = () => {
    setCode(project.starterCode)
    setTerminalOutput([])
    setTestsPassed(0)
    setTotalTests(0)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/projects">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{project.shortTitle}</h1>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className={getLevelBg(project.level)}>
                {project.level}
              </Badge>
              <Badge variant="outline">
                {project.duration}
              </Badge>
              {totalTests > 0 && (
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  {testsPassed}/{totalTests} tests
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main IDE Layout - Split Horizontal */}
      <div className="h-[calc(100vh-10rem)] flex gap-0">
        {/* Left Panel - Code Editor & Terminal */}
        <div className="w-1/2 border-r border-border flex flex-col">
          {/* Tabs & Actions */}
          <div className="border-b border-border bg-muted/30 flex-shrink-0">
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center gap-2">
                <Button
                  variant={activeTab === "editor" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("editor")}
                  className="gap-2"
                >
                  <Code2 className="h-4 w-4" />
                  Editor
                </Button>
                <Button
                  variant={activeTab === "terminal" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("terminal")}
                  className="gap-2"
                >
                  <TerminalIcon className="h-4 w-4" />
                  Terminal
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  disabled={isRunning}
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reiniciar
                </Button>
                <Button
                  size="sm"
                  onClick={handleRunTests}
                  disabled={isRunning}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Play className="mr-2 h-4 w-4" />
                  {isRunning ? "Ejecutando..." : "Ejecutar Tests"}
                </Button>
              </div>
            </div>
          </div>

          {/* Editor/Terminal Content */}
          <div className="flex-1 overflow-hidden">
            {activeTab === "editor" && (
              <MonacoEditor
                height="100%"
                defaultLanguage="javascript"
                value={code}
                onChange={(value) => setCode(value || "")}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: "on",
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  padding: { top: 16, bottom: 16 },
                }}
              />
            )}

            {activeTab === "terminal" && (
              <div className="h-full bg-[#1e1e1e] text-green-400 font-mono text-sm p-4 overflow-auto">
                {terminalOutput.length === 0 ? (
                  <div className="text-muted-foreground">
                    Presiona "Ejecutar Tests" para comenzar...
                  </div>
                ) : (
                  terminalOutput.map((line, i) => (
                    <div key={i} className="mb-1">
                      {line}
                    </div>
                  ))
                )}
                {isRunning && (
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Ejecutando...
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Preview & Info */}
        <div className="w-1/2 flex flex-col bg-muted/20">
          {/* Preview Header */}
          <div className="border-b border-border bg-muted/30 px-4 py-2 flex-shrink-0">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Sitio de Práctica
              </h3>
              <Button asChild variant="outline" size="sm">
                <a href={project.practiceUrl} target="_blank" rel="noopener noreferrer">
                  Abrir en nueva pestaña
                </a>
              </Button>
            </div>
          </div>

          {/* Preview Content - Split vertical */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Iframe - Toma la mayor parte */}
            <div className="flex-1 bg-background overflow-hidden">
              <iframe
                src={project.practiceUrl}
                className="w-full h-full border-0"
                title="Practice Site Preview"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              />
            </div>

            {/* Project Info - Compacto en la parte inferior */}
            <div className="h-64 border-t border-border overflow-auto bg-card">
              <div className="p-4 space-y-4">
                {/* Objectives */}
                <div>
                  <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Objetivos
                  </h4>
                  <div className="space-y-1.5">
                    {project.objectives.slice(0, 3).map((obj, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Learning Goals */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-xs text-muted-foreground">HERRAMIENTAS</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tools.map(tool => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-xs text-muted-foreground">APRENDERÁS</h4>
                    <div className="space-y-1">
                      {project.learningGoals.slice(0, 2).map((goal, i) => (
                        <div key={i} className="text-xs text-muted-foreground">
                          • {goal}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
