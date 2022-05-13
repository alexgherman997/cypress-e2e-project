describe('Press sign in, press forgot password, redirected on the forgotten password page', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html');
  });

  it('press sign in button', () => {
    cy.get('#signin_button').click();
  });

  it('press forgot password button', () => {
    cy.get('[href="/forgot-password.html"]').click();
  });

  it('check redirected on the forgotten password page', () => {
    cy.get('h3').should('contain', 'Forgotten Password');
  });

  it('type keywoard email input', () => {
    cy.get('#user_email');
  });

  it('click on submit button', () => {
    cy.contains('Send Password').click();
  });
});
