import BasePage from './BasePage';

export default class LoginPage extends BasePage {
  //i think this is correct apprach for POM, research it and change all Pages
  private static inputLoginCSS: string = '#user_login';
  private static inputPasswordCSS: string = '#user_password';

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
    cy.get(LoginPage.inputLoginCSS).type(username);
  }

  static typePasswordInput(password: string) {
    cy.get(LoginPage.inputPasswordCSS).type(password);
  }

  static clickSignInButton() {
    cy.get('[name="submit"]').click();
  }
}
