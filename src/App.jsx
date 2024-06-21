import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NovoVideo } from './pages/NovoVideo';

export function AppRouter() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novovideo" element={<NovoVideo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
