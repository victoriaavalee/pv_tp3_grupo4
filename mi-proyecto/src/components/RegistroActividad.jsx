import { Box, Typography, Divider } from '@mui/material';
import { AccessTime as AccessTimeIcon } from '@mui/icons-material';

function formatearFecha(fecha) {
    const d = new Date(fecha);
    const dia = d.getDate().toString().padStart(2, '0');
    const mes = (d.getMonth() + 1).toString().padStart(2, '0');
    const anio = d.getFullYear();
    const horas = d.getHours().toString().padStart(2, '0');
    const minutos = d.getMinutes().toString().padStart(2, '0');
    return `${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`;
}

function RegistroActividad({ fecha }) {
    if (!fecha) return null;
   return (
  <Box 
    component="section" 
    sx={{ 
      mt: 8,          
      pb: 4, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center' 
    }}
  >
    <Divider sx={{ width: '100%', mb: 4 }} />

    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1, 
        color: 'text.secondary',
        bgcolor: 'action.hover',
        px: 3,
        py: 1.5,
        borderRadius: 2
      }}
    >
      <AccessTimeIcon fontSize="small" />
      
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        Última actualización de la lista: {formatearFecha(fecha)}
      </Typography>
    </Box>
  </Box>
);
}

export default RegistroActividad;
