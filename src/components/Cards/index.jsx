import styled from 'styled-components';
import { Title } from '../Title';
import { Card } from './Card';
import { useEffect, useState } from 'react';

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

export const Cards = ({ categoriaName, aoVideoSelecionado }) => {
  const [videosPorCategoria, setVideosPorCategoria] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('http://localhost:3000/videos');
      const videos = await response.json();

      const videoFiltrados = videos.filter((video) => {
        return video.categoria === categoriaName;
      });
      setVideosPorCategoria([...videoFiltrados]);
    };
    fetchApi();
  }, [categoriaName, videosPorCategoria]);

  function handleDelete(id) {
    videosPorCategoria.map((video) => {
      if (video.id === id) {
        fetch(`http://localhost:3000/videos/${video.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
    });
  }

  let color = '';

  switch (categoriaName) {
    case 'FRONTEND':
      color = '#6BD1FF';
      break;
    case 'BACKEND':
      color = '#00C86F';

      break;
    case 'MOBILE':
      color = '#FFBA05';
      break;
  }
  return (
    <CardsContainer>
      <Title color={color}>{categoriaName}</Title>
      <div>
        {videosPorCategoria.map((video) => {
          return (
            <Card
              aoVideoSelecionado={aoVideoSelecionado}
              handleDelete={handleDelete}
              key={video.id}
              video={video}
            />
          );
        })}
      </div>
    </CardsContainer>
  );
};
