import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../page-object-model/pages/LoginPage';

// The format of the login.feature and login folder -> LoginSteps.ts
// should be keep for all testing files cause this is the way
// cumber preprocesor knows to work with those files

Given('I open login page', () => {
  cy.visitLoginPage();
});

When('I submit login', () => {
  cy.fixture('user-data').then(loginData => {
    cy.login(loginData.username, loginData.password);
  });
});

Then('I should see homepage', () => {
  cy.get('#account_summary_tab').should('be.visible');
});

//Same login steps but using POM class
Given('Open login page', () => {
  LoginPage.visit();
});

When(
  'Submit login with {string} as username and {string} as password',
  (username, password) => {
    LoginPage.login(username, password);
  }
);

Then('Should see error message display', () => {
  LoginPage.displayErrorMessage();
});

When('Type {word} in username input', username => {
  LoginPage.typeUsernameInput(username);
});

And('Type {word} in password input', password => {
  LoginPage.typePasswordInput(password);
});

And('Click sign in button', () => {
  LoginPage.clickSignInButton();
});
