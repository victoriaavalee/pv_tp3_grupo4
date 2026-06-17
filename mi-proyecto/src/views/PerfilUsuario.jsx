import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';
import { Container, Typography, Paper } from '@mui/material';


function PerfilUsuario() {
  const { usuario } = useContext(UsuarioContext);
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Perfil de usuario
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography><strong>Nombre:</strong> {usuario.nombre}</Typography>
          <Typography><strong>Rol:</strong> {usuario.rol}</Typography>
          <Typography><strong>Institución:</strong> {usuario.institucion}</Typography>
          <Typography><strong>Carrera:</strong> {usuario.carrera}</Typography>
      </Paper>
    </Container>
  )
}

export default PerfilUsuario;