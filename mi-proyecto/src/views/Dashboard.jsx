function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Bienvenido al sistema de proyectos</h1>
      <p>Gestioná y seguí el estado de todos los proyectos de la facultad.</p>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total de proyectos</h3>
          <span>10</span>
        </div>
        <div className="dashboard-card">
          <h3>Proyectos activos</h3>
          <span>4</span>
        </div>
        <div className="dashboard-card">
          <h3>En proceso</h3>
          <span>2</span>
        </div>
        <div className="dashboard-card">
          <h3>Pendientes</h3>
          <span>2</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;