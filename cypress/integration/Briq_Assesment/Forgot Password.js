describe('TestSuite for Forgot Password functionality',()=>{

    it('To verify Forgot Password point is present in the list displayed on the page',()=>{
 
     cy.visit('http://the-internet.herokuapp.com/')
     cy.get('#content > ul').find("a[href='/forgot_password']").should('have.text','Forgot Password')
    })

    it('To verify user click on Retrive password button without entering email',()=>{
        cy.visit('http://the-internet.herokuapp.com/')
        cy.get('#content > ul').find("a[href='/forgot_password']").click()
        cy.get("#form_submit").click()
        cy.get('#flash').contains('Your email is invalid!')
    })

    it('To verify user enters invalid email and tap on Retrive password button',()=>{
        cy.visit('http://the-internet.herokuapp.com/')
        cy.get('#content > ul').find("a[href='/forgot_password']").click()
        cy.get('#email').type('jjhkxcn')
        cy.get("button[id='form_submit']").click()
        cy.get('#flash').contains('Your email is invalid!')
    })

    it.only('To verify user click on Retrive password button after entering valid email id',()=>{
        cy.visit('http://the-internet.herokuapp.com/')
        cy.get('#content > ul').find("a[href='/forgot_password']").click()
        cy.get('#email').type('user@mailinator.com')
        cy.get('#form_submit').click()
        cy.get('#flash').contains('Reset link is sent to your email')
    })

    it('To verify location of Forgot Password link',()=>{

        cy.visit('http://the-internet.herokuapp.com/')
        cy.get('#content > ul').find("a[href='/forgot_password']").click()
        cy.location().should((location) => {
            expect(location.hash).to.be.empty
            expect(location.href).to.eq('http://the-internet.herokuapp.com/forgot_password')
            expect(location.host).to.eq('the-internet.herokuapp.com')
            expect(location.hostname).to.eq('the-internet.herokuapp.com')
            expect(location.origin).to.eq('http://the-internet.herokuapp.com')
            expect(location.pathname).to.eq('/forgot_password')
            expect(location.protocol).to.eq('http:')
            
          })
       })

})