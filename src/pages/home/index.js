import React from 'react';
import Aplicativo from '../../img/Aplicativo.png';
import GooglePlay from '../../img/Btn-Google-Play.png';
import AppleStore from '../../img/Btn-Apple-Store.png'
import AplicativoDownload from "../../img/Aplicativo-Download.png";
import Aspas from "../../img/Aspas-Duplas.png";
import SPInvisivel from "../../img/Perfil-SpInvisivel.png";
import Advogado from "../../img/Perfil-Advogado.png";
import AnjosDaRua from "../../img/Perfil-AnjosDaRua.png";

import { User, Lock } from 'react-feather';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './home.css';
import Footer from '../../components/Footer/index';

import Voluntario from '../voluntario/voluntario'; 

const Home = () => {
  return (
    <div class="conteudo">
      <section className="section-apresentacao">
        <div>
          <h1>Seja <strong>gentil</strong> e doe <br /> para quem precisa</h1>
          <p>Juntos, podemos fazer a diferença. Descubra como você pode se tornar parte ativa da mudança que queremos ver no mundo.</p>
          <a href="/voluntario" className="btn-voluntario">Seja voluntário!</a>
        </div>
        <div className="box-img-main">
          <img className="aplicativo" src={Aplicativo} alt="Imagem do aplicativo - BeKind" draggable="false" />
        </div>
      </section>



      <section className="section-impacto">
        <div className="text-impacto">
          <h2>Nosso impacto na comunidade</h2>
          <p>Um pequeno ato de generosidade pode fazer toda a diferença.</p>
        </div>

        <div className="impacto">
          <div className="imp1">
            <h1>
              <div className="value">+670</div>
            </h1>
            <h3>Doações<br /> recebidas</h3>
          </div>
          <div className="imp2">
            <h1>
              <div className="value">+1500</div>
            </h1>
            <h3>Dinheiro<br /> arrecadado</h3>
          </div>
          <div className="imp3">
            <h1>
              <div className="value">+11</div>
            </h1>
            <h3>ONGs<br /> parceiras</h3>
          </div>
          <div className="imp4">
            <h1>
              <div className="value">+500</div>
            </h1>
            <h3>Pessoas<br /> ajudadas</h3>
          </div>
        </div>
      </section>


      <section className="section-download">
        <h2>Baixe nosso aplicativo</h2>
        <div className="btns-download">
          <a href="/">
            <img src={GooglePlay} alt="Download - Google Play" />
          </a>
          <a href="/">
            <img src={AppleStore} alt="Download - Apple Store" />
          </a>
        </div>
        <img className="img-app" src={AplicativoDownload} alt="Imagem do aplicativo - BeKind" />
      </section>



      <section className="section-feedback">
        <h2>Avaliações sobre o nosso projeto</h2>

        <div className="feedbacks">
          <div className="feedback">
            <div className="feed">
              <img src={Aspas} alt="Aspas duplas" />
              <p>Parabéns pela iniciativa e por se proporem a apoiar a transformação da realidade de pessoas
                em situação de rua.</p>
            </div>

            <div className="comentario">
              <img src={SPInvisivel} alt="Foto de perfil - SP Invisivel" />
              <div className="user">
                <p>SP Invisivel</p>
                <small>Organização não-governamental</small>
              </div>
            </div>
          </div>

          <div className="feedback">
            <div className="feed">
              <img src={Aspas} alt="Aspas duplas" />
              <p>Quero parabenizar vocês pelo incrível projeto. É uma iniciativa inspiradora e necessária para
                a sociedade.</p>
            </div>

            <div className="comentario">
              <img src={Advogado} alt="Foto de perfil - Advogado" />
              <div className="user">
                <p>Marcos Mendes</p>
                <small>Advogado</small>
              </div>
            </div>
          </div>

          <div className="feedback">
            <div className="feed">
              <img src={Aspas} alt="Aspas duplas" />
              <p>Sensacional a plataforma, ajudar muito a encontrarmos quem realmente está precisando de
                ajuda.</p>
            </div>

            <div className="comentario">
              <img src={AnjosDaRua} alt="Foto de perfil - Anjos da Rua" />
              <div className="user">
                <p>Anjos da Rua</p>
                <small>Organização não-governamental</small>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section className="section-informacoes">
        <h2>Se mantenha informado</h2>
        <p> Faça parte de uma transformação positiva na vida das pessoas em situação de rua. Inscreva-se e se
          mantenha informado sobre as últimas atualizações, eventos e oportunidades do projeto BeKind.</p>

        <form method="post" action="./model/inserirVoluntario.php">

          <div className="single-input">
            <span><User /></span>
            <input type="text" name="cxnome" placeholder="Nome" autocomplete="off" required />
          </div>

          <div className="single-input">
            <span><Lock /></span>
            <input type="email" name="cxemail" placeholder="Email" autocomplete="off" required />
          </div>

          <input type="submit" className="btn" value="Cadastrar" />

        </form>
      </section>

      <Footer />
    </div>
  )
}

export default Home;