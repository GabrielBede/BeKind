import React from 'react';
import { FooterContainer, FooterLogo, HorizontalLine, SocialIcons, SocialIconLink, SocialIcon, CopyrightText } from './FooterElements';

import Facebook from '../../img/Icon-Facebook.svg';
import Twitter from '../../img/Icon-Twitter.svg';
import LinkedIn from '../../img/Icon-Linkedin.svg';
import Instagram from '../../img/Icon-Instagram.svg';


const Footer = () => {
  return (
    <FooterContainer>
      <HorizontalLine />
      <FooterLogo src={require('../../img/LogoBeKindPreta.png')} alt='Logo BeKind - Preto' />
      <CopyrightText>
        Copyright by © BeKind.<br />
        Todos os direitos reservados
      </CopyrightText>
      <SocialIcons>
        <SocialIconLink href="#"><img src={Facebook} alt="Facebook" /></SocialIconLink>
        <SocialIconLink href="#"><img src={Twitter} alt="Twitter" /></SocialIconLink>
        <SocialIconLink href="#"><img src={LinkedIn} alt="LinkedIn" /></SocialIconLink>
        <SocialIconLink href="#"><img src={Instagram} alt="Instagram" /></SocialIconLink>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
