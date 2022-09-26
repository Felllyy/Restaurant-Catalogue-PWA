/// <reperence types="cypress" />

it('local test', () => {
  cy.visit('/#')

  cy.get('#favoriteTag').click()
})
