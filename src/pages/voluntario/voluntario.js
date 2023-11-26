import React from 'react';
import { User, FileText, AtSign, Lock } from 'react-feather';
import InputMask from 'react-input-mask';
import Footer from '../../components/Footer/index';
import './voluntario.css';


const Voluntario = () => {
  return (
    <div class="conteudo">
      <h1 className='h1-vol'>Cadastrar</h1>

      <form>
        <div className="single-input-vol">
          <span><User /></span>
          <input type="text" name="cxnome" placeholder="Nome" autocomplete="off" required />
        </div>

        <div className="single-input-vol">
          <span><FileText /></span>
          <InputMask mask="999.999.999-99" maskChar="_" type="text" name="cxcpf" placeholder="CPF" autoComplete="off" required/>
        </div>

        <div className="single-input-vol">
          <span><AtSign /></span>
          <input type="email" name="cxemail" placeholder="Email" autocomplete="off" required />
        </div>

        <div className="single-input-vol">
          <span><Lock /></span>
          <input type="password" name="cxsenha" placeholder="Senha" autocomplete="off" required />
        </div>

        <input type="submit" className="btn" value="Cadastrar" />
      </form>

      <Footer />
    </div>
  )
};

export default Voluntario;