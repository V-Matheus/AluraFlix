import styled from 'styled-components';
import { ButtonsContainer } from '../../components/Header';
import { useState } from 'react';

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

function handleForm(e) {
  e.preventDefault();
}

export const NovoVideo = () => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagem, setImagem] = useState('');
  const [video, setVideo] = useState('');
  const [descricao, setDescricao] = useState('');

  console.log({ titulo, categoria, imagem, video, descricao });

  return (
    <NovoVideoContainer>
      <NovoVideoTitle>
        <h1>Novo vídeo</h1>
        <p>Complete o formulário para criar um novo card de vídeo.</p>
      </NovoVideoTitle>
      <NovoVideoForm onSubmit={(event) => handleForm(event)}>
        <h3>Criar Card</h3>

        <NovoVideoLabel>
          <label htmlFor="titulo">Titulo</label>
          <input
            type="text"
            name="titulo"
            id="titulo"
            placeholder="ingrese el título"
            required
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </NovoVideoLabel>

        <NovoVideoLabel>
          <label htmlFor="categoria">Categoria</label>
          <select
            name="categoria"
            id="categoria"
            required
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="" disabled>
              selecione uma categoría
            </option>
            <option value="FRONTEND">FRONTEND</option>
            <option value="BACKEND">BACKEND</option>
            <option value="MOBILE">MOBILE</option>
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
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
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
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
        </NovoVideoLabel>

        <NovoVideoTextArea>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            name="descricao"
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </NovoVideoTextArea>

        <ButtonsContainer>
          <button
            style={{ borderColor: '#2271d1' }}
            className="button"
            type="submit"
          >
            Guardar
          </button>
          <button className="button" type="button" onClick={() => {
            setTitulo('')
            setCategoria('')
            setImagem('')
            setVideo('')
            setDescricao('')
          }}>
            Limpar
          </button>
        </ButtonsContainer>
      </NovoVideoForm>
    </NovoVideoContainer>
  );
};
