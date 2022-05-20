import { defineStep } from 'cypress-cucumber-preprocessor/steps';

//Global steps which can be called in all feature files
//the name of the folder and file should be common, cucumber preprocessor to konw from where to take it
defineStep('I wait {int} seconds', time => {
  cy.wait(time * 1000);
});

defineStep('I should see {string} in the title', title => {
  cy.title().should('contain', title);
});

defineStep('I should see {string} in the url', url => {
  cy.url().should('contain', url);
});

defineStep('I reload the browser', () => {
  cy.reload();
});
