export const proyectos = [
  {
    id: 1,
    titulo: 'Sistema de Gestión de Exámenes',
    categoria: 'Educación',
    estado: 'Activo',
    descripcion1: 'Este sistema permite a los docentes crear, gestionar y corregir exámenes de forma digital, reduciendo el uso de papel y agilizando los tiempos de evaluación.',
    descripcion2: 'Los estudiantes pueden acceder a sus resultados en tiempo real y los docentes obtienen estadísticas detalladas sobre el rendimiento del grupo.',
    recursos: [
      { tipo: 'PDF', url: 'https://drive.google.com/file/ejemplo1' },
      { tipo: 'Drive', url: 'https://drive.google.com/drive/ejemplo1' },
      { tipo: 'GitHub', url: 'https://github.com/ejemplo1' }
    ],
    equipo: [
      { nombre: 'Ana García', rol: 'Líder de proyecto' },
      { nombre: 'Luis Pérez', rol: 'Desarrollador frontend' },
      { nombre: 'María López', rol: 'Diseñadora UX' }
    ]
  },
  {
    id: 2,
    titulo: 'Taller de Robótica',
    categoria: 'Educación',
    estado: 'Pendiente',
    descripcion1: 'Proyecto orientado a introducir a los estudiantes en el mundo de la robótica mediante talleres prácticos con kits de construcción y programación básica.',
    descripcion2: 'Se busca fomentar el pensamiento lógico y la resolución de problemas en alumnos de nivel secundario a través de desafíos robóticos.',
    recursos: [
      { tipo: 'PDF', url: 'https://drive.google.com/file/ejemplo2' },
      { tipo: 'Drive', url: 'https://drive.google.com/drive/ejemplo2' },
      { tipo: 'GitHub', url: 'https://github.com/ejemplo2' }
    ],
    equipo: [
      { nombre: 'Carlos Ruiz', rol: 'Coordinador' },
      { nombre: 'Sofía Díaz', rol: 'Instructora' }
    ]
  },
  {
    id: 3,
    titulo: 'Huerta Hidropónica',
    categoria: 'Medio Ambiente',
    estado: 'En proceso',
    descripcion1: 'Implementación de un sistema de cultivo hidropónico en las instalaciones de la facultad para producir alimentos de forma sostenible y sin uso de suelo.',
    descripcion2: 'El proyecto incluye sensores IoT para monitorear los niveles de agua, luz y nutrientes en tiempo real desde una aplicación móvil.',
    recursos: [
      { tipo: 'PDF', url: 'https://drive.google.com/file/ejemplo3' },
      { tipo: 'Drive', url: 'https://drive.google.com/drive/ejemplo3' },
      { tipo: 'GitHub', url: 'https://github.com/ejemplo3' }
    ],
    equipo: [
      { nombre: 'Valentina Torres', rol: 'Investigadora principal' },
      { nombre: 'Nicolás Morales', rol: 'Desarrollador IoT' }
    ]
  },
  {
    id: 4,
    titulo: 'Archivo Histórico',
    categoria: 'Investigación',
    estado: 'Completo',
    descripcion1: 'Digitalización y catalogación del archivo histórico de la universidad, permitiendo el acceso remoto a documentos que datan de más de un siglo.',
    descripcion2: 'Se aplicaron técnicas de OCR y metadatos para facilitar la búsqueda y recuperación de documentos por fecha, autor o temática.',
    recursos: [
      { tipo: 'PDF', url: 'https://drive.google.com/file/ejemplo4' },
      { tipo: 'Drive', url: 'https://drive.google.com/drive/ejemplo4' },
      { tipo: 'GitHub', url: 'https://github.com/ejemplo4' }
    ],
    equipo: [
      { nombre: 'Roberto Sánchez', rol: 'Archivista' },
      { nombre: 'Laura Medina', rol: 'Desarrolladora' }
    ]
  },
  {
    id: 5,
    titulo: 'App de Asistencia',
    categoria: 'Desarrollo',
    estado: 'Activo',
    descripcion1: 'Aplicación móvil para el registro de asistencia de alumnos mediante código QR, eliminando el proceso manual de lista y reduciendo errores.',
    descripcion2: 'Los docentes pueden generar reportes de asistencia por materia, fecha o alumno, y exportarlos en formato PDF o Excel.',
    recursos: [
      { tipo: 'PDF', url: 'https://drive.google.com/file/ejemplo5' },
      { tipo: 'Drive', url: 'https://drive.google.com/drive/ejemplo5' },
      { tipo: 'GitHub', url: 'https://github.com/ejemplo5' }
    ],
    equipo: [
      { nombre: 'Diego Flores', rol: 'Desarrollador mobile' },
      { nombre: 'Camila Vega', rol: 'Tester QA' }
    ]
  },
  {
    id: 6, titulo: 'Rediseño de Portal Web', categoria: 'Desarrollo', estado: 'Activo',
    descripcion1: 'Rediseño completo del portal web institucional con foco en accesibilidad, velocidad de carga y experiencia de usuario moderna.',
    descripcion2: 'Se migró de una arquitectura monolítica a microservicios, mejorando la escalabilidad y el mantenimiento del sistema.',
    recursos: [{ tipo: 'PDF', url: '#' }, { tipo: 'Drive', url: '#' }, { tipo: 'GitHub', url: '#' }],
    equipo: [{ nombre: 'Martín Castro', rol: 'Frontend' }, { nombre: 'Elena Ríos', rol: 'Backend' }]
  },
  {
    id: 7, titulo: 'Plataforma de Traducción', categoria: 'Servicios', estado: 'Pendiente',
    descripcion1: 'Plataforma web para la traducción colaborativa de materiales académicos a lenguas originarias de la región.',
    descripcion2: 'Incorpora un sistema de validación por hablantes nativos y un glosario técnico compartido entre traductores.',
    recursos: [{ tipo: 'PDF', url: '#' }, { tipo: 'Drive', url: '#' }, { tipo: 'GitHub', url: '#' }],
    equipo: [{ nombre: 'Paula Jiménez', rol: 'Coordinadora' }, { nombre: 'Tomás Aguirre', rol: 'Desarrollador' }]
  },
  {
    id: 8, titulo: 'Simulador Bursátil', categoria: 'Finanzas', estado: 'En pausa',
    descripcion1: 'Simulador educativo de mercado bursátil que permite a los estudiantes practicar inversiones con dinero virtual en tiempo real.',
    descripcion2: 'Incluye gráficos históricos, noticias simuladas y rankings de rendimiento entre participantes.',
    recursos: [{ tipo: 'PDF', url: '#' }, { tipo: 'Drive', url: '#' }, { tipo: 'GitHub', url: '#' }],
    equipo: [{ nombre: 'Ignacio Molina', rol: 'Analista' }, { nombre: 'Florencia Suárez', rol: 'Desarrolladora' }]
  },
  {
    id: 9, titulo: 'Gestión de Presupuesto de Obra', categoria: 'Infraestructura', estado: 'En proceso',
    descripcion1: 'Sistema para el seguimiento y control de presupuestos en obras de infraestructura universitaria.',
    descripcion2: 'Permite comparar presupuesto planificado vs ejecutado, con alertas automáticas ante desvíos significativos.',
    recursos: [{ tipo: 'PDF', url: '#' }, { tipo: 'Drive', url: '#' }, { tipo: 'GitHub', url: '#' }],
    equipo: [{ nombre: 'Hernán Vargas', rol: 'Ingeniero civil' }, { nombre: 'Cecilia Romero', rol: 'Desarrolladora' }]
  },
  {
    id: 10, titulo: 'Sistema de Gestión Logística', categoria: 'Operaciones', estado: 'Activo',
    descripcion1: 'Sistema integral para la gestión de stock, envíos y proveedores de la institución.',
    descripcion2: 'Automatiza el proceso de compras y genera reportes de inventario en tiempo real para el área administrativa.',
    recursos: [{ tipo: 'PDF', url: '#' }, { tipo: 'Drive', url: '#' }, { tipo: 'GitHub', url: '#' }],
    equipo: [{ nombre: 'Ricardo Luna', rol: 'Analista logístico' }, { nombre: 'Natalia Quiroga', rol: 'Desarrolladora' }]
  }
];

export const obtenerProyectos = () => [...proyectos];

export const agregarProyecto = (nuevoProyecto) => {
  proyectos.push(nuevoProyecto);
};

export const eliminarProyecto = (id) => {
  const index = proyectos.findIndex(p => p.id === Number(id));
  if (index !== -1) proyectos.splice(index, 1);
  return [...proyectos];
};

export const buscarProyecto = (termino) => {
  return proyectos.filter(p =>
    p.titulo.toLowerCase().includes(termino.toLowerCase())
  );
};