import { Code2, ShoppingCart, Calculator, Lock, CheckSquare, Globe, Zap, Workflow, Gauge, Smartphone, GitPullRequest, Users } from "lucide-react"

export type ProjectLevel = "Principiante" | "Intermedio" | "Avanzado"
export type ProjectTool = "Playwright" | "Cypress" | "Selenium" | "k6" | "Postman" | "GitHub Actions"

export interface Project {
  id: string
  title: string
  shortTitle: string
  description: string
  level: ProjectLevel
  duration: string
  icon: any
  tools: ProjectTool[]
  practiceUrl: string
  objectives: string[]
  features: string[]
  starterCode: string
  learningGoals: string[]
  difficulty: 1 | 2 | 3 | 4 | 5
}

export const projects: Project[] = [
  // 🟢 PRINCIPIANTE
  {
    id: "ecommerce-automation",
    title: "Automatización de E-commerce",
    shortTitle: "E-commerce",
    description: "Automatiza el flujo completo de compra en Sauce Demo: navega productos, añade al carrito y completa el checkout.",
    level: "Principiante",
    duration: "2-3 horas",
    icon: ShoppingCart,
    tools: ["Playwright"],
    practiceUrl: "https://www.saucedemo.com/",
    objectives: [
      "Navegar por el catálogo de productos",
      "Buscar y filtrar artículos",
      "Añadir productos al carrito",
      "Completar proceso de checkout",
      "Validar mensajes de error en pagos"
    ],
    features: [
      "Login con diferentes usuarios",
      "Agregar múltiples productos",
      "Verificar total del carrito",
      "Completar formulario de envío",
      "Confirmar orden final"
    ],
    starterCode: `import { test, expect } from '@playwright/test';

test.describe('E-commerce Flow', () => {
  test('Usuario puede comprar un producto', async ({ page }) => {
    // TODO: Navegar a Sauce Demo
    await page.goto('https://www.saucedemo.com/');

    // TODO: Login
    // Usuario: standard_user
    // Password: secret_sauce

    // TODO: Agregar producto al carrito

    // TODO: Ir al checkout

    // TODO: Completar información

    // TODO: Confirmar orden
  });
});`,
    learningGoals: [
      "Selectores CSS y XPath",
      "Interacciones con formularios",
      "Assertions básicas",
      "Page Object Model básico"
    ],
    difficulty: 1
  },
  {
    id: "calculator-testing",
    title: "Testing de Calculadora Web",
    shortTitle: "Calculadora",
    description: "Crea pruebas para verificar operaciones matemáticas básicas: suma, resta, multiplicación y división.",
    level: "Principiante",
    duration: "1-2 horas",
    icon: Calculator,
    tools: ["Cypress"],
    practiceUrl: "https://www.calculator.net/",
    objectives: [
      "Probar suma y resta",
      "Probar multiplicación y división",
      "Validar entradas inválidas",
      "Verificar resultados decimales",
      "Probar operaciones encadenadas"
    ],
    features: [
      "Tests para cada operación",
      "Validación de edge cases",
      "Pruebas con números negativos",
      "Pruebas con decimales"
    ],
    starterCode: `describe('Calculadora Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.calculator.net/');
  });

  it('Debe sumar dos números correctamente', () => {
    // TODO: Ingresar primer número
    // TODO: Click en operador +
    // TODO: Ingresar segundo número
    // TODO: Click en =
    // TODO: Verificar resultado
  });
});`,
    learningGoals: [
      "Comandos básicos de Cypress",
      "Assertions con should()",
      "Hooks (beforeEach)",
      "Data-driven testing básico"
    ],
    difficulty: 1
  },
  {
    id: "login-authentication",
    title: "Login y Autenticación",
    shortTitle: "Login/Auth",
    description: "Automatiza pruebas de registro y login: crea cuentas, valida credenciales y maneja errores.",
    level: "Principiante",
    duration: "2 horas",
    icon: Lock,
    tools: ["Playwright"],
    practiceUrl: "https://the-internet.herokuapp.com/login",
    objectives: [
      "Login exitoso",
      "Login con credenciales inválidas",
      "Validar mensajes de error",
      "Logout",
      "Sesión persistente"
    ],
    features: [
      "Test de login válido",
      "Test de credenciales incorrectas",
      "Test de campos vacíos",
      "Test de logout"
    ],
    starterCode: `import { test, expect } from '@playwright/test';

test.describe('Autenticación', () => {
  test('Login exitoso', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    // TODO: Ingresar usuario: tomsmith
    // TODO: Ingresar password: SuperSecretPassword!
    // TODO: Click en Login
    // TODO: Verificar redirección
    // TODO: Verificar mensaje de éxito
  });
});`,
    learningGoals: [
      "Manejo de formularios",
      "Validación de mensajes",
      "Navegación entre páginas",
      "Esperas y timeouts"
    ],
    difficulty: 2
  },
  {
    id: "api-testing-basics",
    title: "API Testing Básico",
    shortTitle: "API Testing",
    description: "Prueba endpoints REST: GET, POST, PUT, DELETE. Valida respuestas JSON y códigos HTTP.",
    level: "Principiante",
    duration: "2-3 horas",
    icon: Code2,
    tools: ["Playwright"],
    practiceUrl: "https://jsonplaceholder.typicode.com/",
    objectives: [
      "GET requests",
      "POST requests",
      "PUT/PATCH requests",
      "DELETE requests",
      "Validar JSON responses"
    ],
    features: [
      "Test para cada método HTTP",
      "Validación de status codes",
      "Validación de response body",
      "Headers y authentication"
    ],
    starterCode: `import { test, expect } from '@playwright/test';

test.describe('API Testing', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';

  test('GET - Obtener lista de posts', async ({ request }) => {
    // TODO: Hacer GET request a /posts
    // TODO: Verificar status 200
    // TODO: Verificar que retorna un array
    // TODO: Verificar estructura del primer post
  });

  test('POST - Crear nuevo post', async ({ request }) => {
    // TODO: Crear payload
    // TODO: Hacer POST request
    // TODO: Verificar status 201
    // TODO: Verificar respuesta
  });
});`,
    learningGoals: [
      "HTTP methods",
      "Status codes",
      "JSON validation",
      "API request/response"
    ],
    difficulty: 2
  },

  // 🟡 INTERMEDIO
  {
    id: "todo-app-testing",
    title: "Testing de Todo App",
    shortTitle: "Todo App",
    description: "Automatiza un gestor de tareas: crea, edita, elimina y marca tareas como completadas.",
    level: "Intermedio",
    duration: "3-4 horas",
    icon: CheckSquare,
    tools: ["Playwright"],
    practiceUrl: "https://todomvc.com/examples/react/dist/",
    objectives: [
      "Crear nuevas tareas",
      "Editar tareas existentes",
      "Marcar como completadas",
      "Eliminar tareas",
      "Filtrar por estado"
    ],
    features: [
      "CRUD completo de tareas",
      "Contadores dinámicos",
      "Filtros (All/Active/Completed)",
      "Local storage persistence"
    ],
    starterCode: `import { test, expect } from '@playwright/test';

test.describe('Todo App', () => {
  test('Crear y completar tarea', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');

    // TODO: Crear nueva tarea
    // TODO: Verificar que aparece en la lista
    // TODO: Marcar como completada
    // TODO: Verificar estilo de completada
  });
});`,
    learningGoals: [
      "Elementos dinámicos",
      "Local storage",
      "Contadores y badges",
      "Filtros y búsquedas"
    ],
    difficulty: 3
  },
  {
    id: "rest-api-complete",
    title: "API REST Completa",
    shortTitle: "API REST",
    description: "Pruebas avanzadas de API con autenticación, paginación y manejo de errores.",
    level: "Intermedio",
    duration: "4-5 horas",
    icon: Globe,
    tools: ["Playwright"],
    practiceUrl: "https://reqres.in/",
    objectives: [
      "Autenticación con tokens",
      "CRUD completo de usuarios",
      "Paginación",
      "Rate limiting",
      "Error handling"
    ],
    features: [
      "Login y registro",
      "Gestión de usuarios",
      "Validación de schemas",
      "Response time testing"
    ],
    starterCode: `import { test, expect } from '@playwright/test';

test.describe('ReqRes API', () => {
  let authToken: string;

  test.beforeAll(async ({ request }) => {
    // TODO: Login y obtener token
  });

  test('Listar usuarios con paginación', async ({ request }) => {
    // TODO: GET /api/users?page=2
    // TODO: Verificar paginación
    // TODO: Verificar estructura de datos
  });
});`,
    learningGoals: [
      "Autenticación JWT",
      "Schema validation",
      "Performance testing",
      "Test data management"
    ],
    difficulty: 3
  },
  {
    id: "dynamic-forms",
    title: "Formularios Dinámicos",
    shortTitle: "Forms",
    description: "Prueba formularios complejos con validaciones, campos dinámicos y file uploads.",
    level: "Intermedio",
    duration: "3-4 horas",
    icon: Code2,
    tools: ["Playwright"],
    practiceUrl: "https://demoqa.com/automation-practice-form",
    objectives: [
      "Completar formularios largos",
      "Subir archivos",
      "Seleccionar fechas",
      "Checkboxes y radios",
      "Validaciones en tiempo real"
    ],
    features: [
      "Text inputs",
      "File uploads",
      "Date pickers",
      "Dropdowns",
      "Multi-step forms"
    ],
    starterCode: `import { test, expect } from '@playwright/test';

test.describe('Formularios', () => {
  test('Completar formulario de práctica', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');

    // TODO: Llenar todos los campos
    // TODO: Subir archivo
    // TODO: Seleccionar fecha
    // TODO: Submit
    // TODO: Verificar modal de confirmación
  });
});`,
    learningGoals: [
      "File uploads",
      "Date pickers",
      "Complex selectors",
      "Multi-step flows"
    ],
    difficulty: 3
  },
  {
    id: "data-driven-testing",
    title: "Data-Driven Testing",
    shortTitle: "Data-Driven",
    description: "Ejecuta pruebas con múltiples conjuntos de datos desde archivos CSV/JSON.",
    level: "Intermedio",
    duration: "3 horas",
    icon: Code2,
    tools: ["Playwright"],
    practiceUrl: "https://www.saucedemo.com/",
    objectives: [
      "Leer datos de CSV",
      "Leer datos de JSON",
      "Ejecutar tests parametrizados",
      "Reportes por dataset",
      "Manejo de datos inválidos"
    ],
    features: [
      "Parametrized tests",
      "CSV/JSON readers",
      "Dynamic test generation",
      "Data validation"
    ],
    starterCode: `import { test, expect } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import fs from 'fs';

const records = parse(fs.readFileSync('users.csv'), {
  columns: true,
  skip_empty_lines: true
});

for (const record of records) {
  test(\`Login con usuario: \${record.username}\`, async ({ page }) => {
    // TODO: Login con datos del CSV
    // TODO: Verificar resultado esperado
  });
}`,
    learningGoals: [
      "Parametrized testing",
      "File I/O",
      "Dynamic test generation",
      "Test data management"
    ],
    difficulty: 4
  },

  // 🔴 AVANZADO
  {
    id: "cicd-pipeline",
    title: "CI/CD Pipeline con GitHub Actions",
    shortTitle: "CI/CD",
    description: "Configura un pipeline completo: tests automáticos, reportes y deploy.",
    level: "Avanzado",
    duration: "5-6 horas",
    icon: Workflow,
    tools: ["GitHub Actions", "Playwright"],
    practiceUrl: "https://github.com",
    objectives: [
      "Configurar GitHub Actions",
      "Ejecutar tests en CI",
      "Generar reportes HTML",
      "Notificaciones de fallos",
      "Deploy automático"
    ],
    features: [
      "Workflow YAML",
      "Matrix testing (múltiples browsers)",
      "Artifact uploads",
      "Slack notifications",
      "Deploy to Vercel"
    ],
    starterCode: `name: Playwright Tests
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      # TODO: Setup Node
      # TODO: Install dependencies
      # TODO: Run tests
      # TODO: Upload report`,
    learningGoals: [
      "GitHub Actions",
      "YAML configuration",
      "CI/CD concepts",
      "Artifact management"
    ],
    difficulty: 4
  },
  {
    id: "performance-testing",
    title: "Performance Testing con k6",
    shortTitle: "Performance",
    description: "Pruebas de carga: simula múltiples usuarios y analiza el rendimiento.",
    level: "Avanzado",
    duration: "4-5 horas",
    icon: Gauge,
    tools: ["k6"],
    practiceUrl: "https://test.k6.io",
    objectives: [
      "Load testing",
      "Stress testing",
      "Spike testing",
      "Soak testing",
      "Análisis de métricas"
    ],
    features: [
      "VU (Virtual Users) simulation",
      "Response time analysis",
      "Throughput metrics",
      "Error rate monitoring"
    ],
    starterCode: `import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m', target: 20 },
    { duration: '30s', target: 0 },
  ],
};

export default function () {
  // TODO: Hacer request
  // TODO: Verificar response
  // TODO: Add checks
  sleep(1);
}`,
    learningGoals: [
      "Load testing concepts",
      "Performance metrics",
      "k6 scripting",
      "Results analysis"
    ],
    difficulty: 5
  },
  {
    id: "mobile-pwa-testing",
    title: "Mobile & PWA Testing",
    shortTitle: "Mobile",
    description: "Pruebas en dispositivos móviles y Progressive Web Apps.",
    level: "Avanzado",
    duration: "4-5 horas",
    icon: Smartphone,
    tools: ["Playwright"],
    practiceUrl: "https://www.pwabuilder.com/",
    objectives: [
      "Mobile viewport testing",
      "Touch gestures",
      "Offline mode",
      "Service workers",
      "Device emulation"
    ],
    features: [
      "Responsive testing",
      "Touch events",
      "Network throttling",
      "Geolocation",
      "Camera/sensors"
    ],
    starterCode: `import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 13'],
});

test('Mobile navigation', async ({ page }) => {
  await page.goto('https://example.com');

  // TODO: Test mobile menu
  // TODO: Test touch gestures
  // TODO: Test offline mode
});`,
    learningGoals: [
      "Mobile testing",
      "Device emulation",
      "PWA concepts",
      "Network conditions"
    ],
    difficulty: 5
  },
  {
    id: "open-source-contribution",
    title: "Contribución Open Source",
    shortTitle: "Open Source",
    description: "Contribuye a proyectos reales de testing en GitHub.",
    level: "Avanzado",
    duration: "Variable",
    icon: GitPullRequest,
    tools: ["Playwright", "Cypress"],
    practiceUrl: "https://github.com/topics/test-automation",
    objectives: [
      "Encontrar proyecto adecuado",
      "Configurar entorno local",
      "Identificar issues",
      "Crear Pull Request",
      "Code review process"
    ],
    features: [
      "Git workflow",
      "Fork & clone",
      "Branch strategy",
      "PR best practices",
      "Community guidelines"
    ],
    starterCode: `// Guía para contribuir:

// 1. Busca proyectos con label "good first issue"
// 2. Lee CONTRIBUTING.md
// 3. Fork el repositorio
// 4. Crea tu branch: git checkout -b feature/my-test
// 5. Escribe tus tests
// 6. Commit: git commit -m 'Add: new test for X'
// 7. Push: git push origin feature/my-test
// 8. Crea Pull Request`,
    learningGoals: [
      "Git workflow",
      "Open source practices",
      "Code review",
      "Community collaboration"
    ],
    difficulty: 5
  }
]

// Helpers
export const getProjectsByLevel = (level: ProjectLevel) => {
  return projects.filter(p => p.level === level)
}

export const getProjectById = (id: string) => {
  return projects.find(p => p.id === id)
}

export const getLevelColor = (level: ProjectLevel) => {
  switch(level) {
    case "Principiante": return "text-green-500"
    case "Intermedio": return "text-yellow-500"
    case "Avanzado": return "text-red-500"
  }
}

export const getLevelBg = (level: ProjectLevel) => {
  switch(level) {
    case "Principiante": return "bg-green-500/10 border-green-500/20"
    case "Intermedio": return "bg-yellow-500/10 border-yellow-500/20"
    case "Avanzado": return "bg-red-500/10 border-red-500/20"
  }
}
