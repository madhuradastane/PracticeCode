/// <reference types="cypress" />

describe('TestSuite for Form Authentication functionality',()=>{

    it('To verify Form Authentication point is present in the list displayed on the page',()=>{
 
     cy.visit('http://the-internet.herokuapp.com/')
     cy.get('#content > ul').find("a[href='/login']").should('have.text','Form Authentication')
    })

    it('To verify elements present on the page',()=>{
        cy.visit('http://the-internet.herokuapp.com/login')
        cy.get('#username').should('be.enabled')
        cy.get('#password').should('be.enabled')
        cy.get('.radius').should('be.enabled')
    })

    it('To verify user is able to login after entering correct username and password',()=>{
        cy.visit('http://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        cy.get('#flash').contains('You logged into a secure area!')
        cy.get('.secondary').should('have.text',' Logout')
    })

    it.only('To verify user click on Logout',()=>{
        cy.visit('http://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        cy.get('.secondary').click()
        cy.get('#flash').contains('You logged out of the secure area!')
        cy.get('.radius').should('be.enabled')

    })

    it('To verify user click on login without entering username and password',()=>{
        cy.visit('http://the-internet.herokuapp.com/login')
        cy.get('.radius').click()
        cy.get('#flash').contains('Your username is invalid!')
    })

    it('To verify user click on login by entering wrong username and password',()=>{
        cy.visit('http://the-internet.herokuapp.com/login')
        cy.get('#username').type('hello')
        cy.get('#password').type('pass')
        cy.get('.radius').click()
        cy.get('#flash').contains('Your username is invalid!')
    })




    it('To verify location of Form Authentication link',()=>{

        cy.visit('http://the-internet.herokuapp.com/')
        cy.get('#content > ul').find("a[href='/login']").click()
        cy.location().should((location) => {
            expect(location.hash).to.be.empty
            expect(location.href).to.eq('http://the-internet.herokuapp.com/login')
            expect(location.host).to.eq('the-internet.herokuapp.com')
            expect(location.hostname).to.eq('the-internet.herokuapp.com')
            expect(location.origin).to.eq('http://the-internet.herokuapp.com')
            expect(location.pathname).to.eq('/login')
            expect(location.protocol).to.eq('http:')
            
          })
       })

})