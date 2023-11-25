import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/index';
import SobreNos from './pages/sobrenos/sobrenos';
import Blog from './pages/blog/blog';
import Voluntario from './pages/voluntario/voluntario';
import Eventos from './pages/eventos/eventos';
import Loja from './pages/loja/loja';
import Doe from './pages/doe/doe';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/index' element={<Home />} />
        <Route path='/sobrenos' element={<SobreNos />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/voluntario' element={<Voluntario />} />
        <Route path='/eventos' element={<Eventos />} />
        <Route path='/loja' element={<Loja />} />
        <Route path='/doe' element={<Doe />} />
      </Routes>
    </Router>
  );
}

export default App;
