import { useNavigate } from 'react-router-dom';

function ProyectoCard({ proyecto, onEliminar }) {
  const { id, titulo, categoria, estado } = proyecto;
  const navigate = useNavigate();

  return (
    <article className="card-proyecto">
      <div className="contenido-card">
        <h3>{titulo}</h3>
        <p><strong>Categoría:</strong> {categoria}</p>
        <span className="estado">Estado: {estado}</span>
      </div>
      <div className="botones-card">
        <button className="btn-eliminar" onClick={() => onEliminar(id)}>
          Eliminar
        </button>
        <button className="btn-detalle" onClick={() => navigate(`/proyectos/${id}`)}>
          Ver detalle
        </button>
      </div>
    </article>
  );
}

export default ProyectoCard;