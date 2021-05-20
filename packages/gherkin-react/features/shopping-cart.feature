Feature: Shopping Cart

  Element to display the list of products the user decides to add it and the total of the purchase

Scenario: Add product to shopping cart
  Given The user has empty shopping cart
  When  Selects a product to add it to shopping cart
  Then The product is displayed in shopping cart
  And Product price is added to total
