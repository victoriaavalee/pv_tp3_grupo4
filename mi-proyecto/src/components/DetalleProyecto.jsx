import { useParams, useNavigate } from 'react-router-dom';
import { obtenerProyectos } from '../services/proyectoService';
import { Container, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, Alert, List, ListItem  } from '@mui/material';
import '../css/DetalleProyecto.css';

function DetalleProyecto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const proyectos = obtenerProyectos();
  const proyecto = proyectos.find(p => p.id === Number(id));

  if (!proyecto) {
    return <p>Proyecto no encontrado.</p>;
  }

  const { titulo, categoria, estado, descripcion1, descripcion2, recursos, equipo } = proyecto;

  return (
    <Container className="detalle-container">
      <Button className="btn-volver" onClick={() => navigate('/proyectos')}>← Volver</Button>
      <Typography variant="h5">{titulo}</Typography>
      <div>
        <p><strong>Categoría:</strong> {categoria}</p>
        <p><strong>Estado:</strong> {estado}</p>
      </div>

      <Typography variant="h6">Descripción</Typography>
      <p>{descripcion1}</p>
      <p>{descripcion2}</p>
      <Typography variant="h6">Recursos</Typography>

      {recursos.length > 0 ? (
        <List>
          {recursos.map((r, i) => (
            <ListItem  key={i}>
              <a href={r.url} target="_blank" rel="noreferrer">{r.tipo}</a>
            </ListItem>
          ))}
        </List>
        ) : (
        <p>No hay recursos registrados.</p>)}

        <Typography variant="h6">Equipo</Typography>
        <List>
          {equipo.map((m, i) => (
            <ListItem key={i}>
              <strong>{m.nombre}</strong> — {m.rol}
            </ListItem>
          ))}
        </List>
    </Container>
  );
}

export default DetalleProyecto;