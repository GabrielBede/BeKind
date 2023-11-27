import React, { useState, useEffect } from 'react';
import './blog.css';
import Noticias from './noticias.json';
import Footer from '../../components/Footer/index';

const Blog = () => {
  const [noticias, setNoticias] = useState([]);
  const [noticiasExibidas, setNoticiasExibidas] = useState(0);

  useEffect(() => {
    // Carrega notícias do arquivo JSON
    setNoticias(Noticias);
  }, []); // A dependência vazia garante que isso seja executado apenas uma vez ao montar o componente

  const exibirNoticias = () => {
    setNoticiasExibidas(noticiasExibidas + 2);
  };

  return (
    <div class="conteudo">
      <h2>Retratos das vidas nas calçadas</h2>
      <div id="noticias-container">
        {/* Renderizar notícias */}
        {noticias.slice(0, noticiasExibidas).map(noticia => (
          <div key={noticia.id} className="post">
            <img src={noticia.imagem} alt={`Imagem da notícia ${noticia.id}`} />
            <p>
              <b>{noticia.titulo}</b><br />
              {noticia.conteudo}
            </p>
            <a href={noticia.link} className="btn-artigo">Ler artigo</a>
          </div>
        ))}
      </div>
      <button id="btn-vermais" onClick={exibirNoticias}>
        Ver mais...
      </button>

      <Footer/>
    </div>
  );
};

export default Blog;


