const phone1PageLocators = {
  homeHeader: '.active > .nav-link',
  cartHeader: '#cartur',
  productName: '.name',
  addToCartButton: '.col-sm-12 > .btn'
}

class Phone1Page {
  homeHeader () { return cy.get(phone1PageLocators.homeHeader) }
  cartHeader () { return cy.get(phone1PageLocators.cartHeader) }
  productName () { return cy.get(phone1PageLocators.productName) }
  addToCartButton () { return cy.get(phone1PageLocators.addToCartButton) }

  visibilityProductName () { return this.productName().should('be.visible') }
  textProductName () { return this.productName().should('have.text', 'Samsung galaxy s6') }
  visibilityAddToCartButton () { return this.addToCartButton().should('be.visible') }
  clickAddToCartButton () { return this.addToCartButton().click() }
  clickHomeHeader () { return this.homeHeader().click() }
}

const phone1Page = new Phone1Page()
export default phone1Page
