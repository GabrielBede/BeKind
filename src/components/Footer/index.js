import React from 'react';
import { FooterContainer, FooterLogo, HorizontalLine, SocialIcons, SocialIconLink, SocialIcon, CopyrightText } from './FooterElements';


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
        <SocialIconLink href="#"><SocialIcon src={require('../../img/Icon-Facebook.svg')} alt="Facebook" /></SocialIconLink>
        <SocialIconLink href="#"><SocialIcon src={require('../../img/Icon-Twitter.svg')} alt="Twitter" /></SocialIconLink>
        <SocialIconLink href="#"><SocialIcon src={require('../../img/Icon-Linkedin.svg')} alt="LinkedIn" /></SocialIconLink>
        <SocialIconLink href="#"><SocialIcon src={require('../../img/Icon-Instagram.svg')} alt="Instagram" /></SocialIconLink>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
