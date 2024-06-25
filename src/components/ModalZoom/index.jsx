import { styled } from 'styled-components';
import XIcon from '../../assets/XIcon.png';

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
  top: -80px;
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
  position: fixed;
  top: 50%;
  width: 974px;
  padding: 84px;
  border-radius: 15px;
  background-color: #03122f;
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: 'GandhiSansBold';
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

export const ModalZoom = ({ video, aoFechar }) => {
  return (
    <>
      {video && (
        <>
          <Overlay />
          <DialogEstilizado open={!!video} onClose={aoFechar}>
            <ModalForm>
              <h1>Editar card:</h1>

              <FormDiolog method="dialog">
                <BotaoIcone formMethod="dialog">
                  <img src={XIcon} alt="Icone de fechar" />
                </BotaoIcone>
              </FormDiolog>
            </ModalForm>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};
