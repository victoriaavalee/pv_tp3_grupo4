import { useParams, useNavigate } from 'react-router-dom';
import { obtenerProyectos } from '../services/proyectoService';
import { Container, Typography, Button, Card, CardContent, Box, Grid, Divider, Chip, Avatar, List, ListItem, ListItemText, ListItemIcon, Stack } from '@mui/material';
import { ArrowBack, Link as LinkIcon, Group as GroupIcon } from '@mui/icons-material';

function DetalleProyecto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const proyectos = obtenerProyectos();
  
  const proyecto = proyectos.find(p => p.id == id);

  if (!proyecto) {
    return <Typography variant="h6" sx={{ p: 5, textAlign: 'center' }}>Proyecto no encontrado.</Typography>;
  }

  const { titulo, categoria, estado, descripcion1, descripcion2, recursos, equipo } = proyecto;

  return (
    <Box sx={{ bgcolor: '#f4f6f8', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
        <Button startIcon={<ArrowBack />} onClick={() => navigate('/proyectos')} sx={{ mb: 4, fontWeight: 'bold' }}>
          Volver
        </Button>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Card sx={{ borderRadius: 3, p: 2 }}>
              <CardContent>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>{titulo}</Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
                  <Chip label={categoria} variant="outlined" color="primary" />
                  <Chip label={estado} color="info" sx={{ color: '#ffffff', fontWeight: 'bold' }} />
                </Stack>
                
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Descripción del Proyecto</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>{descripcion1}</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>{descripcion2}</Typography>
              </CardContent>
            </Card>

            <Box sx={{ mt: 5 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>Recursos y Enlaces</Typography>
              <Grid container spacing={2}>
                {recursos.map((r, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Card variant="outlined" sx={{ '&:hover': { bgcolor: '#e3f2fd' } }}>
                      <ListItem component="a" href={r.url} target="_blank" sx={{ color: 'inherit', textDecoration: 'none' }}>
                        <ListItemIcon><LinkIcon color="primary" /></ListItemIcon>
                        <ListItemText primary={r.tipo} secondary="Click para abrir" />
                      </ListItem>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3 }}>
              <Box sx={{ p: 3, bgcolor: '#1a2035', color: '#ffffff', display: 'flex', alignItems: 'center', gap: 1 }}>
                <GroupIcon />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Equipo</Typography>
              </Box>
              <List>
                {equipo.map((m, i) => (
                  <ListItem key={i} divider={i !== equipo.length - 1}>
                    <ListItemIcon>
                      <Avatar sx={{ bgcolor: 'primary.main', color: '#ffffff' }}>{m.nombre.charAt(0)}</Avatar>
                    </ListItemIcon>
                    <ListItemText primary={m.nombre} secondary={m.rol} />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default DetalleProyecto;