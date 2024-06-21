import styled from 'styled-components';
import { ButtonsContainer } from '../../components/Header';

const NovoVideoContainer = styled.main`
  background-color: #191919;

  h1,
  h3,
  p,
  label {
    color: white;
  }

  input,
  textarea,
  select {
    border-radius: 15px;
    width: 470px;
    height: 62px;
    padding: 10px;
    background-color: #191919;
    border: 3px solid #262626;
    color: #a5a5a5;
  }
`;

const NovoVideoTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  gap: 1rem;

  h1 {
    font-family: Roboto;
    font-size: 60px;
    font-weight: 900;
    line-height: 70.31px;
    text-align: center;
  }

  p {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23.44px;
    text-align: center;
  }
`;

const NovoVideoForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3rem;
  gap: 2rem;

  h3 {
    grid-column: span 2;
    font-family: Source Sans Pro;
    font-size: 36px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
  }
`;

const NovoVideoLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 470px;
  height: 108px;
  gap: 15px;
`;

const NovoVideoTextArea = styled(NovoVideoLabel)`
  grid-column: span 2;
  width: 573px;
  height: 220px;

  textarea {
    width: 573px;
    height: 220px;
    resize: none;
  }
`;

export const NovoVideo = () => {
  return (
    <NovoVideoContainer>
      <NovoVideoTitle>
        <h1>Novo vídeo</h1>
        <p>Complete o formulário para criar um novo card de vídeo.</p>
      </NovoVideoTitle>
      <NovoVideoForm>
        <h3>Criar Card</h3>

        <NovoVideoLabel>
          <label htmlFor="titulo">Titulo</label>
          <input
            type="text"
            name="titulo"
            id="titulo"
            placeholder="ingrese el título"
            required
          />
        </NovoVideoLabel>

        <NovoVideoLabel>
          <label htmlFor="categoria">Categoria</label>
          <select name="categoria" id="categoria" required>
            <option value="">selecione uma categoría</option>
          </select>
        </NovoVideoLabel>

        <NovoVideoLabel>
          <label htmlFor="imagem">Imagem</label>
          <input
            type="text"
            name="imagem"
            id="imagem"
            placeholder="digite o link da imagem"
            required
          />
        </NovoVideoLabel>

        <NovoVideoLabel>
          <label htmlFor="video">Vídeo</label>
          <input
            type="text"
            name="video"
            id="video"
            placeholder="digite o link da video"
            required
          />
        </NovoVideoLabel>

        <NovoVideoTextArea>
          <label htmlFor="descricao">Descrição</label>
          <textarea name="descricao" id="descricao"></textarea>
        </NovoVideoTextArea>

        <ButtonsContainer>
          <button
            style={{ borderColor: '#2271d1' }}
            className="button"
            type="submit"
          >
            Guardar
          </button>
          <button className="button" type="button">
            Limpar
          </button>
        </ButtonsContainer>
      </NovoVideoForm>
    </NovoVideoContainer>
  );
};
