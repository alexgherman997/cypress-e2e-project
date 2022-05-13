describe('Login valid/invalid & logout flow', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html');
    cy.get('#signin_button').click();
  });

  it('Invalid login', () => {
    cy.login('invalid username', 'invalid password');
    cy.get('.alert-error').should(
      'contain.text',
      'Login and/or password are wrong.'
    );
  });

  it('Valid login', () => {
    cy.fixture('user-data').then(userInfo => {
      cy.login(userInfo.username, userInfo.password);
      cy.contains('username').click();
    });
  });

  it('Logout', () => {
    cy.get('#logout_link').click();
    cy.contains('username').should('not.exist');
  });
});
