import styled from 'styled-components';
import logo from '../../assets/logo.png';

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 5px solid #2271d1;
  background-color: #000000;
  padding: 2rem;
  position: relative;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <img src={logo} alt="Logo AluraFlix" />
    </FooterContainer>
  );
};
