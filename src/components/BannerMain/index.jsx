import styled from 'styled-components';
import player from '../../assets/player.png';
import { Title } from '../Title';

const BannerBg = styled.main`
  background: url(${player}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 750px;
  margin-top: -70px;
  border-bottom: 5px solid #2271d1
`;

const BannerMainContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 0 3rem;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 18, 51, 0.7);
  gap: 1.5rem;
`;

const BannerInfo = styled.div`
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      font-family: Roboto;
      font-size: 46px;
      font-weight: 400;
      line-height: 53.91px;
      text-align: left;
    }

    p {
      width: 662.84px;
      height: 110px;
      top: 561px;
      left: 43.12px;
      font-family: Roboto;
      font-size: 18px;
      font-weight: 300;
      line-height: 21.09px;
      text-align: left;
    }
  }
`;

export const BannerMain = () => {
  return (
    <BannerBg>
      <BannerMainContainer>
        <BannerInfo>
          <Title color="#6BD1FF">FRONT END</Title>
          <div>
            <h2>SEO com React</h2>
            <p>
              Eu to aqui pra nesse vídeo dizer que a gente vai aprender a
              começar uma app inspirada no desenho Pokémon com Nextjs e React,
              ver algumas dicas sobre performance e de quebra conhecer uma
              plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22
              minutos nesse vídeo feito com todo o carinho do mundo construindo
              uma Pokedex!
            </p>
          </div>
        </BannerInfo>
        <div>
          <img src={player} alt="" />
        </div>
      </BannerMainContainer>
    </BannerBg>
  );
};
