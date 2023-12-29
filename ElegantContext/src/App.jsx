import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx'
import { DUMMY_PRODUCTS } from './dummy-products.js';
import CartContextPovider from './store/shopping-cart-context.jsx';

function App() {

  return (
    <CartContextPovider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextPovider>
  );
}

export default App;
