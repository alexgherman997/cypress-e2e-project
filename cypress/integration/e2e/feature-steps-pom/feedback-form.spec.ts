import FeedbackPage from '../../../page-object-model/pages/FeedbackPage';

describe('Feedback form test', () => {
  before(() => {
    cy.visitFeedbackPage();
  });

  it('submit feedback form', () => {
    FeedbackPage.submitFeedbackForm();
  });
});
