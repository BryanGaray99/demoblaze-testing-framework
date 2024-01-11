const monitor1PageLocators = {
  homeHeader: '.active > .nav-link',
  cartHeader: '#cartur',
  productName: '.name',
  addToCartButton: '.col-sm-12 > .btn'
}

class Monitor1Page {
  homeHeader () { return cy.get(monitor1PageLocators.homeHeader) }
  cartHeader () { return cy.get(monitor1PageLocators.cartHeader) }
  productName () { return cy.get(monitor1PageLocators.productName) }
  addToCartButton () { return cy.get(monitor1PageLocators.addToCartButton) }

  visibilityProductName () { return this.productName().should('be.visible') }
  textProductName () { return this.productName().should('have.text', 'Apple monitor 24') }
  visibilityAddToCartButton () { return this.addToCartButton().should('be.visible') }
  clickAddToCartButton () { return this.addToCartButton().click() }
  clickHomeHeader () { return this.homeHeader().click() }
}

const monitor1Page = new Monitor1Page();
export default monitor1Page;
