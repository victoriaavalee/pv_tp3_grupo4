import { NavLink } from 'react-router-dom';
import { Box, Stack, Button } from '@mui/material';

function Nav() {
  return(<Box component="nav" sx={{ py: 2, }}>
    <Stack 
      direction="row" 
      spacing={3} 
      justifyContent="center" 
      component="ul" 
      sx={{ listStyle: 'none', m: 0, p: 0 }}
    >
      {['Inicio', 'Proyectos', 'Perfil'].map((text) => (
        <Button
          key={text}
          component={NavLink} 
          to={text === 'Inicio' ? '/' : `/${text.toLowerCase()}`}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            color: '#ffffff', 
            borderRadius: 2,
            px: 3,
            '&.active': {
              color: '#ffffff',
              bgcolor: '#7a85b7', 
              boxShadow: 'inset 0 -2px 0 #ffffff' 
            },
            '&:hover': { 
              bgcolor: 'rgba(255,255,255,0.08)',
              transition: 'background-color 0.3s'
            }
          }}
        >
          {text}
        </Button>
      ))}
    </Stack>
  </Box>
);
}

export default Nav;