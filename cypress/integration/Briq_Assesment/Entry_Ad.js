/// <reference types="cypress" />

describe('TestSuite for Entry Ad functionality',()=>{

   it('To verify Entry Ad point is present in the list displayed on the page',()=>{

    cy.visit('http://the-internet.herokuapp.com/')
    cy.get('#content > ul').find("a[href='/entry_ad']").should('have.text','Entry Ad')

   })

   it('To verify on clicking Entry Ad link Model popup opens',()=>{
       cy.visit('http://the-internet.herokuapp.com/entry_ad')
       cy.get('div#modal').should('have.css', 'display', 'block')
     })

    it('To verify on clicking close Modal popup disables',()=>{
        cy.visit('http://the-internet.herokuapp.com/entry_ad')
        cy.get('.modal > .modal-footer > p').click()
        cy.get('div#modal').should('have.css', 'display', 'none')

      })

    it('To verify user reload the page after closing modal popup',()=>{
        cy.visit('http://the-internet.herokuapp.com/entry_ad')
        cy.get('.modal > .modal-footer > p').click()
        cy.reload()
        cy.get('div#modal').should('have.css', 'display', 'none')

    })

    it('To verify on clicking re-enable link modal popup enables',()=>{
        cy.visit('http://the-internet.herokuapp.com/entry_ad')
        cy.get('.modal > .modal-footer > p').click()
        cy.get("a[id='restart-ad']").click()
        cy.reload()
        cy.get('div#modal').should('have.css', 'display', 'block')

    })

   it('To verify location of Entry Ad link',()=>{

    cy.visit('http://the-internet.herokuapp.com/')
    cy.get('#content > ul').find("a[href='/entry_ad']").click()
    cy.location().should((location) => {
        expect(location.hash).to.be.empty
        expect(location.href).to.eq('http://the-internet.herokuapp.com/entry_ad')
        expect(location.host).to.eq('the-internet.herokuapp.com')
        expect(location.hostname).to.eq('the-internet.herokuapp.com')
        expect(location.origin).to.eq('http://the-internet.herokuapp.com')
        expect(location.pathname).to.eq('/entry_ad')
        expect(location.protocol).to.eq('http:')
        
      })
   })

})