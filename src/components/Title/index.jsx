import styled from 'styled-components';

const TitleStyled = styled.h1`
  font-family: Roboto;
  font-size: 48px;
  font-weight: 800;
  line-height: 56.25px;
  color: #f5f5f5;
  background-color: ${(props) => props.color};
  text-align: center;
  border-radius: 15px;

  max-width: 296.82px;
  padding: 1rem;
`;

export const Title = ({ color, children }) => {
  return <TitleStyled color={color}>{children}</TitleStyled>;
};
