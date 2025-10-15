# 🧪 Sistema QA - Plataforma Educativa de Testing

Una plataforma moderna e interactiva para aprender testing de software, construida con Next.js 15, TypeScript, Tailwind CSS y Prisma con tema **Blue Ocean Dark**.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Características

- 🧪 **Tutoriales Interactivos**: Aprende QA, testing y automatización paso a paso
- 💻 **Code Blocks con Syntax Highlighting**: Código copiable con resaltado profesional
- 🎨 **Tema Blue Ocean Dark**: Diseño oscuro con gradientes azules océano
- 🚀 **CI/CD & Automatización**: Aprende pipelines, GitHub Actions y deployment
- 📱 **Responsive**: Funciona perfectamente en cualquier dispositivo
- 🔐 **Autenticación**: Sistema completo de usuarios con NextAuth.js
- 📊 **Progreso de Usuario**: Guarda tu progreso automáticamente
- ⚡ **Ultra Rápido**: Optimizado con Turbopack y Server Components
- 🎯 **Iconos Temáticos**: Iconos de QA, testing y automatización en toda la plataforma

## 📚 Módulos Disponibles

### 1. Pruebas Web (Disponible)
- ✅ **Pruebas de Humo**: Verificación básica de funcionalidades críticas
- 🔜 **Pruebas de API**: Testing de endpoints REST
- 🔜 **Pruebas E2E**: Flujos completos de usuario
- 🔜 **Pruebas con BD**: Testing con bases de datos
- 🔜 **Pruebas de UI**: Testing visual y accesibilidad
- 🔜 **Pruebas de Integración**: Testing de componentes integrados

### 2. Próximos Módulos
- 🔜 **Pruebas Unitarias**: Jest, Vitest, Testing Library
- 🔜 **CI/CD & Automatización**: GitHub Actions, Jenkins, CircleCI
- 🔜 **Herramientas QA**: Playwright, Cypress, Selenium, Postman

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18 o superior
- npm o yarn
- Git

### Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno (ya existe .env.local)
# Revisar archivo .env.local para configuración

# Generar cliente de Prisma (ya ejecutado)
npx prisma generate

# Base de datos ya configurada con SQLite
# Archivo: prisma/dev.db

# Iniciar servidor de desarrollo (Puerto 4000)
npm run dev
```

Abre **[http://localhost:4000](http://localhost:4000)** en tu navegador.

## 🛠️ Stack Tecnológico

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 3.4 (Tema Blue Ocean Dark)
- **Componentes UI**: shadcn/ui
- **Iconos**: Lucide React (FlaskConical, Workflow, TestTube, etc.)
- **Animaciones**: Framer Motion + CSS Animations
- **Syntax Highlighting**: react-syntax-highlighter con Prism

### Backend
- **Database ORM**: Prisma
- **Base de Datos**: SQLite (dev) / PostgreSQL (prod)
- **Autenticación**: NextAuth.js v5

### Dev Tools
- **Build Tool**: Turbopack
- **Linter**: ESLint
- **Package Manager**: npm

## 📁 Estructura del Proyecto

```
sistema-qa-web/
├── app/                          # App Router de Next.js
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Página home
│   ├── globals.css              # Estilos globales
│   └── modules/                 # Módulos de tutoriales
│       └── pruebas-web/
│           ├── page.tsx         # Índice del módulo
│           └── pruebas-humo/
│               └── page.tsx     # Tutorial individual
├── components/
│   ├── ui/                      # Componentes UI reutilizables
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── layout/                  # Componentes de layout
│   │   └── Navbar.tsx
│   ├── tutorial/                # Componentes específicos de tutoriales
│   │   └── CodeBlock.tsx
│   └── shared/                  # Componentes compartidos
├── lib/                         # Utilidades y helpers
│   ├── utils.ts                 # Funciones auxiliares
│   └── prisma.ts                # Cliente de Prisma
├── prisma/
│   ├── schema.prisma            # Esquema de base de datos
│   └── dev.db                   # Base de datos SQLite
├── public/                      # Archivos estáticos
│   └── examples/                # Código de ejemplo
├── types/                       # Definiciones de TypeScript
│   └── tutorial.ts
└── content/                     # Contenido (futuro MDX)
    └── modules/
```

## 📝 Agregar Nuevo Tutorial

1. **Crear estructura de carpetas:**
```bash
mkdir -p app/modules/[modulo]/[tutorial]
```

2. **Crear página del tutorial:**
```tsx
// app/modules/pruebas-web/nuevo-tutorial/page.tsx
import { CodeBlock } from "@/components/tutorial/CodeBlock"

export default function NuevoTutorial() {
  return (
    <div className="container max-w-4xl py-12">
      <h1>Título del Tutorial</h1>

      <CodeBlock
        language="typescript"
        filename="ejemplo.ts"
        code={`// Tu código aquí`}
      />
    </div>
  )
}
```

3. **Actualizar índice del módulo:**
```tsx
// Agregar al array de tutorials en app/modules/[modulo]/page.tsx
{
  id: "nuevo-tutorial",
  title: "Nuevo Tutorial",
  description: "Descripción breve",
  icon: Code2,
  difficulty: "Intermedio",
  duration: "45 min",
  href: "/modules/pruebas-web/nuevo-tutorial",
  available: true
}
```

## 🔒 Autenticación

El proyecto está configurado con NextAuth.js v5 (Auth.js) con soporte para:
- ✅ Credenciales (email/password)
- ✅ OAuth (Google, GitHub) - Requiere configuración
- ✅ Base de datos para sesiones persistentes

Ver [CLAUDE.md](CLAUDE.md) para más detalles sobre la arquitectura.

## 📊 Base de Datos

### Modelos Principales

- **User**: Información del usuario
- **Account**: Cuentas OAuth vinculadas
- **Session**: Sesiones activas
- **UserProgress**: Progreso en tutoriales
- **Favorite**: Tutoriales favoritos

### Comandos Prisma Útiles

```bash
# Generar cliente
npx prisma generate

# Aplicar cambios al schema
npx prisma db push

# Abrir Prisma Studio (GUI)
npx prisma studio

# Resetear base de datos
npx prisma migrate reset
```

## 🚢 Deploy en Vercel (Recomendado)

1. **Push a GitHub**
2. **Import en Vercel**
3. **Configurar variables de entorno:**
```env
DATABASE_URL=tu-postgres-url
NEXTAUTH_URL=https://tu-dominio.vercel.app
NEXTAUTH_SECRET=tu-secret-en-produccion
```
4. **Deploy automático**

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

⭐️ Si este proyecto te ayudó, considera darle una estrella!
