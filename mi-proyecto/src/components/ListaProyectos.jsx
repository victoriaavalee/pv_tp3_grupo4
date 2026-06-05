import { useState, useEffect, useRef } from 'react';
import { obtenerProyectos, agregarProyecto, eliminarProyecto, buscarProyecto } from '../services/proyectoService.js';
import ProyectoCard from './ProyectoCard';
import DetalleProyecto from './DetalleProyecto';
import RegistroActividad from './RegistroActividad';
import '../css/ListaProyectos.css';

function ListaProyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [ultimaActualizacion, setUltimaActualizacion] = useState(null);
  const esPrimerRender = useRef(true);
  const fueModificado = useRef(false);

  useEffect(() => {
    setProyectos(obtenerProyectos());
  }, []);

  useEffect(() => {
    if (esPrimerRender.current) {
      esPrimerRender.current = false;
      return;
    }
    if (!fueModificado.current) return;
    const ahora = new Date();
    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const anio = ahora.getFullYear();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    setUltimaActualizacion(`${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`);
    fueModificado.current = false;
  }, [proyectos]);

  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: '',
    categoria: '',
    estado: 'Activo',
    descripcion1: '',
    descripcion2: '',
    recursos: [],
    equipo: []
  });

  const handleEliminar = (id) => {
    fueModificado.current = true;
    eliminarProyecto(id);
    setProyectos(obtenerProyectos());
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
    fueModificado.current = true;
    agregarProyecto({ id: Date.now(), ...nuevoProyecto });
    setProyectos(obtenerProyectos());
    setNuevoProyecto({ titulo: '', categoria: '', estado: 'Activo', descripcion1: '', descripcion2: '', recursos: [], equipo: [] });
  };

  if (proyectoSeleccionado) {
    return <DetalleProyecto proyecto={proyectoSeleccionado} onVolver={() => setProyectoSeleccionado(null)} />;
  }

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
            onVerDetalle={setProyectoSeleccionado}
          />
        ))}

        <article className="card-proyecto card-agregar">
          <h3>Nuevo Proyecto</h3>
          <input type="text" name="titulo" placeholder="Título" value={nuevoProyecto.titulo} onChange={handleChange} />
          <input type="text" name="categoria" placeholder="Categoría" value={nuevoProyecto.categoria} onChange={handleChange} />
          <input type="text" name="descripcion1" placeholder="Descripción 1" value={nuevoProyecto.descripcion1} onChange={handleChange} />
          <input type="text" name="descripcion2" placeholder="Descripción 2" value={nuevoProyecto.descripcion2} onChange={handleChange} />
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

      <RegistroActividad fecha={ultimaActualizacion} />
    </section>
  );
}

export default ListaProyectos;