describe('Payment test', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html');
    cy.get('#signin_button').click();
    cy.fixture('user-data').then(userInfo => {
      cy.login(userInfo.username, userInfo.password);
    });
  });

  it('complete payment', () => {
    cy.get('#pay_bills_tab').click();
    cy.contains('Pay Saved Payee').click();
    cy.get('#sp_payee').select('Bank of America');
    cy.get('#sp_account').select('Loan');
    cy.get('#sp_amount').type('10');
    cy.get('#sp_date').click();
    cy.get('[data-handler="selectDay"]').contains('10').click();
    cy.get('#sp_description').type('description');
    cy.get('#pay_saved_payees').click();
  });

  it('check message payment complete', () => {
    cy.get('#alert_content').should(
      'contain',
      'The payment was successfully submitted.'
    );
  });
});
