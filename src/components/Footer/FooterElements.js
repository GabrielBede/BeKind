import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const FooterLogo = styled.img`
  width: 100px;
  margin-bottom: 10px;
`;

export const HorizontalLine = styled.hr`
  margin-top: 80px;
  width: 35%;
  height: 1px;
  background-color: var(--cor-texto);
  margin-bottom: 30px;
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`;

export const SocialIconLink = styled.a`
  margin: 3px;
`;

export const SocialIcon = styled.img`
  width: 30px;
  height: 30px;

  &:hover {
    filter: invert(100%);
  }
`;

export const CopyrightText = styled.p`
  font-size: 0.9em;
  color: #252525;
`;
