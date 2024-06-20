import styled from 'styled-components';
import { Title } from '../Title';
import { Card } from './Card';

const CardsContainer = styled.section`
  padding: 1.5rem 2rem;
  background-color: #191919;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

export const Cards = () => {
  return (
    <CardsContainer>
      <Title color="#6BD1FF">FRONT END</Title>
      <div>
        <Card />
        <Card />
        <Card />
      </div>
    </CardsContainer>
  );
};
