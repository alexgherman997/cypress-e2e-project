import BasePage from '../pages/BasePage';

export default class NavBar {
  static getLogo() {
    cy.get('.brand');
  }

  static clickOnLogo() {
    cy.get('.brand').click();
  }

  static searchTerm(text: string) {
    cy.get('#searchTerm').type(`${text} {enter}`);
  }

  static clickSingIn() {
    cy.get('#signin_button').click();
  }

  static logout() {
    cy.contains('username').click();
    cy.get('#logout_link').click();
  }

  static displaySignInButton() {
    cy.get('#signin_button').should('be.visible');
  }
}
