import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/proyectos">Proyectos</NavLink></li>
        <li><NavLink to="/perfil">Perfil</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;