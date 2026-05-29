function DetalleProyecto({ proyecto, onVolver }) {
  const { titulo, categoria, estado, descripcion1, descripcion2, recursos, equipo } = proyecto;

  return (
    <div className="detalle-container">
      <button className="btn-volver" onClick={onVolver}>← Volver</button>
      <h2>{titulo}</h2>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Estado:</strong> {estado}</p>

      <h3>Descripción</h3>
      <p>{descripcion1}</p>
      <p>{descripcion2}</p>

      <h3>Recursos</h3>
      <ul>
        {recursos.map((r, i) => (
          <li key={i}>
            <a href={r.url} target="_blank" rel="noreferrer">{r.tipo}</a>
          </li>
        ))}
      </ul>

      <h3>Equipo</h3>
      <ul>
        {equipo.map((m, i) => (
          <li key={i}><strong>{m.nombre}</strong> — {m.rol}</li>
        ))}
      </ul>
    </div>
  );
}

export default DetalleProyecto;