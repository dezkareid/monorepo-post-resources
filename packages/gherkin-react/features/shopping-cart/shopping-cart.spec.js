import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Before(() => {
  const url = 'http://localhost:3000'
  cy.visit(url)
});

Given("The user has empty shopping cart", () => {
  cy.get('.shopping-cart--total').should('contain', 'Total: 0')
});

When ("Selects a product to add it to shopping cart", () => {
  cy.get('.product--buy-button').first().click();
});

Then("The product is displayed in shopping cart", () => {
  cy.get('.product--name').then(products => {
    const [firstProduct] = products;
    cy.get('.shopping-cart--list').find('li').should('contain', firstProduct.textContent);
  });
});

And("Product price is added to total", () => {
  cy.get('.product--price').then(products => {
    const [firstProduct] = products;
    cy.get('.shopping-cart--total').should('contain', `Total: ${firstProduct.textContent}`);
  });
});
