import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../support/pages/HomePage";
import cartPage from "../../support/pages/CartPage";

Given('User navigates to Demoblaze Home Page', () => {
    homePage.waitForHomePage();
});

// Scenario Outline: Verify header links with modals
When('User clicks on the header link {string}', (linkName) => {
    switch (linkName) {
        case 'Home':
            homePage.clickHomeHeader();
            break;
        case 'Contact':
            homePage.clickContactHeader();
            break;
        case 'About Us':
            homePage.clickAboutUsHeader();
            break;
        case 'Log In':
            homePage.clickLogInHeader();
            break;
        case 'Sign Up':
            homePage.clickSignUpHeader();
            break;
        default:
            break;
    }
});

Then('the correct modal for {string} and its elements should be displayed', (linkName) => {
    switch (linkName) {
        // Verify with some assertions
        case 'Home':
            homePage.visibilityFeaturedItemCarousel();
            homePage.visibilityCategoriesTitle();
            homePage.visibilityPhonesCategory();
            homePage.visibilityLaptopsCategory();
            homePage.visibilityMonitorsCategory();
            break;
        case 'Contact':
            homePage.visibilityContactModal();
            homePage.visibilityContactModalEmailLabel();
            homePage.textContactModalEmailLabel();
            homePage.visibilityContactModalNameLabel();
            homePage.textContactModalNameLabel();
            homePage.visibilityContactModalMessageLabel();
            homePage.textContactModalMessageLabel();
            homePage.visibilityContactModalCancelBtn();
            homePage.visibilityContactModalSendMessageBtn();
            break;
        case 'About Us':
            homePage.visibilityAboutUsModal();
            homePage.visibilityAboutUsModalvideo();
            homePage.visibilityAboutUsModalCancelBtn();
            break;
        case 'Log In':
            homePage.visibilityLogInModalLabel();
            homePage.textLogInModalLabel();
            homePage.visibilityUsernameTitleLogIn();
            homePage.textUsernameTitleLogIn();
            homePage.visibilityPasswordTitleLogIn();
            homePage.textPasswordTitleLogIn();
            homePage.visibilityLogInCloseBtn();
            homePage.visibilityLogInBtn();
            break;
        case 'Sign Up':
            homePage.visibilitySignInModalLabel();
            homePage.textSignInModalLabel();
            homePage.visibilityUsernameTitleSignUp();
            homePage.textUsernameTitleSignUp();
            homePage.visibilityPasswordTitleSignUp();
            homePage.textPasswordTitleSignUp();
            homePage.visibilitySignUpCloseBtn();
            homePage.visibilitySignUpBtn();
            break;
        default:
            break;
    }
});

// Scenario: Verify header link of cart page
When('User clicks on the Cart page link', () => {
    homePage.clickCartHeader();
});

Then('the cart page is opened and its elements displayed', () => {
    cartPage.visbilityProductsTitle();
    cartPage.textProductsTitle();
    cartPage.visbilityPlaceOrderButton();
});
