describe('Currency excahnge test', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/login.html');
    cy.fixture('user-data').then(userInfo => {
      cy.login(userInfo.username, userInfo.password);
    });
  });

  it('calculate cost foreign currency', () => {
    cy.get('#pay_bills_tab').click();
    cy.contains('Purchase Foreign Currency').click();
    cy.get('#pc_currency').select('Japan (yen)');
    cy.wait(1000);
    const amountUSD = 50;
    cy.get('#pc_amount').type(amountUSD);
    cy.get('#pc_inDollars_true').click();
    cy.get('#pc_calculate_costs').click();
    cy.get('#sp_sell_rate').then($elem => {
      let ratiCurrencyToUSD = Number($elem.text().split(' ')[4]);
      let totalAmountCurrency = (amountUSD / ratiCurrencyToUSD).toFixed(2);
      cy.get('#pc_conversion_amount').should('contain', totalAmountCurrency);
    });
    cy.get('#purchase_cash').click();
  });

  it('check message foreign currency purchased', () => {
    cy.get('#alert_content').should(
      'have.text',
      'Foreign currency cash was successfully purchased.'
    );
  });
});
