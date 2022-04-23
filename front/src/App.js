
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import DetalleMovie from './Components/DetalleMovie/DetalleMovie';
import CarteletaFavourite from './Components/CarteletaFavourite/CarteletaFavourite';
import CarteleraBuscador from './Components/CarteleraBuscador/CarteleraBuscador';
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/detalle/:id' element={<DetalleMovie />} />
        <Route path='/favoritas' element={<CarteletaFavourite />} exact />
        <Route path='/buscadas' element={<CarteleraBuscador />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
