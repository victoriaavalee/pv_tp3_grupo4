import { useState } from 'react';
import { Container, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, Alert } from '@mui/material';

function FormularioProyecto({ onAgregar }) {
  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: '',
    categoria: '',
    estado: 'Activo',
    descripcion1: '',
    descripcion2: '',
    recursos: [],
    equipo: []
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProyecto({ ...nuevoProyecto, [name]: value });
  };

  const handleAgregar = () => {
    const { titulo, categoria } = nuevoProyecto;
    if (titulo.trim() === '' || categoria.trim() === '') {
      setError('Complete todos los campos');     //<Alert severity="error">Complete todos los campos.</Alert>
      return;
    }
    onAgregar({ id: Date.now(), ...nuevoProyecto });
    setNuevoProyecto({ titulo: '', categoria: '', estado: 'Activo', descripcion1: '', descripcion2: '', recursos: [], equipo: [] });
    setError('');
  };

  return (
    <Container className="card-proyecto card-agregar">
      <Typography>Nuevo Proyecto</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField type="text" name="titulo" placeholder="Título" value={nuevoProyecto.titulo} onChange={handleChange} />
      <TextField type="text" name="categoria" placeholder="Categoría" value={nuevoProyecto.categoria} onChange={handleChange} />
      <TextField type="text" name="descripcion1" placeholder="Descripción 1" value={nuevoProyecto.descripcion1} onChange={handleChange} />
      <TextField type="text" name="descripcion2" placeholder="Descripción 2" value={nuevoProyecto.descripcion2} onChange={handleChange} />
      <Select name="estado" value={nuevoProyecto.estado} onChange={handleChange}>
        <MenuItem value="Activo">Activo</MenuItem>
        <MenuItem value="Pendiente">Pendiente</MenuItem>
        <MenuItem value="En proceso">En proceso</MenuItem>
        <MenuItem value="Completo">Completo</MenuItem>
        <MenuItem value="En pausa">En pausa</MenuItem>
      </Select>
      <Button className="btn-agregar" onClick={handleAgregar}>Agregar proyecto</Button>
    </Container>
  );
}

export default FormularioProyecto;