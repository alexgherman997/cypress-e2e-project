describe('Submit feedback form redirected to the corrcet page', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html');
  });

  it('click on Feedback button from Navbar', () => {
    cy.get('#feedback').click();
  });

  it('fill feddback form', () => {
    cy.get('#name').type('Alex');
    cy.get('#email').type('email');
    cy.get('#subject').type('Subject');
    cy.get('#comment').type('Comment');
  });

  it('click send feedback', () => {
    cy.get('[name="submit"]').click();
  });

  it('redirect on Send feedback page', () => {
    cy.url().should('include', 'sendFeedback.html');
    cy.contains('Thank you for your comments');
  });
});
