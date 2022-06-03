//E2e test for login using POM pattern - replace 
import NavBar from '../../../page-object-model/components/NavBar';
import LoginPage from '../../../page-object-model/pages/LoginPage';
import {
  login_username,
  login_password,
} from '../../../page-object-model/utils/constants.js';

describe('Login failed test', () => {
  before(() => {
    cy.visitLoginPage();
  });

  it('try to login with invalid creditials', () => {
    LoginPage.login('user', 'pass');
  });

  it('check error message', () => {
    LoginPage.displayErrorMessage();
  });
});

describe('Login succesfull test', () => {
  before(() => {
    cy.visitLoginPage();
  });

  it('try to login with valid credentials', () => {
    LoginPage.login(login_username, login_password);
  });

  it('logout', () => {
    NavBar.logout();
  });

  it('signin button should be visible', () => {
    NavBar.displaySignInButton();
  });
});
