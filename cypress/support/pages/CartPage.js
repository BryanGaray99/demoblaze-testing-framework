const cartPageLocators = {
  // Cart Products
  productsTitle: '.col-lg-8 > h2',

  // Cart Items
  cartItem1: '#tbodyid > :nth-child(1)',
  cartItem1DeleteBtn: '#tbodyid > :nth-child(1) > :nth-child(4) > a',
  cartItem2: '#tbodyid > :nth-child(2)',
  cartItem2DeleteBtn: '#tbodyid > :nth-child(2) > :nth-child(4) > a',
  cartItem3: '#tbodyid > :nth-child(3)',
  cartItem3DeleteBtn: '#tbodyid > :nth-child(3) > :nth-child(4) > a',
  allCartItems: '#tbodyid > :nth-child(n)',
  allDeleteBtns: '#tbodyid > :nth-child(n) > :nth-child(4) > a',

  // Place Order
  placeOrderButton: '.col-lg-1 > .btn',

  // Order Modal
  orderModalHeader: '#orderModal > .modal-dialog > .modal-content > .modal-header',
  orderModalLabel: '#orderModalLabel',

  // Form
  inputName: '#name',
  inputCountry: '#country',
  inputCity: '#city',
  inputCard: '#card',
  inputMonth: '#month',
  inputYear: '#year',
  closeButton: '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary',
  purchaseButton: '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary',
  
  // Confirm
  confirmButton: '.confirm',
  confirmationMessage: '.sweet-alert > h2',
  confirmationPurchaseInfo: '.lead'
}

class CartPage {
  // Get Cart Product Title
  productsTitle () { return cy.get(cartPageLocators.productsTitle) }

  // Get Cart Items
  cartItem1 () { return cy.get(cartPageLocators.cartItem1) }
  cartItem1DeleteBtn () { return cy.get(cartPageLocators.cartItem1DeleteBtn) }
  cartItem2 () { return cy.get(cartPageLocators.cartItem2) }
  cartItem2DeleteBtn () { return cy.get(cartPageLocators.cartItem2DeleteBtn) }
  cartItem3 () { return cy.get(cartPageLocators.cartItem3) }
  cartItem3DeleteBtn () { return cy.get(cartPageLocators.cartItem3DeleteBtn) }
  allCartItems () { return cy.get(cartPageLocators.allCartItems) }
  allDeleteBtns () { return cy.get(cartPageLocators.allDeleteBtns) }

  // Get Place Order
  placeOrderButton () { return cy.get(cartPageLocators.placeOrderButton) }

  // Get Order Modal
  orderModalHeader () { return cy.get(cartPageLocators.orderModalHeader) }
  orderModalLabel () { return cy.get(cartPageLocators.orderModalLabel) }

  // Get Form
  inputName () { return cy.get(cartPageLocators.inputName) }
  inputCountry () { return cy.get(cartPageLocators.inputCountry) }
  inputCity () { return cy.get(cartPageLocators.inputCity) }
  inputCard () { return cy.get(cartPageLocators.inputCard) }
  inputMonth () { return cy.get(cartPageLocators.inputMonth) }
  inputYear () { return cy.get(cartPageLocators.inputYear) }
  closeButton () { return cy.get(cartPageLocators.closeButton) }
  purchaseButton () { return cy.get(cartPageLocators.purchaseButton) }

  // Get Confirmation
  confirmButton () { return cy.get(cartPageLocators.confirmButton) }
  confirmationMessage () { return cy.get(cartPageLocators.confirmationMessage) }
  confirmationPurchaseInfo () { return cy.get(cartPageLocators.confirmationPurchaseInfo) }

  // Cart Actions
  visbilityProductsTitle() { return this.productsTitle().should('be.visible'); }
  textProductsTitle() { return this.productsTitle().should('have.text', 'Products'); }

  // Cart Items Actions
  visbilityCartItem1 () { return this.cartItem1().should('be.visible') }
  clickCartItem1DeleteBtn () { return this.cartItem1DeleteBtn().click() }

  visbilityCartItem2 () { return this.cartItem2().should('be.visible') }
  clickCartItem2DeleteBtn () { return this.cartItem2DeleteBtn().click() }

  visbilityCartItem3 () { return this.cartItem3().should('be.visible') }
  clickCartItem3DeleteBtn () { return this.cartItem3DeleteBtn().click() }

  // Count elements on the cart
  countItemsInCart() {
    return this.allCartItems().its('length');
  }

  // Compare cart elements quantity
  compareItemCount(expectedCount) {
    this.countItemsInCart().should('eq', expectedCount);
  }
  // Placer Order Actions
  visbilityPlaceOrderButton () { return this.placeOrderButton().should('be.visible') }
  clickPlaceOrderButton () { return this.placeOrderButton().click() }
  
  // Form Actions
  writeInputName (name) { return this.inputName().clear().type(name) }
  writeInputCountry (country) { return this.inputCountry().clear().type(country) }
  writeInputCity (city) { return this.inputCity().clear().type(city) }
  writeInputCard (card) { return this.inputCard().clear().type(card) }
  writeInputMonth (month) { return this.inputMonth().clear().type(month) }
  writeInputYear (year) { return this.inputYear().clear().type(year) }
  clickCloseButton () { return this.closeButton().click() }
  clickPurchaseButton () { return this.purchaseButton().click() }

  // Confirm Actions
  clickConfirmButton () { return this.confirmButton().click() }
  visbilityConfirmationMessage () { return this.confirmationMessage().should('be.visible') }
  textConfirmationMessage () { return this.confirmationMessage().should('have.text', 'Thank you for your purchase!') }
  visbilityConfirmationPurchaseInfo () { return this.confirmationPurchaseInfo().should('be.visible') }
}

const cartPage = new CartPage()
export default cartPage
