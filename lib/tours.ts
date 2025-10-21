import { driver, DriveStep } from "driver.js";
import "driver.js/dist/driver.css";

// Configuración base para todos los tours - Estilo minimalista con spotlight
const baseConfig = {
  animate: true,
  doneBtnText: '✓',
  closeBtnText: '×',
  nextBtnText: '→',
  prevBtnText: '←',
  showProgress: false,
  popoverClass: 'driverjs-theme-spotlight',
  showButtons: ['next', 'close'] as const,
};

// Tour: Cómo llegar a las pruebas de humo
export const smokeTour = () => {
  const driverObj = driver({
    ...baseConfig,
    steps: [
      {
        element: '#nav-practice',
        popover: {
          title: '💨 Pruebas de Humo',
          description: 'Haz clic aquí para acceder a los módulos de práctica',
          side: 'bottom',
        }
      },
    ] as DriveStep[],
  });

  driverObj.drive();
};

// Tour: Ir a la sección de páginas de pruebas
export const practicePagesTour = () => {
  const driverObj = driver({
    ...baseConfig,
    steps: [
      {
        element: '#nav-practice-sites',
        popover: {
          title: '🎯 Páginas de Práctica',
          description: 'Sitios reales para practicar testing',
          side: 'bottom',
        }
      },
    ] as DriveStep[],
  });

  driverObj.drive();
};

// Tour general de bienvenida - Muestra todos los elementos principales
export const welcomeTour = () => {
  const driverObj = driver({
    ...baseConfig,
    showButtons: ['next', 'previous', 'close'] as const,
    steps: [
      {
        element: '#nav-projects',
        popover: {
          title: '📁 Proyectos',
          description: 'Proyectos completos de QA',
          side: 'bottom',
        }
      },
      {
        element: '#nav-practice-sites',
        popover: {
          title: '🌐 Páginas de Práctica',
          description: 'Sitios para practicar testing',
          side: 'bottom',
        }
      },
      {
        element: '#nav-practice',
        popover: {
          title: '📚 Módulos',
          description: 'Diferentes tipos de pruebas',
          side: 'bottom',
        }
      },
    ] as DriveStep[],
  });

  driverObj.drive();
};
