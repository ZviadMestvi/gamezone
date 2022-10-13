import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import ProductPage from './pages/ProductPage/ProductPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/categories" element={<CategoryPage />} />
      <Route path="/game" element={<ProductPage />} />
    </Routes>
  );
};

export default App;
