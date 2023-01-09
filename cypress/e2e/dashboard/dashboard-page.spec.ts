describe('Dashboard page', () => {

  it('should render root url', () => {
    cy.visit('/');
    const expectedUrl = Cypress.config('baseUrl');
    cy.url().should('equal', `${expectedUrl}/`);
  });

  it('should render Dashboard', () => {
    cy.visit('/');
    cy.contains('dashboard');
  });
});
