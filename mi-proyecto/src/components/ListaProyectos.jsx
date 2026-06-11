import { useState, useEffect, useRef } from 'react';
import { obtenerProyectos, agregarProyecto, eliminarProyecto, buscarProyecto } from '../services/proyectoService.js';
import ProyectoCard from './ProyectoCard';
import DetalleProyecto from './DetalleProyecto';
import RegistroActividad from './RegistroActividad';
import '../css/ListaProyectos.css';
import FormularioProyecto from './FormularioProyecto.jsx'

function ListaProyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [ultimaActualizacion, setUltimaActualizacion] = useState(null);


const primeraVez = useRef(true);
const cambioDesBusqueda = useRef(false);

useEffect(() => {
  if (primeraVez.current) {
    primeraVez.current = false;
    return;
  }
  if (cambioDesBusqueda.current) {
    cambioDesBusqueda.current = false;
    return;
  }
  setUltimaActualizacion(new Date());
}, [proyectos]);



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
  cambioDesBusqueda.current = true;
  setProyectos(buscarProyecto(value));
};

const handleAgregarAlServicio = (proyectoCompleto) => {
  agregarProyecto(proyectoCompleto); 
  setProyectos(obtenerProyectos()); 
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
      <FormularioProyecto onAgregar={handleAgregarAlServicio}/>
    </div>
    {ultimaActualizacion && <RegistroActividad fecha={ultimaActualizacion} />}
  </section>
);
}

export default ListaProyectos;