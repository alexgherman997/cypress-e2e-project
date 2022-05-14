import BasePage from '../pages/BasePage';

export default class AccountLinks extends BasePage {
  static clickAccSummary() {
    cy.get('#account_summary_tab').click();
  }

  static clickAccActivity() {
    cy.get('#account_activity_tab').click();
  }

  static clickTransferFunds() {
    cy.get('#transfer_funds_tab').click();
  }

  static clickPayBills() {
    cy.get('#pay_bills_tab').click();
  }

  static clickMoneyMap() {
    cy.get('#money_map_tab').click();
  }

  static clickOnlineStatement() {
    cy.get('#online_statements_tab').click();
  }
}
