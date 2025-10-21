"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FlaskConical, Menu, Sparkles, Github, Workflow, Rocket, Target, HelpCircle } from "lucide-react"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { smokeTour, practicePagesTour, welcomeTour } from "@/lib/tours"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-card/80 backdrop-blur-xl supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <FlaskConical className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
              <Sparkles className="h-3 w-3 text-accent absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="font-bold text-xl text-primary">
              Sistema QA
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              id="nav-projects"
              href="/projects"
              className="text-sm font-medium transition-all hover:text-primary hover:scale-105 flex items-center gap-1"
            >
              <Rocket className="h-4 w-4" />
              Proyectos
            </Link>
            <Link
              id="nav-practice-sites"
              href="/practice-sites"
              className="text-sm font-medium transition-all hover:text-primary hover:scale-105 flex items-center gap-1"
            >
              <Target className="h-4 w-4" />
              Practica en Sitios Reales
            </Link>
            <Link
              id="nav-practice"
              href="/modules/pruebas-web"
              className="text-sm font-medium transition-all hover:text-primary hover:scale-105 flex items-center gap-1"
            >
              <Workflow className="h-4 w-4" />
              Módulos
            </Link>
            <Link
              id="nav-study"
              href="https://github.com"
              target="_blank"
              className="text-sm font-medium transition-all hover:text-accent hover:scale-105 flex items-center gap-1"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary"
                title="Tours Guiados"
              >
                <HelpCircle className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => welcomeTour()} className="cursor-pointer">
                <Sparkles className="mr-2 h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">Tour de Bienvenida</div>
                  <div className="text-xs text-muted-foreground">Conoce Sistema QA</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => smokeTour()} className="cursor-pointer">
                <Workflow className="mr-2 h-4 w-4 text-accent" />
                <div>
                  <div className="font-medium">Pruebas de Humo</div>
                  <div className="text-xs text-muted-foreground">Cómo llegar a las pruebas</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => practicePagesTour()} className="cursor-pointer">
                <Target className="mr-2 h-4 w-4 text-accent" />
                <div>
                  <div className="font-medium">Páginas de Práctica</div>
                  <div className="text-xs text-muted-foreground">Sitios para practicar QA</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeToggle />

          <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary/10">
            <Menu className="h-5 w-5" />
          </Button>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild className="hover:bg-primary/10 hover:text-primary">
              <Link href="/login">
                Iniciar Sesión
              </Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 transition-colors">
              <Link href="/register">
                <Sparkles className="mr-2 h-4 w-4" />
                Registrarse
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
