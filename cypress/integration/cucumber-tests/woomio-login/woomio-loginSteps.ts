import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import WommioLoginCreatorPage from '../../../page-object-model/pages/WommioLoginCreatorPage';

Given('Open login page for content creators', () => {
  WommioLoginCreatorPage.visitLoginCreator();
});

When('Type {string} in email field', username => {
  WommioLoginCreatorPage.typeUsernameInput(username);
});

And('Type {string} in password field', password => {
  WommioLoginCreatorPage.typePasswordInput(password);
});

And('Click continue button', () => {
  WommioLoginCreatorPage.clickContinueBtn();
});

Then('Url should be change', () => {
  WommioLoginCreatorPage.checkLoginURL();
});
