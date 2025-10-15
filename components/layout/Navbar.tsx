"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FlaskConical, Menu, Sparkles, Github, Workflow } from "lucide-react"
import { ThemeToggle } from "@/components/shared/ThemeToggle"

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
              href="/modules/pruebas-web"
              className="text-sm font-medium transition-all hover:text-primary hover:scale-105 flex items-center gap-1"
            >
              <Workflow className="h-4 w-4" />
              Módulos
            </Link>
            <Link
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
