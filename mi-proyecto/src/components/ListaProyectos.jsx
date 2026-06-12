import { useState, useEffect, useRef } from 'react';
import { obtenerProyectos, agregarProyecto, eliminarProyecto, buscarProyecto } from '../services/proyectoService.js';
import { Container, Grid, Typography, TextField, Box, Divider } from '@mui/material';
import ProyectoCard from './ProyectoCard';
import RegistroActividad from './RegistroActividad';
import FormularioProyecto from './FormularioProyecto.jsx';

function ListaProyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
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

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 4, fontWeight: 900, color: '#1a2035' }}>
        Listado de Proyectos
      </Typography>

      <Box sx={{ mb: 6 }}>
        <TextField
          fullWidth
          placeholder="Buscar por título..."
          value={busqueda}
          onChange={handleBuscar}
          variant="outlined"
          sx={{ maxWidth: 600, bgcolor: '#ffffff' }}
        />
      </Box>

      <Divider sx={{ mb: 6 }} />

      <Grid container spacing={3} alignItems="stretch">
        {proyectos.map((proyecto) => (
          <Grid item xs={12} sm={6} md={4} key={proyecto.id} sx={{ display: 'flex' }} size={{ xs: 12, sm: 6, md: 4, lg:3 }}>
            <ProyectoCard proyecto={proyecto} onEliminar={handleEliminar} />
          </Grid>
        ))}
        
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
          <FormularioProyecto onAgregar={handleAgregarAlServicio} />
        </Grid>
      </Grid>

      {ultimaActualizacion && (
        <Box sx={{ mt: 8 }}>
          <RegistroActividad fecha={ultimaActualizacion} />
        </Box>
      )}
    </Container>
  );
}

export default ListaProyectos;