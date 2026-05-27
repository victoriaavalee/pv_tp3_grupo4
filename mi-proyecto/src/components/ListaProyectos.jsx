import React, { useState, useEffect } from 'react';
import { obtenerProyectos, agregarProyecto, eliminarProyecto, buscarProyecto } from '../services/proyectoService.js';
import '../css/ListaProyectos.css';

function ListaProyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
    setProyectos(obtenerProyectos());
  }, []);

  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: '',
    categoria: '',
    estado: 'Activo'
});

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProyecto({
        ...nuevoProyecto,
        [name]: value
    });
};

const handleAgregar = () => {
    if (
        nuevoProyecto.titulo.trim() === '' ||
        nuevoProyecto.categoria.trim() === ''
    ) {
        alert('Complete todos los campos');
        return;
    }
    const proyecto = {
        id: Date.now(),
        ...nuevoProyecto
    };
    agregarProyecto(proyecto);
    setProyectos(obtenerProyectos());
    setNuevoProyecto({
        titulo: '',
        categoria: '',
        estado: 'Activo'
    });
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
      <div className="contenedor-proyectos">
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
        <article className="card-proyecto card-agregar">
        <h3>Nuevo Proyecto</h3>
        <input
            type="text"
            name="titulo"
            placeholder="Título"
            value={nuevoProyecto.titulo}
            onChange={handleChange}
        />
        <input
            type="text"
            name="categoria"
            placeholder="Categoría"
            value={nuevoProyecto.categoria}
            onChange={handleChange}
        />
        <select
            name="estado"
            value={nuevoProyecto.estado}
            onChange={handleChange}
        >
            <option value="Activo">Activo</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En proceso">En proceso</option>
            <option value="Completo">Completo</option>
            <option value="En pausa">En pausa</option>
        </select>
        <button className="btn-agregar" onClick={handleAgregar}>
          Agregar proyecto
        </button>
      </article>
      </div>
    </section>
  );
}

export default ListaProyectos;