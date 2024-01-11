const homePageLocators = {
  // Header and nav bar
  homePageHeader: '.active > .nav-link',
  // Contact
  contactHeader: ':nth-child(2) > .nav-link',
  contactModal: '#exampleModal > .modal-dialog > .modal-content > .modal-header',
  // About Us
  aboutUsHeader: ':nth-child(3) > .nav-link',
  aboutUsModal: '#videoModal > .modal-dialog > .modal-content > .modal-header',
  aboutUsModalVideo: '.vjs-poster',
  // Cart
  cartHeader: '#cartur',
  // Login
  logInHeader: '#login2',
  logInModalLabel: '#logInModalLabel',
  usernameLabelLogIn: '#logInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > .form-control-label',
  passwordLabelLogIn: '#logInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > .form-control-label',
  // SignUp
  signUpHeader: '#signin2',
  signUpModalLabel: '#signInModalLabel',
  usernameLabelSignUp: '#signInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > .form-control-label',
  passwordLabelSignUp: '#signInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > .form-control-label',

  // Carousel
  featuredItemCarousel: '.active > .d-block',
  prevItemCarousel: '.carousel-control-prev-icon',
  nextItemCarousel: '.carousel-control-next-icon',
  indicatorCarousel1: '[data-slide-to="0"]',
  indicatorCarousel2: '[data-slide-to="1"]',
  indicatorCarousel3: '[data-slide-to="2"]',

  // Categories
  categoriesTitle: '#cat',
  phonesCategory: '[onclick="byCat(\'phone\')"]',
  laptopsCategory: '[onclick="byCat(\'notebook\')"]',
  monitorsCategory: '[onclick="byCat(\'monitor\')"]',

  // Products
  phone1: ':nth-child(1) > .card > .card-block > .card-title > .hrefch',
  phone1Image: ':nth-child(1) > .card > :nth-child(1) > .card-img-top',
  phone2: ':nth-child(2) > .card > .card-block > .card-title > .hrefch',

  laptop1: ':nth-child(1) > .card > .card-block > .card-title > .hrefch',
  laptop1Image: ':nth-child(1) > .card > :nth-child(1) > .card-img-top',
  laptop2: ':nth-child(2) > .card > .card-block > .card-title > .hrefch',

  monitor1: ':nth-child(1) > .card > .card-block > .card-title > .hrefch',
  monitor1Image: ':nth-child(1) > .card > :nth-child(1) > .card-img-top',
  monitor2: ':nth-child(2) > .card > .card-block > .card-title > .hrefch'  
}

const urls = {
  firstImageCarousel: 'https://www.demoblaze.com/Samsung1.jpg',
  secondImageCarousel: 'https://www.demoblaze.com/nexus1.jpg',
  thirdImageCarousel: 'https://www.demoblaze.com/iphone1.jpg'
}

class HomePage {
  waitForHomePageSuccessfulResponse () {
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

  // Get About Us
  aboutUsHeader () { return cy.get(homePageLocators.aboutUsHeader) }
  aboutUsModal () { return cy.get(homePageLocators.aboutUsModal) }
  aboutUsModalVideo () { return cy.get(homePageLocators.aboutUsModalVideo) }

  // Get Cart
  cartHeader () { return cy.get(homePageLocators.cartHeader) }

  // Get LogIn 
  logInHeader () { return cy.get(homePageLocators.logInHeader) }
  logInModalLabel () { return cy.get(homePageLocators.logInModalLabel) }
  usernameLabelLogIn () { return cy.get(homePageLocators.usernameLabelLogIn) }
  passwordLabelLogIn () { return cy.get(homePageLocators.passwordLabelLogIn) }
  
  // Get SignUp 
  signUpHeader () { return cy.get(homePageLocators.signUpHeader) }
  signUpModalLabel () { return cy.get(homePageLocators.signUpModalLabel) }
  usernameLabelSignUp () { return cy.get(homePageLocators.usernameLabelSignUp) }
  passwordLabelSignUp () { return cy.get(homePageLocators.passwordLabelSignUp) }

  // Get Carousel
  featuredItemCarousel () { return cy.get(homePageLocators.featuredItemCarousel) }
  prevItemCarousel () { return cy.get(homePageLocators.prevItemCarousel) }
  nextItemCarousel () { return cy.get(homePageLocators.nextItemCarousel) }
  indicatorCarousel1 () { return cy.get(homePageLocators.indicatorCarousel1) }
  indicatorCarousel2 () { return cy.get(homePageLocators.indicatorCarousel2) }
  indicatorCarousel3 () { return cy.get(homePageLocators.indicatorCarousel3) }

  firstImageCarousel () {
    return cy.request({
      url: urls.firstImageCarousel, encoding: 'binary'
    })
  }

  secondImageCarousel () {
    return cy.request({
      url: urls.secondImageCarousel, encoding: 'binary'
    })
  }

  thirdImageCarousel () {
    return cy.request({
      url: urls.thirdImageCarousel, encoding: 'binary'
    })
  }

  // Get Categories
  categoriesTitle () { return cy.get(homePageLocators.categoriesTitle) }
  phonesCategory () { return cy.get(homePageLocators.phonesCategory) }
  laptopsCategory () { return cy.get(homePageLocators.laptopsCategory) }
  monitorsCategory () { return cy.get(homePageLocators.monitorsCategory) }

  // Get Products
  phone1 () { return cy.get(homePageLocators.phone1) }
  phone1Image () { return cy.get(pageLocators.phone1Image) }
  phone2 () { return cy.get(homePageLocators.phone2) }

  laptop1 () { return cy.get(homePageLocators.laptop1) }
  laptop2 () { return cy.get(homePageLocators.laptop2) }
  laptop1Image () { return cy.get(homePageLocators.laptop1Image) }

  monitor1 () { return cy.get(homePageLocators.monitor1) }
  monitor1Image () { return cy.get(homePageLocators.monitor1Image) }

  // Header Actions
  clickHomeHeader () { return this.homeHeader().click() }
  visibleCategoriesTitle () { return this.categoriesTitle().should('be.visible') }

  // Contact Actions
  clickContactHeader () { return this.contactHeader().click() }
  visibleContactModal () { return this.contactModal().should('be.visible') }

  // About Us Actions
  clickAboutUsHeader () { return this.aboutUsHeader().click() }
  visibilityAboutUsModal () { return this.aboutUsModal().should('be.visible') }
  visibilityAboutUsModalvideo () { return this.aboutUsModalVideo().should('be.visible') }

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

  // SignUp Actions
  clickSignUpHeader () { return this.signUpHeader().click() }
  visibilitySignInModalLabel () { return this.signUpModalLabel().should('be.visible') }
  textSignInModalLabel () { return this.signUpModalLabel().should('have.text', 'Sign up') }
  visibilityUsernameTitleSignUp () { return this.usernameLabelSignUp().should('be.visible') }
  textUsernameTitleSignUp () { return this.usernameLabelSignUp().should('have.text', 'Username:') }
  visibilityPasswordTitleSignUp () { return this.passwordLabelSignUp().should('be.visible') }
  textPasswordTitleSignUp () { return this.passwordLabelSignUp().should('have.text', 'Password:') }

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

  // Categories Actions
  clickPhonesCategory () { return this.phonesCategory().click() }
  clickLaptopsCategory () { return this.laptopsCategory().click() }
  clickMonitorsCategory () { return this.monitorsCategory().click() }


  // Products Actions
  visibilityPhone1 () { return this.phone1().should('be.visible') }
  textPhone1 () { return this.phone1().should('have.text', 'Samsung galaxy s6') }
  visibilityPhone2 () { return this.phone2().should('be.visible') }
  textPhone2 () { return this.phone2().should('have.text', 'Nokia lumia 1520') }

  visibilityLaptop1 () { return this.laptop1().should('be.visible') }
  textLaptop1 () { return this.laptop1().should('have.text', 'Sony vaio i5') }
  visibilityLaptop2 () { return this.laptop2().should('be.visible') }
  textLaptop2 () { return this.laptop2().should('have.text', 'Sony vaio i7\n') }

  visibilityMonitor1 () { return this.monitor1().should('be.visible') }
  textMonitorMonitor1 () { return this.monitor1().should('have.text', 'Apple monitor 24') }

  clickPhone1Image () { return this.phone1Image().click() }
  clickLaptop1Image () { return this.laptop1Image().click() }
  clickMonitor1Image () { return this.monitor1Image().click() }
}

const homePage = new HomePage();
export default homePage;
