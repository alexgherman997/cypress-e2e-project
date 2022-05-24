declare namespace Cypress {
  interface Chainable {
    /**
     * Navigate to the home page of the application
     */
    visitHomePage(): Chainable<Element>;
    visitLoginPage(): Chainable<Element>;
    visitFeedbackPage(): Chainable<Element>;

    /**
     * Wait for a number of seconds
     * @param seconds
     */
    waitForSeconds(seconds: number): Chainable<Element>;

    setResolution(size: Array<number>): Chainable<Element>;
  }
}

Cypress.Commands.add('visitHomePage', () => {
  cy.visit('http://zero.webappsecurity.com/index.html');
});

Cypress.Commands.add('waitForSeconds', seconds => {
  cy.wait(1000 * seconds);
});

//Example: size == array : set window width, height ? set window like iphone-6
//we use TS, size always will be an array
Cypress.Commands.add('setResolution', size => {
  Array.isArray(size) ? cy.viewport(size[0], size[1]) : cy.viewport(size);
});

Cypress.Commands.add('visitLoginPage', () => {
  cy.visit('http://zero.webappsecurity.com/login.html');
});

Cypress.Commands.add('visitFeedbackPage', () => {
  cy.visit('http://zero.webappsecurity.com/feedback.html');
});
