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
}
