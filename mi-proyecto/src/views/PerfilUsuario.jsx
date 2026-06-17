import { useContext, useState } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';
import { Container, Typography, Paper, TextField, Button, Stack } from '@mui/material';

function PerfilUsuario() {
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);
  const [editando, setEditando] = useState(false);
  const [formData, setFormData] = useState(usuario);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGuardar = () => {
    actualizarPerfil(formData);
    setEditando(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Perfil de usuario
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        {editando ? (
          <Stack spacing={2}>
            <TextField label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} fullWidth />
            <TextField label="Rol" name="rol" value={formData.rol} onChange={handleChange} fullWidth />
            <TextField label="Institución" name="institucion" value={formData.institucion} onChange={handleChange} fullWidth />
            <Button variant="contained" onClick={handleGuardar}>Guardar Cambios</Button>
          </Stack>
        ) : (
          <>
            <Typography><strong>Nombre:</strong> {usuario.nombre}</Typography>
            <Typography><strong>Rol:</strong> {usuario.rol}</Typography>
            <Typography><strong>Institución:</strong> {usuario.institucion}</Typography>
            <Button variant="outlined" sx={{ mt: 2 }} onClick={() => setEditando(true)}>Editar Perfil</Button>
          </>
        )}
      </Paper>
    </Container>
  )
}

export default PerfilUsuario;
