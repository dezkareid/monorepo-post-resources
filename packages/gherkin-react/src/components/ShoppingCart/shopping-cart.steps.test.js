import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render } from '@testing-library/react';
import ShoppingCart from '.';

const feature = loadFeature(
  '../../../features/shopping-cart.feature',
  { loadRelativePath: true, errors: true }
);

defineFeature(feature, test => {
  test('Add product to shopping cart', ({ given, when, then, and }) => {
    let testUtilities;
    const products = [];
    const newProduct = { name: 'God Of War', price: 10 };
    given('The user has empty shopping cart', () => {
      testUtilities = render(<ShoppingCart products={products} />);
      const { getByText } = testUtilities;
      expect(getByText('Total: 0')).toBeInTheDocument();
    });

    when('Selects a product to add it to shopping cart', () => {
      const { rerender } = testUtilities;
      rerender(<ShoppingCart products={[...products, newProduct]} />);
    });

    then('The product is displayed in shopping cart', () => {
      const { getByText } = testUtilities;
      const element = getByText(newProduct.name);
      expect(element).toBeInTheDocument();
    });

    and('Product price is added to total', () => {
      const { getByText } = testUtilities;
      const element = getByText(`Total: ${newProduct.price}`);
      expect(element).toBeInTheDocument();
    });
  });
});
