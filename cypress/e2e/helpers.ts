export function fullAppUrl(path: string) {
  return `${Cypress.config('baseUrl')}${path}`;
}

// TODO getMainPageContentAs
export function getMainNavigationContentAs(alias: string) {
  return cy.get('nts-main-nav mat-nav-list')
    .as(alias);
}

// TODO getMainPageContentAs
export function getMainPageContentAs(alias: string) {
  return cy.get('router-outlet')
    .next()
    .as(alias);
}
