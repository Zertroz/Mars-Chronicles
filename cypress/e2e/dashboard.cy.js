// This set of tests will focus on the dashboard (landing page) of our application, and verify that a user will have access to multiple options upon arriving at our applications first page. 
// These elements will be interactive images, but should also use the proper semantic HTML to be fully a11y friendly. This also means that elements should be tabbable.
import roversFixture from "../fixtures/roversFixture";

describe('Dashboard User Stories:', () => {

  beforeEach(() => {
    cy.intercept({method:'GET', url:'https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=vnSCs1JJ7ERtXeAqN6cajKwEh99pz5q6xueRhxMV'}, roversFixture);
    cy.visit('http://localhost:3000/');
  });
  
  it('user should see the app title on page load', () => {
    cy.get('h1')
    .should('exist')
    .should('be.visible')
    .contains('Mars Chronicles');
  });

  it('user should see all rover images and they should have alt text', () => {
    cy.get('[href="/Curiosity"] > div > .rover-icon-img')
     .should('exist').should('be.visible')
     .should('have.attr', 'alt');

    cy.get('[href="/Spirit"] > div > .rover-icon-img')
     .should('exist').should('be.visible')
     .should('have.attr', 'alt');
  });
})