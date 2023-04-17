import roversFixture from "../fixtures/roversFixture"
import photosFixture from "../fixtures/imagesFixture"

describe('Modal Test', () => {

  beforeEach(() => {
    const roversPath = 'https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=vnSCs1JJ7ERtXeAqN6cajKwEh99pz5q6xueRhxMV'
    const perseverancePhotosPath = 'https://api.nasa.gov/mars-photos/api/v1/rovers/Perseverance/photos?sol=100&api_key=vnSCs1JJ7ERtXeAqN6cajKwEh99pz5q6xueRhxMV'
    cy.intercept({method:'GET', url: roversPath}, roversFixture);
    cy.intercept({method:'GET', url: perseverancePhotosPath}, photosFixture)
    cy.visit('http://localhost:3000/');

    cy.get('[href="/Perseverance"] > div')
      .click()
  })

  it('Should be able to click on a photo', () => {
    cy.get('.sol').type('100')
      .get('button').click()
      .get('img').first()
      .click()
      .get('.modal-img').should('be.visible')
  })

  it('Should be able to close the modal image', () => {
    cy.get('.sol').type('100')
      .get('button').click()
      .get('img').first()
      .click().wait(1000)
      .get('.x-button').click()
      .get('.modal-img').should('not.exist')
  })
})