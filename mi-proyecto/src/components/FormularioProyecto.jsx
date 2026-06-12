import { useState } from 'react';
import { Card, CardContent, Typography, TextField, Select, MenuItem, Button, Alert, Stack, FormControl, InputLabel } from '@mui/material';
import { AddCircle as AddCircleIcon } from '@mui/icons-material';

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
      setError('Complete todos los campos');     
      return;
    }
    onAgregar({ id: Date.now(), ...nuevoProyecto });
    setNuevoProyecto({ titulo: '', categoria: '', estado: 'Activo', descripcion1: '', descripcion2: '', recursos: [], equipo: [] });
    setError('');
  };

  return (
  <Card sx={{ borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', p: 2 }}>
    <CardContent>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
        Nuevo Proyecto
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
          {error}
        </Alert>
      )}

      <Stack spacing={2.5}>
        <TextField
          fullWidth
          label="Título"
          name="titulo"
          value={nuevoProyecto.titulo}
          onChange={handleChange}
          variant="outlined"/>
          
        <TextField
          fullWidth
          label="Categoría"
          name="categoria"
          value={nuevoProyecto.categoria}
          onChange={handleChange}
          variant="outlined"/>
        <TextField
          fullWidth
          multiline
          rows={2}
          label="Descripción 1"
          name="descripcion1"
          value={nuevoProyecto.descripcion1}
          onChange={handleChange}
          variant="outlined"/>

        <TextField
          fullWidth
          multiline
          rows={2}
          label="Descripción 2"
          name="descripcion2"
          value={nuevoProyecto.descripcion2}
          onChange={handleChange}
          variant="outlined"/>

        <FormControl fullWidth>
          <InputLabel id="estado-label">Estado</InputLabel>
          <Select
            labelId="estado-label"
            label="Estado"
            name="estado"
            value={nuevoProyecto.estado}
            onChange={handleChange}>

            <MenuItem value="Activo">Activo</MenuItem>
            <MenuItem value="Pendiente">Pendiente</MenuItem>
            <MenuItem value="En proceso">En proceso</MenuItem>
            <MenuItem value="Completo">Completo</MenuItem>
            <MenuItem value="En pausa">En pausa</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          size="large"
          startIcon={<AddCircleIcon />}
          onClick={handleAgregar}
          sx={{ 
            py: 1.5, 
            textTransform: 'none', 
            fontWeight: 'bold', 
            borderRadius: 2,
            boxShadow: 'none',
            '&:hover': { boxShadow: '0 4px 12px rgba(25, 118, 210, 0.2)' }
          }}>
          Agregar proyecto
        </Button>
      </Stack>
    </CardContent>
  </Card>
);
}

export default FormularioProyecto;