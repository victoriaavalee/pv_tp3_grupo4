import React, { useState, useEffect } from 'react';
import { obtenerProyectos, agregarProyecto, eliminarProyecto, buscarProyecto } from '../services/proyectoService.js';
import '../css/ListaProyectos.css';

function ListaProyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
    setProyectos(obtenerProyectos());
  }, []);

  const handleEliminar = (id) => {
    eliminarProyecto(id);
    const proyectosActualizados = buscarProyecto(busqueda);
    setProyectos(proyectosActualizados);
  };

  const handleBuscar = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    const proyectosFiltrados = buscarProyecto(valor);
    setProyectos(proyectosFiltrados);
  };

  return (
<section className="lista-proyectos-container">

      <h1 className="titulo-proyectos">
        Listado de Proyectos
      </h1>
      <div className="buscador-container">
        <input
          type="text"
          placeholder="Buscar proyecto..."
          value={busqueda}
          onChange={handleBuscar}
          className="buscador"
        />
      </div>
      <div className="grid-proyectos">
        {proyectos.map((proyecto) => (
          <article
            key={proyecto.id}
            className="card-proyecto"
          >
            <div className="contenido-card">
              <h3>{proyecto.titulo}</h3>
              <p>
                <strong>Categoría:</strong>{' '}
                {proyecto.categoria}
              </p>
              <span className="estado">
                Estado: {proyecto.estado}
              </span>
            </div>
            <button
              className="btn-eliminar"
              onClick={() =>
                handleEliminar(proyecto.id)
              }
            >
              Eliminar
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ListaProyectos;