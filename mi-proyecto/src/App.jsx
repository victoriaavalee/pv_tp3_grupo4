import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ListaProyectos from './components/ListaProyectos';
import DetalleProyecto from './components/DetalleProyecto';
import Dashboard from './views/Dashboard';
import PerfilUsuario from './views/PerfilUsuario';
import { UsuarioProvider } from './context/UsuarioContext';
import './css/App.css';

function App() {
  return (
    <UsuarioProvider>
      <BrowserRouter>
        <header>
          <Header />
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/proyectos" element={<ListaProyectos />} />
            <Route path="/proyectos/:id" element={<DetalleProyecto />} />
            <Route path="/perfil" element={<PerfilUsuario />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </UsuarioProvider>
  );
}

export default App;