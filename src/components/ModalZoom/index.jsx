import { styled } from 'styled-components';
import XIcon from '../../assets/XIcon.png';
import { useState } from 'react';
import { ButtonsContainer } from '../Header';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
`;

const FormDiolog = styled.form`
  position: relative;
  top: -50px;
  left: 100%;
  width: 30px;
`;

const BotaoIcone = styled.button`
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  top: 0;
`;

const ModalForm = styled.form`
  top: 50px;
  width: 974px;
  padding: 84px;
  border-radius: 15px;
  background-color: #03122f;
  max-width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: Roboto;
    font-size: 60px;
    font-weight: 900;
    line-height: 70.31px;
    text-align: left;
    color: #2271d1;
    padding-bottom: 2.5rem;
  }
`;

const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 470px;
  height: 108px;
  gap: 15px;
  padding-bottom: 1.5rem;

  label {
    font-family: Source Sans Pro;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    color: #ffffff;
  }

  input,
  select,
  textarea {
    width: 573px;
    height: 62px;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: 3px solid #2271d1;
    background-color: transparent;
    color: #a5a5a5;
    resize: none;
  }
`;

export const ModalZoom = ({ video, aoFechar }) => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagem, setImagem] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [descricao, setDescricao] = useState('');

  const novoVideo = {
    titulo,
    categoria,
    imagem,
    videoLink,
    descricao,
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/videos/${video.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoVideo),
    });
  }

  return (
    <>
      {video && (
        <>
          <Overlay />
          <DialogEstilizado open={!!video} onClose={aoFechar}>
            <ModalForm onSubmit={handleSubmit}>
              <FormDiolog method="dialog">
                <BotaoIcone formMethod="dialog">
                  <img src={XIcon} alt="Icone de fechar" />
                </BotaoIcone>
              </FormDiolog>

              <h1>Editar card:</h1>

              <InputLabel>
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
              </InputLabel>

              <InputLabel>
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
              </InputLabel>

              <InputLabel>
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
              </InputLabel>

              <InputLabel>
                <label htmlFor="video">Vídeo</label>
                <input
                  type="text"
                  name="video"
                  id="video"
                  placeholder="digite o link da video"
                  required
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                />
              </InputLabel>

              <InputLabel>
                <label htmlFor="descricao">Descrição</label>
                <textarea
                  name="descricao"
                  id="descricao"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                ></textarea>
              </InputLabel>

              <ButtonsContainer>
                <button className="button active" type="submit">
                  GUARDAR
                </button>
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    setTitulo('');
                    setCategoria('');
                    setImagem('');
                    setVideoLink('');
                    setDescricao('');
                  }}
                >
                  LIMPAR
                </button>
              </ButtonsContainer>
            </ModalForm>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};
