describe('NavBar test', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html');
  });

  describe('When click on Home button from NavBar we are redirected to the HomePage', () => {
    it('click on Home button from NavBar', () => {
      cy.get('#homeMenu').click();
    });

    it('redirect on the HomePage', () => {
      cy.contains('Welcome to Zero Online Banking');
      cy.url().should('include', 'index.html');
    });
  });

  describe('When click on Online banking button from NavBar redirected Online banking page', () => {
    it('click on Online banking button from Navbar', () => {
      cy.get('#onlineBankingMenu').click();
    });

    it('redirected on Online banking page', () => {
      cy.get('h3').should('contain', 'Our Bank is trusted');
      cy.url().should('include', 'online-banking.html');
    });
  });

  describe('When click on Feedback button from Navbar', () => {
    it('click on Feefback button from Navbar', () => {
      cy.get('#feedback').click();
    });

    it('redirected on Feedback page', () => {
      cy.get('#feedback-title').should('contain', 'Feedback');
      cy.url().should('include', 'feedback.html');
    });
  });
});
