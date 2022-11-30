import './app.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/home/Home';
import Product from './Pages/product/Product';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productName" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
