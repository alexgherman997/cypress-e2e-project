describe('Type word into search bar, press enter and will be ridirected on the correct page', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/');
  });

  it('type word into search bar and press enter', () => {
    cy.get('#searchTerm').type('crypto{enter}');
  });

  it('check redirect on the correct page', () => {
    cy.get('.top_offset').should('contain', 'crypto');
    cy.get('h2').should('contain', 'Search Results');
  });
});
