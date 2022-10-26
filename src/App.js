import { Routes, Route } from 'react-router-dom';

import './App.css';
import MainPage from './pages/MainPage/MainPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
      <Route
        path="/categories/:category/:subcategory"
        element={<CategoryPage />}
      />
      <Route
        path="/products/:category/:subcategory/:title"
        element={<ProductPage />}
      />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default App;
