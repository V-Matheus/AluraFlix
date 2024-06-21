import { useEffect, useState } from 'react';
import { BannerMain } from '../../components/BannerMain';
import { Cards } from '../../components/Cards';

export const Home = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('http://localhost:3000/videos');
      const videos = await response.json();

      const categoriasSet = new Set();

      videos.forEach((video) => {
        categoriasSet.add(video.categoria);
      });

      setCategorias([...categoriasSet]);
    };

    fetchApi();
  }, []);

  return (
    <>
      <BannerMain />
      {categorias.map((categoria) => {
        return <Cards key={categoria} categoriaName={categoria} />;
      })}
    </>
  );
};
