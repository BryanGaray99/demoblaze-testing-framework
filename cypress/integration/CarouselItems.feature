Feature: Test Featured Items Carousel

  Background:
    Given User navigates to Demoblaze Home Page in the first carousel Item

  @smoke
  Scenario: Navigate the featured items carousel using the Previous Button
    When User clicks 3 times the Previous Button in the featured items carousel
    Then the first displayed item can be seen again

  @smoke
  Scenario: Navigate the featured items carousel using the Next Button
    When User clicks 3 times the Next Button in the featured items carousel
    Then the first displayed item can be seen again

  @smoke
  Scenario Outline: Navigate the featured items carousel using the Position Indicator
    When User clicks the indicator <number> in the featured items carousel
    Then the item <number> is displayed

    Examples:
      |  number  |
      |    2     |
      |    3     |
      |    1     |
