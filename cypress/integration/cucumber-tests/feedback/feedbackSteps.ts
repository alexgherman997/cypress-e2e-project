import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import FeedbackPage from '../../../page-object-model/pages/FeedbackPage';

Given('I open the feedback page', () => {
  FeedbackPage.visit();
});

Then('Feedback title is displayed', () => {
  FeedbackPage.displayFeebackTitle();
});

And('I enter {string} in name input', name => {
  FeedbackPage.enterName(name);
});

And('I enter {string} in email input', email => {
  FeedbackPage.enterEmail(email);
});

And('I enter {string} in subject input', subject => {
  FeedbackPage.enterSubject(subject);
});

And('I enter {string} in comment input', comment => {
  FeedbackPage.enterComment(comment);
});

When('I click Send Message button', () => {
  FeedbackPage.clickSendMessage();
});

Then('Feedback send message containing sender {string} should appear', name => {
  cy.contains('Thank you').should('contain', name);
});
