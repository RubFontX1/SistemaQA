import Link from "next/link"
import { CodeBlock } from "@/components/tutorial/CodeBlock"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Flame, CheckCircle2, XCircle, ArrowRight, BookOpen, Clock, BarChart } from "lucide-react"

export default function PruebasHumoTutorial() {
  return (
    <div className="container max-w-4xl py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link href="/modules/pruebas-web" className="text-sm text-muted-foreground hover:text-primary">
          ← Volver a Pruebas Web
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900">
            <Flame className="h-8 w-8 text-orange-600 dark:text-orange-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Pruebas de Humo</h1>
            <p className="text-muted-foreground flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <BarChart className="h-4 w-4" />
                Principiante
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                30 minutos
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Contenido del Tutorial
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li><a href="#introduccion" className="hover:text-primary">¿Qué son las pruebas de humo?</a></li>
            <li><a href="#cuando-usar" className="hover:text-primary">¿Cuándo usar pruebas de humo?</a></li>
            <li><a href="#requisitos" className="hover:text-primary">Requisitos previos</a></li>
            <li><a href="#instalacion" className="hover:text-primary">Instalación de Playwright</a></li>
            <li><a href="#primera-prueba" className="hover:text-primary">Tu primera prueba de humo</a></li>
            <li><a href="#ejemplo-login" className="hover:text-primary">Ejemplo: Verificar Login</a></li>
            <li><a href="#buenas-practicas" className="hover:text-primary">Buenas prácticas</a></li>
            <li><a href="#siguiente" className="hover:text-primary">Próximos pasos</a></li>
          </ol>
        </CardContent>
      </Card>

      {/* Content */}
      <div className="prose prose-zinc dark:prose-invert max-w-none">

        {/* Introducción */}
        <section id="introduccion" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-4">¿Qué son las Pruebas de Humo?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Las pruebas de humo (smoke testing) son pruebas básicas que verifican que las funcionalidades
            principales de tu aplicación funcionan correctamente. Son como "encender la aplicación y ver si no explota".
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ¿Qué SÍ verifica?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>✓ La aplicación carga correctamente</li>
                  <li>✓ Elementos críticos están presentes</li>
                  <li>✓ Funcionalidades básicas funcionan</li>
                  <li>✓ No hay errores evidentes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  ¿Qué NO verifica?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>✗ Casos edge complejos</li>
                  <li>✗ Validaciones exhaustivas</li>
                  <li>✗ Performance detallado</li>
                  <li>✗ Flujos completos de usuario</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cuándo usar */}
        <section id="cuando-usar" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-4">¿Cuándo usar Pruebas de Humo?</h2>
          <div className="space-y-3">
            <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950">
              <strong>Después de cada deploy:</strong> Verifica que el deployment no rompió nada crítico
            </div>
            <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-950">
              <strong>Antes de pruebas exhaustivas:</strong> No tiene sentido hacer testing profundo si lo básico no funciona
            </div>
            <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950">
              <strong>En pipelines CI/CD:</strong> Primera línea de defensa en tu pipeline de integración continua
            </div>
            <div className="p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950">
              <strong>Pull Requests:</strong> Asegura que los cambios no afectan funcionalidad básica
            </div>
          </div>
        </section>

        {/* Requisitos */}
        <section id="requisitos" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-4">Requisitos Previos</h2>
          <p className="mb-4">Antes de comenzar, asegúrate de tener:</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Node.js 18 o superior instalado</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <span>npm o yarn como gestor de paquetes</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Conocimientos básicos de JavaScript/TypeScript</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Una aplicación web para testear (o usa nuestros ejemplos)</span>
            </li>
          </ul>
        </section>

        {/* Instalación */}
        <section id="instalacion" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-4">Instalación de Playwright</h2>
          <p className="mb-6">
            Usaremos Playwright como framework de testing. Es moderno, rápido y soporta múltiples navegadores.
          </p>

          <h3 className="text-2xl font-bold mb-4">Paso 1: Crear un proyecto nuevo</h3>
          <CodeBlock
            language="bash"
            code={`# Crear carpeta del proyecto
mkdir mi-proyecto-qa
cd mi-proyecto-qa

# Inicializar proyecto Node.js
npm init -y`}
          />

          <h3 className="text-2xl font-bold mb-4 mt-8">Paso 2: Instalar Playwright</h3>
          <CodeBlock
            language="bash"
            code={`# Instalar Playwright y navegadores
npm init playwright@latest

# O si prefieres instalación manual:
npm install -D @playwright/test
npx playwright install`}
          />

          <div className="my-6 p-4 border border-blue-500 bg-blue-50 dark:bg-blue-950 rounded-lg">
            <p className="text-sm">
              <strong>💡 Tip:</strong> Playwright instalará Chrome, Firefox y Safari automáticamente.
              Esto puede tomar unos minutos la primera vez.
            </p>
          </div>
        </section>

        {/* Primera Prueba */}
        <section id="primera-prueba" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-4">Tu Primera Prueba de Humo</h2>
          <p className="mb-6">
            Vamos a crear una prueba simple que verifica que una página web carga correctamente.
          </p>

          <h3 className="text-2xl font-bold mb-4">Paso 3: Crear el archivo de prueba</h3>
          <CodeBlock
            language="typescript"
            filename="tests/smoke.spec.ts"
            code={`import { test, expect } from '@playwright/test';

// Describe el grupo de pruebas
test.describe('Pruebas de Humo', () => {

  // Primera prueba: verificar que la página carga
  test('La página principal debe cargar correctamente', async ({ page }) => {
    // 1. Navegar a la URL
    await page.goto('https://ejemplo.com');

    // 2. Verificar que el título no está vacío
    const title = await page.title();
    expect(title).not.toBe('');

    // 3. Verificar que la página responde (status 200)
    expect(page.url()).toContain('ejemplo.com');
  });

  // Segunda prueba: verificar elementos críticos
  test('Elementos críticos deben estar visibles', async ({ page }) => {
    await page.goto('https://ejemplo.com');

    // Verificar que el logo está visible
    const logo = page.locator('img[alt*="logo"]');
    await expect(logo).toBeVisible();

    // Verificar que el menú de navegación existe
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  // Tercera prueba: verificar que no hay errores en consola
  test('No debe haber errores críticos en consola', async ({ page }) => {
    // Capturar errores de consola
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('https://ejemplo.com');

    // Esperar un momento para que se carguen los scripts
    await page.waitForLoadState('networkidle');

    // Verificar que no hay errores críticos
    expect(errors.length).toBe(0);
  });
});`}
          />

          <h3 className="text-2xl font-bold mb-4 mt-8">Paso 4: Ejecutar las pruebas</h3>
          <CodeBlock
            language="bash"
            code={`# Ejecutar todas las pruebas
npx playwright test

# Ejecutar en modo headed (ver el navegador)
npx playwright test --headed

# Ejecutar solo las pruebas de humo
npx playwright test smoke

# Ver el reporte
npx playwright show-report`}
          />
        </section>

        {/* Ejemplo Login */}
        <section id="ejemplo-login" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-4">Ejemplo Real: Verificar Login Básico</h2>
          <p className="mb-6">
            Un caso común es verificar que el sistema de login funciona sin entrar en detalles.
          </p>

          <CodeBlock
            language="typescript"
            filename="tests/smoke-login.spec.ts"
            code={`import { test, expect } from '@playwright/test';

test.describe('Smoke Test - Login', () => {

  test('El formulario de login debe estar accesible', async ({ page }) => {
    // Ir a la página de login
    await page.goto('https://ejemplo.com/login');

    // Verificar que el formulario existe
    await expect(page.locator('form')).toBeVisible();

    // Verificar campos básicos
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('Login con credenciales válidas debe funcionar', async ({ page }) => {
    await page.goto('https://ejemplo.com/login');

    // Llenar formulario
    await page.fill('input[type="email"]', 'test@ejemplo.com');
    await page.fill('input[type="password"]', 'password123');

    // Hacer clic en login
    await page.click('button[type="submit"]');

    // Verificar redirección exitosa (sin verificar TODO el flujo)
    await page.waitForURL('**/dashboard');
    expect(page.url()).toContain('/dashboard');
  });

  test('Login con credenciales inválidas debe mostrar error', async ({ page }) => {
    await page.goto('https://ejemplo.com/login');

    // Intentar login con credenciales incorrectas
    await page.fill('input[type="email"]', 'wrong@ejemplo.com');
    await page.fill('input[type="password"]', 'wrongpass');
    await page.click('button[type="submit"]');

    // Verificar que aparece algún mensaje de error
    const errorMessage = page.locator('[role="alert"], .error-message');
    await expect(errorMessage).toBeVisible();
  });
});`}
          />
        </section>

        {/* Buenas Prácticas */}
        <section id="buenas-practicas" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-4">Buenas Prácticas</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">✅ Mantén las pruebas rápidas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Las pruebas de humo deben ejecutarse en menos de 5 minutos. Si tardan más,
                  probablemente estás probando demasiado.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">✅ Prueba solo lo crítico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Enfócate en funcionalidades que, si fallan, harían la aplicación inutilizable:
                  login, página principal, navegación básica.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">✅ Usa datos de prueba consistentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ten usuarios de prueba dedicados que no cambien. Evita usar datos de producción.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">✅ Automatiza en CI/CD</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Integra estas pruebas en tu pipeline para que se ejecuten automáticamente
                  en cada deploy o pull request.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Siguiente */}
        <section id="siguiente" className="mb-12 scroll-mt-20">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-none">
            <CardHeader>
              <CardTitle className="text-2xl">🎉 ¡Felicitaciones!</CardTitle>
              <CardDescription className="text-base">
                Has completado el tutorial de Pruebas de Humo. Ahora sabes cómo crear pruebas básicas
                que verifican la funcionalidad crítica de tu aplicación.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-sm">
                <strong>Próximos pasos recomendados:</strong>
              </p>
              <div className="flex flex-col gap-2">
                <Button asChild variant="default">
                  <Link href="/modules/pruebas-web/pruebas-api">
                    Siguiente: Pruebas de API <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/modules/pruebas-web">
                    Ver todos los tutoriales del módulo
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
