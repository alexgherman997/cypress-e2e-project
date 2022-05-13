describe('Check transfer money', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/login.html');
    cy.fixture('user-data.json').then(userInfo => {
      cy.login(userInfo.username, userInfo.password);
    });
  });

  it('filter transactions', () => {
    cy.get('#account_activity_tab').click();
    cy.contains('Find Transactions').click();
    cy.get('[name="description"]').type('ONLINE');

    cy.get('[name="fromAmount"]').type(10);
    cy.get('[name="toAmount"]').type(1000);

    cy.get('[name="type"]').select('DEPOSIT');

    cy.get('[type="submit"]').click();
    cy.get('#filtered_transactions_for_account')
      .find('tr')
      .should('contain', 'ONLINE');
  });
});
