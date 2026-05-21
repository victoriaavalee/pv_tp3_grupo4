export const proyectos = [
  { id: 1, titulo: 'Sistema de Gestión de Exámenes', categoria: 'Educación', estado: 'Activo' },
  { id: 2, titulo: 'Taller de Robótica', categoria: 'Educación', estado: 'Pendiente' },
  { id: 3, titulo: 'Huerta Hidropónica', categoria: 'Medio Ambiente', estado: 'En proceso' },
  { id: 4, titulo: 'Archivo Histórico', categoria: 'Investigación', estado: 'Completo' },
  { id: 5, titulo: 'App de Asistencia', categoria: 'Desarrollo', estado: 'Activo' },
  { id: 6, titulo: 'Rediseño de Portal Web', categoria: 'Desarrollo', estado: 'Activo' },
  { id: 7, titulo: 'Plataforma de Traducción', categoria: 'Servicios', estado: 'Pendiente' },
  { id: 8, titulo: 'Simulador Bursátil', categoria: 'Finanzas', estado: 'En pausa' },
  { id: 9, titulo: 'Gestión de Presupuesto de Obra', categoria: 'Infraestructura', estado: 'En proceso' },
  { id: 10, titulo: 'Sistema de Gestión Logística', categoria: 'Operaciones', estado: 'Activo' }
];

export const obtenerProyectos = () => {
  return proyectos;
};


export const eliminarProyecto = (id) => {
  const index = proyectos.findIndex(p => p.id === id);
  if (index !== -1) {
    proyectos.splice(index, 1);
  }
  return proyectos;
};

export const buscarProyecto = (termino) => {
  return proyectos.filter(p => 
    p.titulo.toLowerCase().includes(termino.toLowerCase())
  );
};