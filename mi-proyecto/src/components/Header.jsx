import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { AccountTree as AccountTreeIcon } from '@mui/icons-material';
import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

function Header() {
  const { usuario } = useContext(UsuarioContext)
  return (
  <Box component="header" sx={{ width: '100%', mb: 0 }}>
    <AppBar 
      position="static" 
      color="inherit" 
      elevation={0} 
      sx={{ 
        backgroundColor: '#929cda',
        py: 1 
      }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center', 
            }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            ></Box>
            {/* Icono temático para Gestión de Proyectos */}
            <AccountTreeIcon color="white"
              sx={{ 
                fontSize: 35,
              }} />
            
            <Typography
              variant="h5"
              component="h1"
              sx={{ 
                fontWeight: 800, 
                color: '#fff',
                letterSpacing: '-0.02em',
                // Asegura que el título sea el foco principal
                textTransform: 'none'
              }}
            >
              Plataforma de Gestión de Proyectos
            </Typography>
          </Box>
          <Box
              sx={{
                textAlign: 'right',
                backgroundColor: 'rgba(255,255,255,0.15)',
                px: 2,
                py: 0.5,
                borderRadius: 2
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: '#fff',
                  fontWeight: 700
                }}
              >
                {usuario.nombre}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#f0f0f0'
                }}
              >
                {usuario.rol}
              </Typography>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </Box>
);
}

export default Header;