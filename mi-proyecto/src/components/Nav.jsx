import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'}>
          Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/proyectos" className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'}>
          Proyectos</NavLink>
        </li>
        <li>
          <NavLink to="/perfil" className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'}>
          Perfil</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;