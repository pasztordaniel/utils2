/// <reference types="cypress" />

describe('first test', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('example button works', () => {
    cy.contains('Button').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Works!');
    });
  });
});
