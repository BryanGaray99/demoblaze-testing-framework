const laptop1PageLocators = {
  homeHeader: '.active > .nav-link',
  cartHeader: '#cartur',
  productName: '.name',
  addToCartButton: '.col-sm-12 > .btn'
}

class Laptop1Page {
  homeHeader () { return cy.get(laptop1PageLocators.homeHeader) }
  cartHeader () { return cy.get(laptop1PageLocators.cartHeader) }
  productName () { return cy.get(laptop1PageLocators.productName) }
  addToCartButton () { return cy.get(laptop1PageLocators.addToCartButton) }

  visibilityProductName () { return this.productName().should('be.visible') }
  textProductName () { return this.productName().should('have.text', 'MacBook air') }
  visibilityAddToCartButton () { return this.addToCartButton().should('be.visible') }
  clickAddToCartButton () { return this.addToCartButton().click() }
  clickHomeHeader () { return this.homeHeader().click() }
}

const laptop1Page = new Laptop1Page();
export default laptop1Page;
