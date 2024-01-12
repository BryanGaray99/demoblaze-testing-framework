import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../support/pages/HomePage";

Given('User navigates to Demoblaze Home Page in the first carousel Item', () => {
    homePage.waitForHomePage();
    homePage.clickIndicatorCarousel1();      
});

When('User clicks 3 times the Previous Button in the featured items carousel', () => {
    homePage.clickPrevItemCarousel();
});

When('User clicks 3 times the Next Button in the featured items carousel', () => {
    homePage.clickNextItemCarousel();
    homePage.clickNextItemCarousel();
    homePage.clickNextItemCarousel();
});

Then('the first displayed item can be seen again', () => {
    homePage.visibilityFeaturedItemCarousel();
    homePage.isCarouselItemActive(0);
});

When('User clicks the indicator {int} in the featured items carousel', (position) => {
    switch (position) {
        case 1:
            homePage.clickIndicatorCarousel1();
            break;
        case 2:
            homePage.clickIndicatorCarousel2();
            break;
        case 3:
            homePage.clickIndicatorCarousel3();
            break;

        default:
            break;
    }
});

Then('the item {int} is displayed', (position) => {
    switch (position) {
        case 1:
            homePage.visibilityFeaturedItemCarousel();
            homePage.isCarouselItemActive(position - 1);
            break;
        case 2:
            homePage.visibilityFeaturedItemCarousel();
            homePage.isCarouselItemActive(position - 1);
            break;
        case 3:
            homePage.visibilityFeaturedItemCarousel();
            homePage.isCarouselItemActive(position - 1);
            break;

        default:
            break;
    }
});