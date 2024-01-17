import { Given, When, Then, After} from "cypress-cucumber-preprocessor/steps";
import homePage from "../../support/pages/HomePage";
import laptop1Page from "../../support/pages/Laptop1Page";
import phone1Page from "../../support/pages/Phone1Page";
import monitor1Page from "../../support/pages/Monitor1Page";
import cartPage from "../../support/pages/CartPage";

let purchaseData = ''

Given('User navigates to Demoblaze Home Page', () => {
    homePage.waitForHomePage();
    cy.fixture('purchaseData.json').then((data) => {
        purchaseData = data;
    });
});

When('User selects a category {string}', (category) => {
    switch (category) {
        case 'Phones':
            homePage.clickPhonesCategory();
            break;
        case 'Laptops':
            homePage.clickLaptopsCategory();
            break;
        case 'Monitors':
            homePage.clickMonitorsCategory();
            break;
        default:
            break;
    }
});

Then('the products of the category {string} are displayed', (category) => {
    switch (category) {
        case 'Phones':
            homePage.visibilityPhone1();
            homePage.textPhone1();
            homePage.visibilityPhone2();
            homePage.textPhone2();
            break;
        case 'Laptops':
            homePage.visibilityLaptop1();
            homePage.textLaptop1();
            homePage.visibilityLaptop2();
            homePage.textLaptop2();
            break;
        case 'Monitors':
            homePage.visibilityMonitor1();
            homePage.textMonitor1();
            homePage.visibilityMonitor2();
            homePage.textMonitor2();
            break;
        default:
            break;
    }
});

When('the user add multiple products to the cart', () => {
    homePage.clickPhonesCategory();
    homePage.clickPhone1();
    phone1Page.clickAddToCartButton();
    phone1Page.clickHomeHeader();
    
    homePage.clickLaptopsCategory();
    homePage.clickLaptop1();
    laptop1Page.clickAddToCartButton();
    laptop1Page.clickHomeHeader();

    homePage.clickMonitorsCategory();
    homePage.clickMonitor1();
    monitor1Page.clickAddToCartButton();
    monitor1Page.clickHomeHeader();
});

And('removes a product from the cart', () => {
    homePage.clickCartHeader();
    cartPage.visbilityCartItem1();
    cartPage.visbilityCartItem2();
    cartPage.visbilityCartItem3();
    cartPage.compareItemCount(3);
    cartPage.clickCartItem3DeleteBtn();
    cy.reload();
    cartPage.visbilityCartItem1();
    cartPage.visbilityCartItem2();
    cartPage.compareItemCount(2);
});

And('completes the purchase', () => {
    cartPage.visbilityPlaceOrderButton();
    cartPage.clickPlaceOrderButton();
    cartPage.writeInputName(purchaseData.name);
    cartPage.writeInputCountry(purchaseData.country);
    cartPage.writeInputCity(purchaseData.city);
    cartPage.writeInputCard(purchaseData.card);
    cartPage.writeInputMonth(purchaseData.month);
    cartPage.writeInputYear(purchaseData.year);
    cartPage.clickPurchaseButton();

});

Then('the successful purchase information is displayed', () => {
    cartPage.visbilityConfirmationMessage();
    cartPage.textConfirmationMessage();
    cartPage.visbilityConfirmationPurchaseInfo();
    cartPage.clickConfirmButton();
    cartPage.clickCloseButton();
});
