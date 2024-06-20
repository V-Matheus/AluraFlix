import styled from 'styled-components';
import { ButtonsContainer } from '../../components/Header';

const NovoVideoContainer = styled.main`
  background-color: #191919;
`;

export const NovoVideo = () => {
  return (
    <NovoVideoContainer>
      <div>
        <h1>novo vídeo</h1>
        <p>Complete o formulário para criar um novo card de vídeo.</p>
      </div>
      <form>
        <h3>Criar Card</h3>

        <label htmlFor="titulo">Titulo</label>
        <input
          type="text"
          name="titulo"
          id="titulo"
          placeholder="ingrese el título"
          required
        />

        <label htmlFor="categoria">Categoria</label>
        <select name="categoria" id="categoria" required>
          <option value="">selecione uma categoría</option>
        </select>

        <label htmlFor="imagem">Imagem</label>
        <input
          type="text"
          name="imagem"
          id="imagem"
          placeholder="digite o link da imagem"
          required
        />

        <label htmlFor="video">Vídeo</label>
        <input
          type="text"
          name="video"
          id="video"
          placeholder="digite o link da video"
          required
        />

        <label htmlFor="descricao">Descrição</label>
        <textarea name="descricao" id="descricao"></textarea>

        <ButtonsContainer>
          <button>Guardar</button>
          <button>Limpar</button>
        </ButtonsContainer>
      </form>
    </NovoVideoContainer>
  );
};
