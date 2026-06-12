import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { AccountTree as AccountTreeIcon } from '@mui/icons-material';

function Header() {
  return (
  <Box component="header" sx={{ width: '100%', mb: 0 }}>
    <AppBar 
      position="static" 
      color="inherit" 
      elevation={0} 
      sx={{ 
        
        borderColor: 'divider', 
        backgroundColor: '#929cda',
        py: 1 
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 ,m:'auto'}}>
            {/* Icono temático para Gestión de Proyectos */}
            <AccountTreeIcon color="white" sx={{ fontSize: 35 }} />
            
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
        </Toolbar>
      </Container>
    </AppBar>
  </Box>
);
}

export default Header;