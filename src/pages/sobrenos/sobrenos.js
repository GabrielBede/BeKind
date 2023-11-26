import React from 'react';
import Banner from '../../img/Banner-SobreNos.png'
import AnjosDaNoite from '../../img/ONG-AnjosDaNoite.png';
import AnjosDaRua from '../../img/ONG-AnjosDaRua.png';
import BemDaMadrugada from '../../img/ONG-BemDaMadrugada.png';
import EntregaPorSP from '../../img/ONG-EntregaPorSP.png';
import GAS from '../../img/ONG-GAS.png';
import MovimentoRuasSP from '../../img/ONG-MovimentoRuasSP.png';
import OharDeBia from '../../img/ONG-OharDeBia.png';
import ONGAmamos from '../../img/ONG-ONGAmamos.png';
import PrefeituraDeGuarulhos from '../../img/ONG-PrefeituraDeGuarulhos.png';
import SPInvisivel from '../../img/ONG-SPInvisivel.png';
import SPSemFome from '../../img/ONG-SPSemFome.png';

import Angel from '../../img/Card-AngelGarcia.png'
import Gabriel from '../../img/Card-GabrielBede.png'
import Isaque from '../../img/Card-IsaqueSouza.png'
import Israel from '../../img/Card-IsraelEsdras.png'
import João from '../../img/Card-JoaoGimenes.png'
import Kaic from '../../img/Card-KaicPaulino.png'
import Pedro from '../../img/Card-PedroHenrique.png'

import './sobrenos.css';
import Footer from '../../components/Footer';

const Sobrenos = () => {
  return (
    <div class="conteudo">


      <section className="capa">
        <div className="conteudo">
          <h1 className="capa-conteudo">Transformando <br /> invisibilidade em esperança </h1>
          <p className="capa-conteudo">O projeto BeKind está iluminando os caminhos daqueles que mais precisam,
            promovendo a solidariedade e a inclusão em cada gesto de bondade.</p>

          <input className="btn-ler" type="submit" value="Ler mais" />
        </div>
        <img src={Banner}
          alt="Braços de duas pessoas indicando ajuda" />
      </section>

      <div className="logos-container">
        <div className="logos-slide">
          <img src={AnjosDaNoite} alt="ONG - AnjosDaNoite" draggable="false" />
          <img src={AnjosDaRua} alt="ONG - AnjosDaRua" draggable="false" />
          <img src={BemDaMadrugada} alt="ONG - BemDaMadrugada" draggable="false" />
          <img src={EntregaPorSP} alt="ONG - EntregaPorSP" draggable="false" />
          <img src={GAS} alt="ONG - GAS" draggable="false" />
          <img src={MovimentoRuasSP} alt="ONG - MovimentoRuasSP" draggable="false" />
          <img src={OharDeBia} alt="ONG - OharDeBia" draggable="false" />
          <img src={ONGAmamos} alt="ONG - ONGAmamos" draggable="false" />
          <img src={PrefeituraDeGuarulhos} alt="ONG - PrefeituraDeGuarulhos" draggable="false" />
          <img src={SPInvisivel} alt="ONG - SPInvisivel" draggable="false" />
          <img src={SPSemFome} alt="ONG - SPSemFome" draggable="false" />
        </div>
      </div>

      <div className="quem-somos">
        <h2>Quem somos?</h2>
        <p className='quem-somos-p'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nós somos um grupo de estudantes da Etec de Guarulhos, movidos por uma
          visão de transformação. Diariamente, testemunhamos as lutas das pessoas em situações vulneráveis e
          decidimos agir. Formamos a BeKind com um propósito claro: criar mudanças reais na sociedade. Nossa
          equipe é composta por indivíduos determinados a fazer a diferença, com cada um trazendo habilidades e
          paixões únicas. Nosso desejo é que a BeKind não seja apenas um projeto escolar, mas sim um movimento
          capaz de impactar vidas.</p>

        <p className='quem-somos-p'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Queremos que nossos esforços alcancem não apenas a nossa comunidade, mas
          se expandam gradualmente por todo o Brasil. Acreditamos que a bondade e a empatia podem criar ondas de
          mudança, e é com esse ideal em mente que trabalhamos incansavelmente. Nossa missão vai além de fornecer
          ajuda material; queremos construir uma cultura de solidariedade duradoura. Procuramos conectar pessoas,
          inspirar ações positivas e promover uma mentalidade de inclusão. Cada gesto, cada ato de bondade conta.
        </p>
      </div>

      <div className="nosso-grupo">
        <h2>Conheça o nosso grupo </h2>
        <p>Conheça o grupo por trás do BeKind, uma equipe dedicada em trazer esperança e mudança positiva.</p>

        <div className="cards">
          <div className="card">
            <img src={Angel} alt="Card - Angel Garcia" />
            <h3>Angel Garcia</h3>
            <strong className='cargo'>BACK-END</strong>
          </div>

          <div className="card">
            <img src={Gabriel} alt="Card - Gabriel Bedê" />
            <h3>Gabriel Bedê</h3>
            <strong className='cargo'>CEO DA BEKIND</strong>
          </div>

          <div className="card">
            <img src={Isaque} alt="Card - Isaque Souza" />
            <h3>Isaque Souza</h3>
            <strong className='cargo'>FULL STACK</strong>
          </div>

          <div className="card">
            <img src={Israel} alt="Card - Israel Esdras" />
            <h3>Israel Esdras</h3>
            <strong className='cargo'>FRONT-END</strong>
          </div>

          <div className="card">
            <img src={João} alt="Card - João Gimenes" />
            <h3>João Gimenes</h3>
            <strong className='cargo'>BACK-END</strong>
          </div>

          <div className="card">
            <img src={Kaic} alt="Card - Kaic Paulino" />
            <h3>Kaic Paulino</h3>
            <strong className='cargo'>FRONT-END</strong>
          </div>

          <div className="card">
            <img src={Pedro} alt="Card - Pedro Henrique" />
            <h3>Pedro Henrique</h3>
            <strong className='cargo'>FULL STACK</strong>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Sobrenos