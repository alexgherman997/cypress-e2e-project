import BasePage from './BasePage';

export default class LoginPage extends BasePage {
  static visit() {
    cy.visitLoginPage();
  }

  static login(username: string, password: string) {
    cy.login(username, password);
  }

  static clickForgotPasswordLink() {
    cy.contains('Forgot your password').click();
  }

  static displayErrorMessage() {
    cy.get('.alert-error').should('be.visible');
  }

  static typeUsernameInput(username: string) {
    cy.get('#user_login').type(username);
  }

  static typePasswordInput(password: string) {
    cy.get('#user_password').type(password);
  }

  static clickSignInButton() {
    cy.get('[name="submit"]').click();
  }
}
