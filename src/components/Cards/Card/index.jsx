import editarIcon from '../../../assets/editarIcon.svg';
import excluirIcon from '../../../assets/excluirIcon.svg';
import styled from 'styled-components';

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  width: 432.24px;
  border: 3px solid #6bd1ff;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;
    padding: 1rem 3.5rem;

    button {
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }
  }
`;

export const Card = ({video}) => {
  return (
    <CardStyled>
      <img src={video.imagem} alt="" />
      <div>
        <button>
          <img src={editarIcon} alt="Editar Icon" />
          DELETAR
        </button>
        <button>
          <img src={excluirIcon} alt="Excluir Icon" />
          EDITAR
        </button>
      </div>
    </CardStyled>
  );
};
