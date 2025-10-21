import { Globe, ShoppingCart, CheckSquare, Code2, Atom, Lock, Database, Smartphone } from "lucide-react"

export type SiteCategory = "E-commerce" | "Forms" | "API" | "Authentication" | "Dynamic Content" | "Mobile"
export type SiteDifficulty = "Fácil" | "Medio" | "Difícil"

export interface PracticeSite {
  id: string
  name: string
  url: string
  description: string
  category: SiteCategory
  difficulty: SiteDifficulty
  icon: any
  features: string[]
  testIdeas: string[]
  credentials?: {
    username?: string
    password?: string
    note?: string
  }
  recommended: boolean
}

export const practiceSites: PracticeSite[] = [
  {
    id: "saucedemo",
    name: "Sauce Demo",
    url: "https://www.saucedemo.com/",
    description: "E-commerce completo con login, catálogo de productos, carrito y checkout. Perfecto para practicar flujos end-to-end.",
    category: "E-commerce",
    difficulty: "Fácil",
    icon: ShoppingCart,
    features: [
      "Sistema de autenticación",
      "Catálogo de productos",
      "Carrito de compras",
      "Proceso de checkout",
      "Múltiples usuarios de prueba"
    ],
    testIdeas: [
      "Automatizar proceso completo de compra",
      "Validar cálculos del carrito",
      "Probar diferentes usuarios",
      "Verificar ordenamiento de productos",
      "Testing de validaciones de formularios"
    ],
    credentials: {
      username: "standard_user",
      password: "secret_sauce",
      note: "Hay múltiples usuarios para probar diferentes escenarios"
    },
    recommended: true
  },
  {
    id: "demoqa",
    name: "DemoQA",
    url: "https://demoqa.com/",
    description: "Colección completa de elementos web para practicar: formularios, botones, alerts, modales, drag & drop, y más.",
    category: "Forms",
    difficulty: "Medio",
    icon: Code2,
    features: [
      "Formularios complejos",
      "Elementos interactivos",
      "Upload de archivos",
      "Date pickers",
      "Drag and drop",
      "Modales y alerts"
    ],
    testIdeas: [
      "Automatizar formulario completo",
      "Probar subida de archivos",
      "Testing de elementos dinámicos",
      "Validar alerts y confirmaciones",
      "Probar interacciones drag & drop"
    ],
    recommended: true
  },
  {
    id: "todomvc",
    name: "TodoMVC",
    url: "https://todomvc.com/examples/react/dist/",
    description: "Aplicación de gestión de tareas implementada en diferentes frameworks. Ideal para CRUD operations y manejo de estado.",
    category: "Dynamic Content",
    difficulty: "Fácil",
    icon: CheckSquare,
    features: [
      "CRUD de tareas",
      "Filtros (All/Active/Completed)",
      "Contadores dinámicos",
      "Edición inline",
      "Local storage"
    ],
    testIdeas: [
      "Crear, editar y eliminar tareas",
      "Validar contadores",
      "Probar filtros",
      "Verificar persistencia con local storage",
      "Testing de estados de tareas"
    ],
    recommended: true
  },
  {
    id: "jsonplaceholder",
    name: "JSONPlaceholder",
    url: "https://jsonplaceholder.typicode.com/",
    description: "API REST gratuita para practicar testing de APIs. Soporta todos los métodos HTTP con datos realistas.",
    category: "API",
    difficulty: "Fácil",
    icon: Database,
    features: [
      "Endpoints REST completos",
      "GET, POST, PUT, PATCH, DELETE",
      "Recursos: posts, comments, users",
      "Respuestas JSON realistas",
      "Sin autenticación requerida"
    ],
    testIdeas: [
      "Probar todos los métodos HTTP",
      "Validar estructura de respuestas JSON",
      "Testing de status codes",
      "Pruebas de CRUD completo",
      "Validación de relaciones entre recursos"
    ],
    recommended: true
  },
  {
    id: "reqres",
    name: "ReqRes",
    url: "https://reqres.in/",
    description: "API REST con autenticación simulada. Excelente para practicar manejo de tokens y autenticación.",
    category: "API",
    difficulty: "Medio",
    icon: Lock,
    features: [
      "Autenticación simulada",
      "Login y registro",
      "Gestión de usuarios",
      "Paginación",
      "Respuestas realistas"
    ],
    testIdeas: [
      "Testing de autenticación",
      "Manejo de tokens",
      "Pruebas con paginación",
      "Validación de schemas",
      "Testing de error handling"
    ],
    credentials: {
      note: "Usa cualquier email de la lista de usuarios del API"
    },
    recommended: true
  },
  {
    id: "the-internet",
    name: "The Internet",
    url: "https://the-internet.herokuapp.com/",
    description: "Colección de escenarios complejos: autenticación, drag & drop, file upload, dynamic loading, y más desafíos.",
    category: "Dynamic Content",
    difficulty: "Difícil",
    icon: Globe,
    features: [
      "40+ escenarios diferentes",
      "Autenticación básica",
      "Elementos dinámicos",
      "File upload/download",
      "Frames e iframes",
      "JavaScript alerts"
    ],
    testIdeas: [
      "Login y autenticación básica",
      "Manejo de elementos dinámicos",
      "Testing de file uploads",
      "Interacciones con iframes",
      "Manejo de JavaScript alerts"
    ],
    credentials: {
      username: "tomsmith",
      password: "SuperSecretPassword!",
      note: "Para el módulo de login"
    },
    recommended: true
  },
  {
    id: "uitestingplayground",
    name: "UI Test Playground",
    url: "http://uitestingplayground.com/",
    description: "Desafíos específicos para testing de UI: dynamic IDs, AJAX, scrolling, hidden elements y más.",
    category: "Dynamic Content",
    difficulty: "Difícil",
    icon: Atom,
    features: [
      "Dynamic IDs",
      "AJAX Data",
      "Client Side Delay",
      "Click challenges",
      "Hidden elements",
      "Overlapped elements"
    ],
    testIdeas: [
      "Manejar elementos con IDs dinámicos",
      "Testing con AJAX delays",
      "Probar scrolling automático",
      "Manejo de elementos ocultos",
      "Testing de elementos superpuestos"
    ],
    recommended: false
  },
  {
    id: "parabank",
    name: "ParaBank",
    url: "https://parabank.parasoft.com/",
    description: "Aplicación bancaria completa con registro, cuentas, transferencias y más. Ideal para flujos complejos.",
    category: "E-commerce",
    difficulty: "Difícil",
    icon: Database,
    features: [
      "Sistema bancario completo",
      "Registro de usuarios",
      "Gestión de cuentas",
      "Transferencias",
      "Reportes y transacciones"
    ],
    testIdeas: [
      "Automatizar registro completo",
      "Testing de transferencias",
      "Validación de balances",
      "Pruebas de transacciones",
      "Testing de reportes"
    ],
    recommended: false
  }
]

// Helpers
export const getSitesByCategory = (category: SiteCategory) => {
  return practiceSites.filter(site => site.category === category)
}

export const getSitesByDifficulty = (difficulty: SiteDifficulty) => {
  return practiceSites.filter(site => site.difficulty === difficulty)
}

export const getRecommendedSites = () => {
  return practiceSites.filter(site => site.recommended)
}

export const getSiteById = (id: string) => {
  return practiceSites.find(site => site.id === id)
}

export const getDifficultyColor = (difficulty: SiteDifficulty) => {
  switch(difficulty) {
    case "Fácil": return "text-green-500"
    case "Medio": return "text-yellow-500"
    case "Difícil": return "text-red-500"
  }
}

export const getDifficultyBg = (difficulty: SiteDifficulty) => {
  switch(difficulty) {
    case "Fácil": return "bg-green-500/10 border-green-500/20"
    case "Medio": return "bg-yellow-500/10 border-yellow-500/20"
    case "Difícil": return "bg-red-500/10 border-red-500/20"
  }
}

export const categories: SiteCategory[] = ["E-commerce", "Forms", "API", "Authentication", "Dynamic Content", "Mobile"]
export const difficulties: SiteDifficulty[] = ["Fácil", "Medio", "Difícil"]
