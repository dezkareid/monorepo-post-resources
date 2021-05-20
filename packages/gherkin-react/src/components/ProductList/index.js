import React from 'react';
import Product from '../Product';

function ProductList({ products, buyHandler }) {
  const liElements = products.map((product, index) => <li key={index}>
    <Product product={product} buyHandler={buyHandler}/>
  </li>);
  return  (
    <ul>
      {liElements}
    </ul>
  )
}

export default ProductList;