import '../css/PerfilUsuario.css';

function PerfilUsuario() {
  return (
    <section className="perfil-container">
      <h1 className="perfil-titulo">
        Perfil de usuario
      </h1>
      <article className="perfil-card">
        <div className="perfil-info">
          <p><strong>Nombre:</strong> Usuario Ejemplo</p>
          <p><strong>Rol:</strong> Alumno</p>
          <p><strong>Institución:</strong> Facultad de Ingeniería - UNJu</p>
          <p><strong>Carrera:</strong> Analista Programador Universitario</p>
        </div>
      </article>
    </section>
  )
}

export default PerfilUsuario;