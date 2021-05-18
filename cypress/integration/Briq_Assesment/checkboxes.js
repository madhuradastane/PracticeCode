/// <reference types="cypress" />

describe('TestSuite for Checkboxes functionality',()=>{

    it('To verify Checkboxes point is present in the list displayed on the page',()=>{
 
     cy.visit('http://the-internet.herokuapp.com/')
     cy.get('#content > ul').find("a[href='/checkboxes']").should('have.text','Checkboxes')
    })

    it('To verify by default checkbox 2 is checked',()=>{
        cy.visit('http://the-internet.herokuapp.com/')
        cy.get('#content > ul').find("a[href='/checkboxes']").click()
        cy.get('#checkboxes > :nth-child(3)').should('be.checked')

    })

    it('To verify user is able to select check box when other checkbox is already checked',()=>{
        cy.visit('http://the-internet.herokuapp.com/checkboxes')
        cy.get('#checkboxes > :nth-child(3)').should('be.checked')
        cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')

    })

    it('To verify user is able to uncheck the checked checkbox',()=>{
        cy.visit('http://the-internet.herokuapp.com/checkboxes')
        cy.get('#checkboxes > :nth-child(3)').should('be.checked')
        cy.get('#checkboxes > :nth-child(3)').uncheck().should('not.be.checked')

    })





    it('To verify location of Checkboxes link',()=>{

        cy.visit('http://the-internet.herokuapp.com/')
        cy.get('#content > ul').find("a[href='/checkboxes']").click()
        cy.location().should((location) => {
            expect(location.hash).to.be.empty
            expect(location.href).to.eq('http://the-internet.herokuapp.com/checkboxes')
            expect(location.host).to.eq('the-internet.herokuapp.com')
            expect(location.hostname).to.eq('the-internet.herokuapp.com')
            expect(location.origin).to.eq('http://the-internet.herokuapp.com')
            expect(location.pathname).to.eq('/checkboxes')
            expect(location.protocol).to.eq('http:')
            
          })
       })

})