import { useState } from 'react';

function FormularioProyecto({ onAgregar }) {
  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: '',
    categoria: '',
    estado: 'Activo',
    descripcion1: '',
    descripcion2: '',
    recursos: [],
    equipo: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProyecto({ ...nuevoProyecto, [name]: value });
  };

  const handleAgregar = () => {
    const { titulo, categoria } = nuevoProyecto;
    if (titulo.trim() === '' || categoria.trim() === '') {
      alert('Complete todos los campos');
      return;
    }
    onAgregar({ id: Date.now(), ...nuevoProyecto });
    setNuevoProyecto({ titulo: '', categoria: '', estado: 'Activo', descripcion1: '', descripcion2: '', recursos: [], equipo: [] });
  };

  return (
    <article className="card-proyecto card-agregar">
      <h3>Nuevo Proyecto</h3>
      <input type="text" name="titulo" placeholder="Título" value={nuevoProyecto.titulo} onChange={handleChange} />
      <input type="text" name="categoria" placeholder="Categoría" value={nuevoProyecto.categoria} onChange={handleChange} />
      <input type="text" name="descripcion1" placeholder="Descripción 1" value={nuevoProyecto.descripcion1} onChange={handleChange} />
      <input type="text" name="descripcion2" placeholder="Descripción 2" value={nuevoProyecto.descripcion2} onChange={handleChange} />
      <select name="estado" value={nuevoProyecto.estado} onChange={handleChange}>
        <option value="Activo">Activo</option>
        <option value="Pendiente">Pendiente</option>
        <option value="En proceso">En proceso</option>
        <option value="Completo">Completo</option>
        <option value="En pausa">En pausa</option>
      </select>
      <button className="btn-agregar" onClick={handleAgregar}>Agregar proyecto</button>
    </article>
  );
}

export default FormularioProyecto;