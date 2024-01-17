const homePageLocators = {
  // Header and nav bar
  homePageHeader: '.active > .nav-link',
  // Contact
  contactHeader: ':nth-child(2) > .nav-link',
  contactModal: '#exampleModal > .modal-dialog > .modal-content > .modal-header',
  contactModalEmailLabel: '#exampleModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > .form-control-label',
  contactModalNameLabel: '#exampleModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > .form-control-label',
  contactModalMessageLabel: '#exampleModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(3) > .form-control-label',
  contactModalCancelBtn: '#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary',
  contactModalSendMessageBtn: '#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary',
  // About Us
  aboutUsHeader: ':nth-child(3) > .nav-link',
  aboutUsModal: '#videoModal > .modal-dialog > .modal-content > .modal-header',
  aboutUsModalVideo: '.vjs-poster',
  aboutUsModalCancelBtn: '#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary',
  // Cart
  cartHeader: '#cartur',
  // Login
  logInHeader: '#login2',
  logInModalLabel: '#logInModalLabel',
  usernameLabelLogIn: '#logInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > .form-control-label',
  passwordLabelLogIn: '#logInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > .form-control-label',
  logInCloseBtn: '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary',
  logInBtn: '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary',
  // SignUp
  signUpHeader: '#signin2',
  signUpModalLabel: '#signInModalLabel',
  usernameLabelSignUp: '#signInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > .form-control-label',
  passwordLabelSignUp: '#signInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > .form-control-label',
  signUpCloseBtn: '#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary',
  signUpBtn: '#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary',
  // Carousel 
  featuredItemCarousel: '.active > .d-block',
  prevItemCarousel: '.carousel-control-prev-icon',
  nextItemCarousel: '.carousel-control-next-icon',
  indicatorCarousel1: '[data-slide-to="0"]',
  indicatorCarousel2: '[data-slide-to="1"]',
  indicatorCarousel3: '[data-slide-to="2"]',
  carouselItem: '.carousel-inner .carousel-item',

  // Categories
  categoriesTitle: '#cat',
  phonesCategory: '[onclick="byCat(\'phone\')"]',
  laptopsCategory: '[onclick="byCat(\'notebook\')"]',
  monitorsCategory: '[onclick="byCat(\'monitor\')"]',

  // Products
  phone1: ':nth-child(1) > .card > .card-block > .card-title > .hrefch',
  phone2: ':nth-child(2) > .card > .card-block > .card-title > .hrefch',

  laptop1: ':nth-child(1) > .card > .card-block > .card-title > .hrefch',
  laptop2: ':nth-child(2) > .card > .card-block > .card-title > .hrefch',

  monitor1: ':nth-child(1) > .card > .card-block > .card-title > .hrefch',
  monitor2: ':nth-child(2) > .card > .card-block > .card-title > .hrefch'  
}

class HomePage {
  waitForHomePage () {
    cy.intercept('/')
      .as('getHomeResponse')
    cy.visit('/')
    cy.wait('@getHomeResponse', { timeout: 10000 })
      .its('response.statusCode')
      .should('eq', 200)
  }
  
  // Home Header
  homeHeader () { return cy.get(homePageLocators.homePageHeader) }
  
  // Get Contact 
  contactHeader () { return cy.get(homePageLocators.contactHeader) }
  contactModal () { return cy.get(homePageLocators.contactModal) }
  contactModalEmailLabel () { return cy.get(homePageLocators.contactModalEmailLabel) }
  contactModalNameLabel () { return cy.get(homePageLocators.contactModalNameLabel) }
  contactModalMessageLabel () { return cy.get(homePageLocators.contactModalMessageLabel) }
  contactModalCancelBtn () { return cy.get(homePageLocators.contactModalCancelBtn) }
  contactModalSendMessageBtn () { return cy.get(homePageLocators.contactModalSendMessageBtn) }

  // Get About Us
  aboutUsHeader () { return cy.get(homePageLocators.aboutUsHeader) }
  aboutUsModal () { return cy.get(homePageLocators.aboutUsModal) }
  aboutUsModalVideo () { return cy.get(homePageLocators.aboutUsModalVideo) }
  aboutUsModalCancelBtn () { return cy.get(homePageLocators.aboutUsModalCancelBtn) }

  // Get Cart
  cartHeader () { return cy.get(homePageLocators.cartHeader) }

  // Get LogIn 
  logInHeader () { return cy.get(homePageLocators.logInHeader) }
  logInModalLabel () { return cy.get(homePageLocators.logInModalLabel) }
  usernameLabelLogIn () { return cy.get(homePageLocators.usernameLabelLogIn) }
  passwordLabelLogIn () { return cy.get(homePageLocators.passwordLabelLogIn) }
  logInCloseBtn () { return cy.get(homePageLocators.logInCloseBtn) }
  logInBtn () { return cy.get(homePageLocators.logInBtn) }
  
  // Get SignUp 
  signUpHeader () { return cy.get(homePageLocators.signUpHeader) }
  signUpModalLabel () { return cy.get(homePageLocators.signUpModalLabel) }
  usernameLabelSignUp () { return cy.get(homePageLocators.usernameLabelSignUp) }
  passwordLabelSignUp () { return cy.get(homePageLocators.passwordLabelSignUp) }
  signUpCloseBtn () { return cy.get(homePageLocators.signUpCloseBtn) }
  signUpBtn () { return cy.get(homePageLocators.signUpBtn) }

  // Get Carousel
  featuredItemCarousel () { return cy.get(homePageLocators.featuredItemCarousel) }
  prevItemCarousel () { return cy.get(homePageLocators.prevItemCarousel) }
  nextItemCarousel () { return cy.get(homePageLocators.nextItemCarousel) }
  indicatorCarousel1 () { return cy.get(homePageLocators.indicatorCarousel1) }
  indicatorCarousel2 () { return cy.get(homePageLocators.indicatorCarousel2) }
  indicatorCarousel3 () { return cy.get(homePageLocators.indicatorCarousel3) }

  // Get Categories
  categoriesTitle () { return cy.get(homePageLocators.categoriesTitle) }
  phonesCategory () { return cy.get(homePageLocators.phonesCategory) }
  laptopsCategory () { return cy.get(homePageLocators.laptopsCategory) }
  monitorsCategory () { return cy.get(homePageLocators.monitorsCategory) }

  // Get Products
  phone1 () { return cy.get(homePageLocators.phone1) }
  phone2 () { return cy.get(homePageLocators.phone2) }

  laptop1 () { return cy.get(homePageLocators.laptop1) }
  laptop2 () { return cy.get(homePageLocators.laptop2) }

  monitor1 () { return cy.get(homePageLocators.monitor1) }
  monitor2 () { return cy.get(homePageLocators.monitor2) }

  // Header Actions
  clickHomeHeader () { return this.homeHeader().click() }

  // Contact Actions
  clickContactHeader () { return this.contactHeader().click() }
  visibilityContactModal () { return this.contactModal().should('be.visible') }
  visibilityContactModalEmailLabel () { return this.contactModalEmailLabel().should('be.visible') }
  textContactModalEmailLabel () { return this.contactModalEmailLabel().should('have.text', 'Contact Email:') }
  visibilityContactModalNameLabel () { return this.contactModalNameLabel().should('be.visible') }
  textContactModalNameLabel () { return this.contactModalNameLabel().should('have.text', 'Contact Name:') }
  visibilityContactModalMessageLabel () { return this.contactModalMessageLabel().should('be.visible') }
  textContactModalMessageLabel () { return this.contactModalMessageLabel().should('have.text', 'Message:') }
  visibilityContactModalCancelBtn () { return this.contactModalCancelBtn().should('be.visible') }
  visibilityContactModalSendMessageBtn () { return this.contactModalSendMessageBtn().should('be.visible') }

  // About Us Actions
  clickAboutUsHeader () { return this.aboutUsHeader().click() }
  visibilityAboutUsModal () { return this.aboutUsModal().should('be.visible') }
  visibilityAboutUsModalvideo () { return this.aboutUsModalVideo().should('be.visible') }
  visibilityAboutUsModalCancelBtn () { return this.aboutUsModalCancelBtn().should('be.visible') }
  
  // Cart Actions
  clickCartHeader () { return this.cartHeader().click() }

  // LogIn Actions
  clickLogInHeader () { return this.logInHeader().click() }
  visibilityLogInModalLabel () { return this.logInModalLabel().should('be.visible') }
  textLogInModalLabel () { return this.logInModalLabel().should('have.text', 'Log in') }
  visibilityUsernameTitleLogIn () { return this.usernameLabelLogIn().should('be.visible') }
  textUsernameTitleLogIn () { return this.usernameLabelLogIn().should('have.text', 'Username:') }
  visibilityPasswordTitleLogIn () { return this.passwordLabelLogIn().should('be.visible') }
  textPasswordTitleLogIn () { return this.passwordLabelLogIn().should('have.text', 'Password:') }
  visibilityLogInCloseBtn () { return this.logInCloseBtn().should('be.visible') }
  visibilityLogInBtn () { return this.logInBtn().should('be.visible') }

  // SignUp Actions
  clickSignUpHeader () { return this.signUpHeader().click() }
  visibilitySignInModalLabel () { return this.signUpModalLabel().should('be.visible') }
  textSignInModalLabel () { return this.signUpModalLabel().should('have.text', 'Sign up') }
  visibilityUsernameTitleSignUp () { return this.usernameLabelSignUp().should('be.visible') }
  textUsernameTitleSignUp () { return this.usernameLabelSignUp().should('have.text', 'Username:') }
  visibilityPasswordTitleSignUp () { return this.passwordLabelSignUp().should('be.visible') }
  textPasswordTitleSignUp () { return this.passwordLabelSignUp().should('have.text', 'Password:') }
  visibilitySignUpCloseBtn () { return this.signUpCloseBtn().should('be.visible') }
  visibilitySignUpBtn () { return this.signUpBtn().should('be.visible') }

  // Carousel Actions
  visibilityFeaturedItemCarousel () { return this.featuredItemCarousel().should('be.visible') }
  clickPrevItemCarousel () { return this.prevItemCarousel().click() }
  clickNextItemCarousel () { return this.nextItemCarousel().click() }
  clickIndicatorCarousel1 () { return this.indicatorCarousel1().click() }
  visibilityIndicatorCarousel1 () { return this.indicatorCarousel1().should('be.visible') }
  clickIndicatorCarousel2 () { return this.indicatorCarousel2().click() }
  visibilityIndicatorCarousel2 () { return this.indicatorCarousel2().should('be.visible') }
  clickIndicatorCarousel3 () { return this.indicatorCarousel3().click() }
  visibilityIndicatorCarousel3 () { return this.indicatorCarousel3().should('be.visible') }
  isCarouselItemActive(index) {
    return cy.get(homePageLocators.carouselItem)
      .eq(index)
      .should('have.class', 'active');
  }

  // Categories Actions
  visibilityCategoriesTitle () { return this.categoriesTitle().should('be.visible') }
  clickPhonesCategory () { return this.phonesCategory().click() }
  visibilityPhonesCategory () { return this.phonesCategory().should('be.visible') }
  clickLaptopsCategory () { return this.laptopsCategory().click() }
  visibilityLaptopsCategory () { return this.laptopsCategory().should('be.visible') }
  clickMonitorsCategory () { return this.monitorsCategory().click() }
  visibilityMonitorsCategory () { return this.monitorsCategory().should('be.visible') }

  // Products Actions
  visibilityPhone1 () { return this.phone1().should('be.visible') }
  textPhone1 () { return this.phone1().should('have.text', 'Samsung galaxy s6') }
  clickPhone1 () { return this.phone1().click() }
  visibilityPhone2 () { return this.phone2().should('be.visible') }
  textPhone2 () { return this.phone2().should('have.text', 'Nokia lumia 1520') }

  visibilityLaptop1 () { return this.laptop1().should('be.visible') }
  textLaptop1 () { return this.laptop1().should('have.text', 'Sony vaio i5') }
  clickLaptop1 () { return this.laptop1().click() }
  visibilityLaptop2 () { return this.laptop2().should('be.visible') }
  textLaptop2 () { return this.laptop2().should('have.text', 'Sony vaio i7\n') }

  visibilityMonitor1 () { return this.monitor1().should('be.visible') }
  textMonitor1 () { return this.monitor1().should('have.text', 'Apple monitor 24') }
  clickMonitor1 () { return this.monitor1().click() }
  visibilityMonitor2 () { return this.monitor2().should('be.visible') }
  textMonitor2 () { return this.monitor2().should('have.text', 'ASUS Full HD') }
}

const homePage = new HomePage();
export default homePage;
