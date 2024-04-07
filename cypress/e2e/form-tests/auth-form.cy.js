describe('home work', () => {
    beforeEach(() => {
      
      cy.visit('https://the-internet.herokuapp.com/login')
    })
  
    it('Check the display of the error "Your password is invalid!".', () => {
      
      cy.get('#username').type('tomsmith')
      cy.get('#password').type('notApassword')
      cy.get('.fa.fa-2x.fa-sign-in').click()
      cy.contains('Your password is invalid!')

    })

    it('Check the display of the error "Your password is invalid!".', () => {
      
      cy.get('#username').type('tomsmith')
      cy.get('#password').type('notApassword')
      cy.get('.fa.fa-2x.fa-sign-in').click()
      cy.contains('Your password is invalid!')

  
    })
  })