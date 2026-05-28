import { useState, useEffect } from 'react';
import { obtenerProyectos, agregarProyecto, eliminarProyecto, buscarProyecto } from '../services/proyectoService.js';
import ProyectoCard from './ProyectoCard';
import '../css/ListaProyectos.css';

function ListaProyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: '',
    categoria: '',
    estado: 'Activo'
  });

  useEffect(() => {
    setProyectos(obtenerProyectos());
  }, []);

  const handleEliminar = (id) => {
    eliminarProyecto(id);
    setProyectos(buscarProyecto(busqueda));
  };

  const handleBuscar = (e) => {
    const { value } = e.target;
    setBusqueda(value);
    setProyectos(buscarProyecto(value));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProyecto({ ...nuevoProyecto, [name]: value });
  };

  const handleAgregar = () => {
    const { titulo, categoria } = nuevoProyecto;
    if (titulo.trim() === '' || categoria.trim() === '') {
      alert('Complete todos los campos');
      return;
    }
    agregarProyecto({ id: Date.now(), ...nuevoProyecto });
    setProyectos(obtenerProyectos());
    setNuevoProyecto({ titulo: '', categoria: '', estado: 'Activo' });
  };

  return (
    <section className="lista-proyectos-container">
      <h1 className="titulo-proyectos">Listado de Proyectos</h1>

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
          <ProyectoCard
            key={proyecto.id}
            proyecto={proyecto}
            onEliminar={handleEliminar}
          />
        ))}

        <article className="card-proyecto card-agregar">
          <h3>Nuevo Proyecto</h3>
          <input type="text" name="titulo" placeholder="Título" value={nuevoProyecto.titulo} onChange={handleChange} />
          <input type="text" name="categoria" placeholder="Categoría" value={nuevoProyecto.categoria} onChange={handleChange} />
          <select name="estado" value={nuevoProyecto.estado} onChange={handleChange}>
            <option value="Activo">Activo</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En proceso">En proceso</option>
            <option value="Completo">Completo</option>
            <option value="En pausa">En pausa</option>
          </select>
          <button className="btn-agregar" onClick={handleAgregar}>Agregar proyecto</button>
        </article>
      </div>
    </section>
  );
}

export default ListaProyectos;