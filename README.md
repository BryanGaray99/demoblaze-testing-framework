# Cypress testing framework with Allure Reports for Demoblaze site

## Overview

This repository contains a Cypress and Cucumber-based framework designed for testing the web page [DemoBlaze](https://www.demoblaze.com/). The framework includes test cases for various functionalities, organized into separate features, adhering to best practices and incorporating essential Cypress and Cucumber elements.

## Framework Structure

### 1. Integrations
   - This folder contains feature files and their respective step definitions.
   - Each feature file corresponds to a specific functionality.

### 2. Fixtures
   - The `purchaseData.json` file is stored here to provide test data for the purchase workflow.

### 3. Support
   - The `pages` folder contains instructions for locating and interacting with page elements.

### 4. cypress.json
   - The configuration file includes the base URL for the test environment.

## Test Features

### Feature: Test Featured Items Carousel

#### Background:
   - Given User navigates to DemoBlaze Home Page in the first carousel Item

#### Scenarios:
   - **@smoke**
     - Navigate the featured items carousel using the Previous Button.
     - Navigate the featured items carousel using the Next Button.
     - Navigate the featured items carousel using the Position Indicator.

### Feature: Test Shopping Cart Functionality

#### Background:
   - Given User navigates to DemoBlaze Home Page

#### Scenarios:
   - **@regression**
     - User can select a category and verify product presence.
   - **@regression**
     - User can add, delete, and buy products from the cart.

### Feature: Test Navigation Header

#### Background:
   - Given User navigates to DemoBlaze Home Page

#### Scenarios:
   - **@regression**
     - Verify header links with modals.
     - Verify header link of the cart page.

## Key Components

- The framework incorporates:
   - `cy.request`, `cy.intercept`: For API requests and intercepting responses.
   - Page Object Model (POM): For organizing and maintaining page elements.
   - Fixtures: Utilizes `purchaseData.json` for test data.

## Test Case Design

- Test cases follow best practices and are organized logically within each feature.
- Cucumber's Scenario Outline is utilized for parameterized testing.

## Instructions for Running Tests

```
1. Clone the repository.
2. Install dependencies `npm install`.
3. Run tests using `npx cypress run` or `npm test`.
```

## Available scripts (npm run)
1. test: "npx cypress run"
2. test-cypress: "npx cypress open"
3. test:smoke: "npx cypress-tags run -e TAGS=\"@smoke\""
4. test:regression: "npx cypress-tags run -e TAGS=\"@regression\""
5. test-cypress-allure: "npx cypress run --env allure=true"
6. allure-server: "npx allure-commandline serve"

Feel free to reach out for any further assistance or feedback related to the framework. Happy testing!

### Author: Bryan Garay
### Contact: bryangarayacademico@gmail.com