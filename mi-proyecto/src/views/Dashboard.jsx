import '../css/Dashboard.css'

function Dashboard() {
  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <h1>Bienvenido al sistema de proyectos</h1>
        <p>Gestioná y seguí el estado de todos los proyectos de la facultad.</p>
      </div>
      
      <div className="dashboard-stats">
        <article className="stat-card">
          <h3>Total de proyectos</h3>
          <span>10</span>
        </article>
        <article className="stat-card">
          <h3>Proyectos activos</h3>
          <span>4</span>
        </article>
        <article className="stat-card">
          <h3>En proceso</h3>
          <span>2</span>
        </article>
        <article className="stat-card">
          <h3>Pendientes</h3>
          <span>2</span>
        </article>
      </div>
    </section>
  );
}

export default Dashboard;