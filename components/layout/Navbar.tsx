"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FlaskConical, Menu, Sparkles, Github, Workflow, Rocket, Target, HelpCircle, X } from "lucide-react"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { smokeTour, practicePagesTour, welcomeTour } from "@/lib/tours"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-card/80 backdrop-blur-xl supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
          <div className="relative">
            <FlaskConical className="h-6 w-6 sm:h-7 sm:w-7 text-primary transition-transform group-hover:scale-110" />
            <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-accent absolute -top-1 -right-1 animate-pulse" />
          </div>
          <span className="font-bold text-lg sm:text-xl text-primary">
            Sistema QA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
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
            Práctica
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

        {/* Desktop Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Tours Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary h-9 w-9"
                title="Tours Guiados"
              >
                <HelpCircle className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => { welcomeTour(); closeMobileMenu(); }} className="cursor-pointer">
                <Sparkles className="mr-2 h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">Tour de Bienvenida</div>
                  <div className="text-xs text-muted-foreground">Conoce Sistema QA</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => { smokeTour(); closeMobileMenu(); }} className="cursor-pointer">
                <Workflow className="mr-2 h-4 w-4 text-accent" />
                <div>
                  <div className="font-medium">Pruebas de Humo</div>
                  <div className="text-xs text-muted-foreground">Cómo llegar</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => { practicePagesTour(); closeMobileMenu(); }} className="cursor-pointer">
                <Target className="mr-2 h-4 w-4 text-accent" />
                <div>
                  <div className="font-medium">Páginas de Práctica</div>
                  <div className="text-xs text-muted-foreground">Sitios para practicar</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeToggle />

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-2">
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

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden hover:bg-primary/10 h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <FlaskConical className="h-5 w-5 text-primary" />
                  Sistema QA
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-4 mt-8">
                {/* Navigation Links */}
                <div className="flex flex-col gap-2">
                  <SheetClose asChild>
                    <Link
                      href="/projects"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <Rocket className="h-5 w-5 text-primary" />
                      <span className="font-medium">Proyectos</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/practice-sites"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <Target className="h-5 w-5 text-primary" />
                      <span className="font-medium">Páginas de Práctica</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/modules/pruebas-web"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <Workflow className="h-5 w-5 text-primary" />
                      <span className="font-medium">Módulos</span>
                    </Link>
                  </SheetClose>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors"
                  >
                    <Github className="h-5 w-5 text-accent" />
                    <span className="font-medium">GitHub</span>
                  </Link>
                </div>

                {/* Divider */}
                <div className="border-t border-border my-2" />

                {/* Auth Buttons */}
                <div className="flex flex-col gap-2">
                  <SheetClose asChild>
                    <Button variant="outline" asChild className="w-full justify-start">
                      <Link href="/login">
                        Iniciar Sesión
                      </Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild className="w-full justify-start bg-primary">
                      <Link href="/register">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Registrarse
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
