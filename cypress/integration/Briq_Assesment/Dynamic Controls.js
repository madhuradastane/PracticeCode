/// <reference types="cypress" />

describe('TestSuite for Dynamic Controls functionality',()=>{

    it('To verify Dynamic Controls point is present in the list displayed on the page',()=>{
 
     cy.visit('http://the-internet.herokuapp.com/')
     cy.get('#content > ul').find("a[href='/dynamic_controls']").should('have.text','Dynamic Controls')
 
    })

    it('To verify user click on Remove button',()=>{
        cy.visit('http://the-internet.herokuapp.com/')
        cy.get('#content > ul').find("a[href='/dynamic_controls']").click()
        cy.get("#checkbox-example > button[type='button']").click()
        cy.get('#checkbox-example #message').should('have.text',"It's gone!")
        cy.get("#checkbox-example > button[type='button']").should('have.text','Add')
    })

    it('To verify user click on Add button',()=>{
        cy.visit('http://the-internet.herokuapp.com/')
        cy.get('#content > ul').find("a[href='/dynamic_controls']").click()
        cy.get("#checkbox-example > button[type='button']").click()
        cy.get("#checkbox-example > button[type='button']").should('have.text','Add')
        cy.get("#checkbox-example > button[type='button']").click()
        cy.get("#checkbox-example > button[type='button']").should('have.text','Remove')
        cy.get('#checkbox-example #message').should('have.text',"It's back!")
    })

    it('To verify user click on Enable button',()=>{
        cy.visit('http://the-internet.herokuapp.com/')
        cy.get('#content > ul').find("a[href='/dynamic_controls']").click()
        cy.get("#input-example > button[type='button']").click()
        cy.get("p[id='message']").should('have.text',"It's enabled!")
        cy.get("#input-example > button[type='button']").should('have.text','Disable')
        cy.get("input[type='text']").should('be.enabled')
    })

    it('To verify user click on Disable button',()=>{
        cy.visit('http://the-internet.herokuapp.com/')
        cy.get('#content > ul').find("a[href='/dynamic_controls']").click()
        cy.get("#input-example > button[type='button']").click()
        cy.get("#input-example > button[type='button']").should('have.text','Disable')
        cy.get("#input-example > button[type='button']").click()
        cy.get("#input-example > button[type='button']").should('have.text','Enable')
        cy.get("p[id='message']").should('have.text',"It's disabled!")
        cy.get("input[type='text']").should('be.disabled')

    })


    it('To verify location of Dynamic Controls link',()=>{

        cy.visit('http://the-internet.herokuapp.com/')
        cy.get('#content > ul').find("a[href='/dynamic_controls']").click()
        cy.location().should((location) => {
            expect(location.hash).to.be.empty
            expect(location.href).to.eq('http://the-internet.herokuapp.com/dynamic_controls')
            expect(location.host).to.eq('the-internet.herokuapp.com')
            expect(location.hostname).to.eq('the-internet.herokuapp.com')
            expect(location.origin).to.eq('http://the-internet.herokuapp.com')
            expect(location.pathname).to.eq('/dynamic_controls')
            expect(location.protocol).to.eq('http:')
            
          })
       })


}) 