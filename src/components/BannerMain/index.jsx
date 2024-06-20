import styled from 'styled-components';
import player from '../../assets/player.png';

const BannerBg = styled.main`
  background: url(${player}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 750px;
  margin-top: -70px;
`;

const BannerMainContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 0 3rem;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 18, 51, 0.7);
  gap: 1.5rem;
  color: #f5f5f5;

  h1 {
    font-family: Roboto;
    font-size: 48px;
    font-weight: 800;
    line-height: 56.25px;
    color: #f5f5f5;
    background-color: #6bd1ff;
    text-align: center;
    border-radius: 15px;

    max-width: 296.82px;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-family: Roboto;
    font-size: 46px;
    font-weight: 400;
    line-height: 53.91px;
    text-align: left;
    margin-bottom: 1rem;
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
`;

export const BannerMain = () => {
  return (
    <BannerBg>
      <BannerMainContainer>
        <div>
          <h1>FRONT END</h1>
          <h2>SEO com React</h2>
          <p>
            Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar
            uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas
            dicas sobre performance e de quebra conhecer uma plataforma
            sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos
            nesse vídeo feito com todo o carinho do mundo construindo uma
            Pokedex!
          </p>
        </div>
        <div>
          <img src={player} alt="" />
        </div>
      </BannerMainContainer>
    </BannerBg>
  );
};
