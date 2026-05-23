import React, { useState, useEffect } from 'react';
import { obtenerProyectos, eliminarProyecto, buscarProyecto } from './services/proyectoService';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ListaProyectos from './components/ListaProyectos';

function App() {
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main>
        <ListaProyectos />
      </main>
      <Footer />
    </>
  );

  useEffect(() => {
    setProyectos(obtenerProyectos());
  }, []);

  const handleEliminar = (id) => {
    eliminarProyecto(id);
    const proyectosActualizados = buscarProyecto(busqueda);
    setProyectos(proyectosActualizados);
  };

  const handleBuscar = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    const proyectosFiltrados = buscarProyecto(valor);
    setProyectos(proyectosFiltrados);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Listado de Proyectos</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Buscar proyecto..." 
          value={busqueda}
          onChange={handleBuscar}
          style={{ padding: '10px', width: '100%', maxWidth: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3>{proyecto.titulo}</h3>
              <p>Categoría: {proyecto.categoria}</p>
              <span style={{ fontSize: '12px', color: '#666' }}>Estado: {proyecto.estado}</span>
            </div>
            <button 
              onClick={() => handleEliminar(proyecto.id)}
              style={{ marginTop: '15px', padding: '8px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;