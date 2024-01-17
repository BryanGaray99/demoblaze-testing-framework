Feature: Test Navigation Header

  As a user I should be able to navigate to each section of the Navigation 
  Header.

  Background:
    Given User navigates to Demoblaze Home Page

  @regression
  Scenario Outline: Verify header links with modals
    When User clicks on the header link <link_name>
    Then the correct modal for <link_name> and its elements should be displayed 

    Examples:
      | link_name    |
      | 'Home'       |
      | 'Contact'    |
      | 'About Us'   |
      | 'Log In'     |
      | 'Sign Up'    |

  @regression
  Scenario: Verify header link of cart page
    When User clicks on the Cart page link
    Then the cart page is opened and its elements displayed
    