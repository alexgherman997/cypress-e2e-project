import BasePage from './BasePage';

export default class FeedbackPage extends BasePage {
  static submitFeedbackForm() {
    cy.fixture('feedback-data').then(feedback => {
      cy.submitfeedbackForm(
        feedback.name,
        feedback.email,
        feedback.subject,
        feedback.question
      );
    });
  }

  static visit() {
    cy.visit('http://zero.webappsecurity.com/feedback.html');
  }

  static displayFeebackTitle() {
    cy.get('#feedback-title').should('have.text', 'Feedback');
  }

  static enterName(name: string) {
    cy.get('#name').type(name);
  }

  static enterEmail(email: string) {
    cy.get('#email').type(email);
  }

  static enterSubject(subject: string) {
    cy.get('#subject').type(subject);
  }

  static enterComment(comment: string) {
    cy.get('#comment').type(comment);
  }

  static clickSendMessage() {
    cy.get('[name="submit"]').click();
  }
}
