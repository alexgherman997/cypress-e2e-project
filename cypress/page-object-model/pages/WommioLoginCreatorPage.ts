import BasePage from './BasePage';

export default class WommioLoginCreatorPage extends BasePage {

  static visitLoginCreator() {
    cy.visit('https://www.woomio.com/#/contentcreators/login/');
  }

  static loginCreator(username: string, password: string) {}

  static typeUsernameInput(username: string) {
    cy.get('input[type="text"]').type(username);
  }

  static typePasswordInput(password: string) {
    cy.get('input[type="password"]').type(password);
  }

  static clickContinueBtn() {
    cy.contains('Continue').click();
  }

  static checkLoginURL() {
    cy.url().should('contain', 'mediakit');
  }
}
