import '../src/css/App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ListaProyectos from './components/ListaProyectos';

function App() {
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
}

export default App;