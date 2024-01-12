Feature: Test Shopping Cart Functionality

  As a user of the e-commerce I should be able to explore all the categories
  of products and perform a successful purchase workflow.

  Background:
    Given User navigates to Demoblaze Home Page

  @sanity
  Scenario Outline: User can select a category and verify product presence
    When User selects a category <category>
    Then the products of the category are displayed

    Examples:
      | category  |
      | Phones    |
      | Laptops   |
      | Monitors  |

  @regression
  Scenario: User can add, delete and buy products from the cart
    When the user add multiple products to the cart
    And click on the Cart Page
    And removes a product from the cart
    And completes the purchase
    Then the purchase is successful and the user returns to the Home Page
