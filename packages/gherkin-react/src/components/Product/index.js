import React from 'react';

function Product({ product, buyHandler }) {
  const onClick= (event) => {
    event.preventDefault();
    event.stopPropagation();
    buyHandler(product);
  };
  return (
    <article className="product">
      <p className="product--name">{product.name}</p>
      <p className="product--price">{product.price}</p>
      <button className="product--buy-button" onClick={onClick}>Buy</button>
    </article>
  )
}

export default Product;