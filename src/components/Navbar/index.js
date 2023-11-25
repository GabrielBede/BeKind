import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import { LogoImage } from './NavbarElements';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/index'>
          <LogoImage src={require('../../img/LogoBeKind.png')} alt='Logo BeKind' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/index' activeStyle>
            Home
          </NavLink>
          <NavLink to='/sobrenos' activeStyle>
            Sobre Nós
          </NavLink>
          <NavLink to='/blog' activeStyle>
            Blog
          </NavLink>
          <NavLink to='/voluntario' activeStyle>
            Voluntário
          </NavLink>
          <NavLink to='/eventos' activeStyle>
            Eventos
          </NavLink>
          <NavLink to='/loja' activeStyle>
            Loja
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/doe'>Doe</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;