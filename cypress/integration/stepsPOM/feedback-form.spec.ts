import FeedbackPage from '../../page-object-model/pages/Feedback';

describe('Feedback form test', () => {
  before(() => {
    cy.visitFeedbackPage();
  });

  it('submit feedback form', () => {
    FeedbackPage.submitFeedbackForm();
  });
});
