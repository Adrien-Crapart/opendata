describe('OpenData Search', () => {
  it('allows users to search for datasets and displays results', () => {
    cy.visit('/');

    // Sélectionner l'input de recherche et saisir une requête
    cy.get('input[placeholder="Search for datasets..."]')
      .type('test dataset')
      .should('have.value', 'test dataset');

    // Cliquer sur le bouton de recherche
    cy.get('button').contains('Search').click();

    // Vérifier que les résultats de la recherche sont affichés
    cy.get('.bg-gray-100').should('be.visible');
    cy.get('.bg-gray-100 h3').should('contain.text', 'Dataset: test dataset');
  });
});
