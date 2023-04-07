// This set of tests will focus on the dashboard (landing page) of our application, and verify that a user will have access to multiple options upon arriving at our applications first page. 

// These elements will be interactive images, but should also use the proper semantic HTML to be fully a11y friendly. This also means that elements should be tabbable.



describe('Dashboard User Stories:', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  it('When a User arrives, there is a creepy hovering atom icon:', () => {

    cy.get('.App-logo')
      .should('exist').should('be.visible')

  })

  it('When a User arrives, there is a counter that they can increment or decrement', () => {

    cy.get('.Counter_value__N0Uo3')
      .should('exist').should('be.visible').contains('0')

    cy.get('[aria-label="Increment value"]')
      .click()
    cy.get('.Counter_value__N0Uo3').contains('1')

    cy.get('[aria-label="Decrement value"]')
      .click()
    cy.get('.Counter_value__N0Uo3').contains('0')

  })
})

describe('Dashboard User Stories - SAD:', () => {

  it('When a User arrives and there is a network error, they are shown an error message indicating the issue')
})