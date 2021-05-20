import React, { useState } from 'react';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';
import { Grid, Row, Column } from 'carbon-components-react';
import { Header, HeaderName } from 'carbon-components-react/lib/components/UIShell';
import './App.css';

const defaultProductList = [
  { name: 'God of War', price: 10 }
]
function App() {
  const [products] = useState(defaultProductList);
  const [shoppingProducts, setShoppingProducts] = useState([]);
  const buyHandler = (product) => {
    setShoppingProducts([product, ...shoppingProducts])
  };
  return (
    <div className="App">
      <Header aria-label="Gerkhin">
        <HeaderName href="#" prefix="Gerkhin">
          [Gerkhin]
        </HeaderName>
      </Header>
      <Grid>
        <Row>
          <Column sm={3} md={6} lg={9}>
            <ProductList products={products} buyHandler={buyHandler} />
          </Column>
          <Column sm={1} md={2} lg={3}>
            <ShoppingCart products={shoppingProducts} />
          </Column>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
