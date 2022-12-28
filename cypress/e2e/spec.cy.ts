describe('Search page', () => {
  it('should correct handle user search input', () => {
    cy.visit('http://localhost:9000/');
    cy.url().should('include', '/search');

    cy.get('input').type('dragon');
    cy.url().should('include', 'dragon');

    cy.get('section').each((el) => {
      assert.include(el.text().toLowerCase(), 'dragon'); // this works but it isn't pretty
    });
  });
});

