import React from 'react';

import ProdutoEco from '../../img/Produto-ECO.png';
import ProdutoCaneca from '../../img/Produto-Caneca.png';
import ProdutoCamisaBranca from '../../img/Produto-CamisaBranca.png';
import ProdutoCamisaPreta from '../../img/Produto-CamisaPreta.png';
import ProdutoAdesivos from '../../img/Produto-Adesivo.png';
import ProdutoPoster from '../../img/Produto-Poster.png';

import'./loja.css';
import Footer from '../../components/Footer';

const Loja = () => {
  return (
    <div class="conteudo">

      <h2>Nossos Produtos</h2>

      <section className="flex">
        <div>
          <a href="/">
            <img src={ProdutoEco} alt="" draggable="false"/>
              <p className='loja-p'>Sacola ECO - BeKind</p>
              <small>R$34,99</small>
          </a>
        </div>
        <div>
          <a href="/">
            <img src={ProdutoCaneca} alt="" draggable="false"/>
              <p className='loja-p'>Caneca - BeKind</p>
              <small>R$14,99</small>
          </a>
        </div>
        <div>
          <a href="/">
            <img src={ProdutoCamisaBranca} alt="" draggable="false"/>
              <p className='loja-p'>T-Shirt: Camisa Branca - BeKind</p>
              <small>R$39,99</small>
          </a>
        </div>
        <div>
          <a href="/">
            <img src={ProdutoCamisaPreta} alt="" draggable="false"/>
              <p className='loja-p'>T-Shirt: Camisa Preta - BeKind</p>
              <small>R$39,99</small>
          </a>
        </div>
        <div>
          <a href="/">
            <img src={ProdutoAdesivos} alt="" draggable="false"/>
              <p className='loja-p'>Adesivos - BeKind</p>
              <small>R$4,99</small>
          </a>
        </div>
        <div>
          <a href="/">
            <img src={ProdutoPoster} alt="" draggable="false"/>
              <p className='loja-p'>Poster - BeKind</p>
              <small>R$6,99</small>
          </a>
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default Loja;