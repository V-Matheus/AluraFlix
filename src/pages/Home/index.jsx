import { useEffect, useState } from 'react';
import { BannerMain } from '../../components/BannerMain';
import { Cards } from '../../components/Cards';
import { ModalZoom } from '../../components/ModalZoom';

export const Home = () => {
  const [categorias, setCategorias] = useState([]);
  const [videoSelecionado, setVideoSelecionado] = useState(null)


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
        return <Cards aoVideoSelecionado={(video) => setVideoSelecionado(video)} key={categoria} categoriaName={categoria} />;
      })}
       <ModalZoom
        video={videoSelecionado}
        aoFechar={() => setVideoSelecionado(null)}
      />
    </>
  );
};
