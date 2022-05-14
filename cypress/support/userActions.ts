declare namespace Cypress {
  interface Chainable {
    /**
     * Login in the application
     * @param username
     * @param password
     */
    login(username: string, password: string): Chainable<Element>;

    /**
     * Sending a feeback form
     * @param name
     * @param email
     * @param subject
     * @param question
     */
    submitfeedbackForm(
      name: string,
      email: string,
      subject: string,
      question: string
    ): Chainable<Element>;
  }
}

Cypress.Commands.add('login', (username, password) => {
  cy.get('#user_login').type(username);
  cy.get('#user_password').type(password);
  cy.get('#user_remember_me').click();
  cy.get('[name="submit"]').click();
});

Cypress.Commands.add('submitfeedbackForm', (name, email, subject, question) => {
  cy.get('#name').type(`${name}`);
  cy.get('#email').type(`${email}`);
  cy.get('#subject').type(`${subject}`);
  cy.get('#comment').type(`${question}`);
  cy.get('[name="submit"]').click();
});
