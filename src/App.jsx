// import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Header } from "./components/Header";
import { BannerMain } from "./components/BannerMain";

export function AppRouter() {

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <App />,
  //   },
  // ]);
 
  return (
    <>
     <Header />
     <BannerMain />
    </>
  );
}
