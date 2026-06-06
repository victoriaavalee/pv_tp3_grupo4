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
  const cambioDesBusqueda = useRef(false);

  useEffect(() => {
    setProyectos(obtenerProyectos());
  }, []);

  useEffect(() => {
    if (esPrimerRender.current) {
      esPrimerRender.current = false;
      return;
    }
    if (cambioDesBusqueda.current) {
      cambioDesBusqueda.current = false;
      return;
    }
    const ahora = new Date();
    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const anio = ahora.getFullYear();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    setUltimaActualizacion(`${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`);
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
    eliminarProyecto(id);
    setProyectos(obtenerProyectos(