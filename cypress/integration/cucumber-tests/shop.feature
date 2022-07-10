Feature: Shop Page
As a valid user

Scenario: Valid add to cart 
  Given I open shop home page
  When I click on category 'T-shirts'
  Then Title with category 'T-shirts' should be displayed