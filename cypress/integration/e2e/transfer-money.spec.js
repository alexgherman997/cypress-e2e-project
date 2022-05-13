describe('Check transfer money', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/login.html');
    cy.fixture('user-data.json').then(userInfo => {
      cy.login(userInfo.username, userInfo.password);
    });
  });

  it('fill form transfer money', () => {
    cy.get('#transfer_funds_tab').click();
    cy.get('#tf_fromAccountId').select('2');
    cy.get('#tf_toAccountId').select('4');
    cy.get('#tf_amount').type('100');
    cy.get('#btn_submit').click();
  });

  it('checked form complete correct', () => {
    cy.get('#tf_fromAccountId').should('have.value', 'Checking');
    cy.get('#tf_toAccountId').should('have.value', 'Loan');
    cy.get('#tf_amount').should('have.value', '100');
  });
});
