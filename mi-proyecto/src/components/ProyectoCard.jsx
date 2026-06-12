import { Card, CardContent, CardActions, Typography, Button, Chip, Box, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { Delete as DeleteIcon, Visibility as ViewIcon } from '@mui/icons-material';

function ProyectoCard({ proyecto, onEliminar }) {
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      borderRadius: 3, 
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }
    }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: '#1a2035' }}>
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          <strong>Categoría:</strong> {categoria}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Chip 
            label={estado} 
            size="small" 
            color={estado === 'Completo' || estado === 'Activo' ? 'success' : 'warning'} 
            sx={{ fontWeight: 'bold', color: '#ffffff' }} // Texto en blanco solicitado
          />
        </Box>
      </CardContent>
      
      <Divider />
      
      <CardActions sx={{ p: 2, justifyContent: 'space-between' }}>
        <Button 
          size="small" 
          color="error" 
          startIcon={<DeleteIcon />}
          onClick={() => onEliminar(id)}
          sx={{ textTransform: 'none', fontWeight: 700 }}
        >
          Eliminar
        </Button>
        <Button 
          size="small" 
          variant="contained" 
          component={Link} 
          to={`/proyectos/${id}`}
          startIcon={<ViewIcon />}
          sx={{ textTransform: 'none', borderRadius: 2, fontWeight: 700, color: '#ffffff' }} // Texto en blanco solicitado
        >
          Detalle
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProyectoCard;