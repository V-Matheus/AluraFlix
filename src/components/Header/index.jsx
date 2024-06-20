import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: #262626;
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: 0 5px 10px #2271d1;
`;

export const ButtonsContainer = styled.nav`
  display: flex;
  gap: 2rem;
  width: Fixed (1, 443px) px;
  height: Fixed (125px) px;
  top: 5px;
  left: 0.5px;
  border: 0px 0px 4px 0px;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Source Sans Pro;
    font-size: 20px;
    font-weight: 900;
    line-height: 24px;
    color: #ffffff;
    border: 2px solid white;
    border-radius: 10px;
    width: 180.13px;
    height: 54px;
  }

  .active {
    color: #2271d1;
    border: 2px solid #2271d1;
    box-shadow: inset 0 0 10px #2271d1;
  }
`;

export const Header = () => {
  const location = useLocation();
  return (
    <HeaderContainer>
      <Link to='/'>
        <img src={logo} alt="Logo AluraFlix" />
      </Link>
      <ButtonsContainer>
        <Link
          to="/"
          className={`button ${location.pathname === '/' ? 'active' : ''}`}
        >
          HOME
        </Link>
        <Link
          to="/novovideo"
          className={`button ${
            location.pathname === '/novovideo' ? 'active' : ''
          }`}
        >
          NOVO VÍDEO
        </Link>
      </ButtonsContainer>
    </HeaderContainer>
  );
};
