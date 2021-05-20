import React from 'react';

function ShoppingList({ products }) {
  const hasProducts = products.length;
  if (!hasProducts) {
    return null;
  }
  const liElements = products.map((product, index) => <li key={index}>{product.name}</li>)
  return  (
    <ul className="shopping-cart--list">
      {liElements}
    </ul>
  )
}

function ShoppingTotal({ products }) {
  const total = products.reduce((accumulator, product) => accumulator + product.price, 0);
  return <div className="shopping-cart--total">{`Total: ${total}`}</div>
}
function ShoppingCart(props) {
  const { products = [] } = props;
  return (
    <div>
      <ShoppingList products={products} />
      <ShoppingTotal products={products} />
    </div>
  )
}

export default ShoppingCart;