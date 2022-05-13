describe('Add new Payee method', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html');
    cy.get('#signin_button').click();
    cy.fixture('user-data').then(userInfo => {
      cy.login(userInfo.username, userInfo.password);
    });
  });

  it('add new pay bill to the list', () => {
    cy.get('#pay_bills_tab').click();
    cy.contains('Add New Payee').click();
    cy.get('#np_new_payee_name').type('name');
    cy.get('#np_new_payee_address').type('address');
    cy.get('#np_new_payee_account').type('account');
    cy.get('#np_new_payee_details').type('details');
    cy.get('#add_new_payee').click();
  });

  it('checked messaged payee added', () => {
    cy.get('#alert_content')
      .should('be.visible')
      .and('have.text', `The new payee name was successfully created.`);
  });
});
