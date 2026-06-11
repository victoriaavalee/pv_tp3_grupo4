import { Link } from 'react-router-dom';

function ProyectoCard({ proyecto, onEliminar }) {
  const { id, titulo, categoria, estado } = proyecto;

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
        <Link
          to={`/proyectos/${id}`}
          className="btn-detalle">
          Ver detalle
        </Link>
      </div>
    </article>
  );
}

export default ProyectoCard;