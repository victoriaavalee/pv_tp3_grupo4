import { useParams, useNavigate } from 'react-router-dom';
import { obtenerProyectos } from '../services/proyectoService';
import {
  Container, Typography, Button, Card, CardContent,
  Box, Grid, Chip, Avatar, List, ListItem, ListItemText,
  ListItemIcon, Stack
} from '@mui/material';
import {
  ArrowBack, Link as LinkIcon, Group as GroupIcon,
  PictureAsPdf, GitHub, CloudQueue
} from '@mui/icons-material';

const getEstadoColor = (estado) => {
  switch (estado) {
    case 'Activo': return 'success';
    case 'Completo': return 'success';
    case 'Pendiente': return 'warning';
    case 'En proceso': return 'info';
    case 'En pausa': return 'default';
    default: return 'default';
  }
};

const getRecursoIcono = (tipo) => {
  switch (tipo) {
    case 'PDF': return <PictureAsPdf color="error" />;
    case 'GitHub': return <GitHub color="action" />;
    case 'Drive': return <CloudQueue color="primary" />;
    default: return <LinkIcon color="primary" />;
  }
};

function DetalleProyecto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const proyectos = obtenerProyectos();

  const proyecto = proyectos.find(p => p.id == id);

  if (!proyecto) {
    return (
      <Typography variant="h6" sx={{ p: 5, textAlign: 'center', color: 'text.secondary' }}>
        Proyecto no encontrado.
      </Typography>
    );
  }

  const { titulo, categoria, estado, descripcion1, descripcion2, recursos, equipo } = proyecto;

  return (
    <Box sx={{ bgcolor: '#f4f6f8', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">

        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/proyectos')}
          variant="outlined"
          sx={{ mb: 4, fontWeight: 'bold', borderRadius: 2 }}
        >
          Volver a proyectos
        </Button>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
              <Box sx={{ bgcolor: '#1a2035', px: 3, py: 2.5, display: 'flex', alignItems: 'center', gap: 2 }}>
                <GroupIcon sx={{ color: '#ffffff', fontSize: 32 }} />
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#ffffff' }}>
                  {titulo}
                </Typography>
              </Box>

              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
                  <Chip label={categoria} variant="outlined" color="primary" />
                  <Chip
                    label={estado}
                    color={getEstadoColor(estado)}
                    sx={{ fontWeight: 'bold', color: '#ffffff' }}
                  />
                </Stack>

                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Descripción del Proyecto
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                  {descripcion1}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {descripcion2}
                </Typography>
              </CardContent>
            </Card>

            <Box sx={{ mt: 5 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
                Recursos y Enlaces
              </Typography>
              <Grid container spacing={2}>
                {recursos.map((r, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Card variant="outlined" sx={{ '&:hover': { bgcolor: '#e3f2fd' }, borderRadius: 2 }}>
                      <ListItem
                        component="a"
                        href={r.url}
                        target="_blank"
                        sx={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        <ListItemIcon>{getRecursoIcono(r.tipo)}</ListItemIcon>
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
                      <Avatar sx={{ bgcolor: '#1a2035', color: '#ffffff', fontWeight: 'bold' }}>
                        {m.nombre.charAt(0)}
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={m.nombre}
                      secondary={m.rol}
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
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
