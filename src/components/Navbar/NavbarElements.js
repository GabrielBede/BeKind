import { Menu } from 'react-feather';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #FFFFFF;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((90vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #252525;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9em;


  &.active {
    color: #007CE0;
    font-weight: 600;

  }
`;

export const Bars = styled(Menu)`
  display: none;
  color: #252525;

  @media screen and (max-width: 880px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    margin: 20px
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 880px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 880px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #007CE0;
  padding: 10px 22px;
  color: #FFFFFF;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin-left: 24px;

  &:hover {
    background: #0063C3;
    transition: all 0.2s ease-in-out;
  }
`;

export const LogoImage = styled.img`
  width: 100px; 
`;