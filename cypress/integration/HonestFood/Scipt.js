describe('My TestSuit For E-commerce', function () {
    before(() => {
        cy.visit('https://staging.clubkitchen.at/');

    });
    var arr = [];
    var str = ' ';
    var choice = prompt('Enter your choice')

    it('Verify that the ProductName is Sorted By Name', function () {
        cy.get('button[class="agree-cookie"]').click()
        cy.wait(5000)
        cy.get('a[class="button-home is--primary"]').eq(2).click();
        cy.on('uncaught:exception',(err,Runnable)=>{
                    return false
                })
        cy.get('a[class="popup-no-address-link"]').click();
        cy.get('.product--box.box--image').
            each((mamacita, i) => {
                str = mamacita.text();
                if (mamacita.eq(i).find('form > a').text().includes(choice)) {
                    cy.wrap(mamacita.eq(i).find('form > a')).click()
                    cy.wait(5000)
                    cy.get('#topup-modal--close').click()
                    cy.get('#address-input').type("Seidengasse 44, 1070 Wien, Austria")
                    cy.get('.blattgold--form-banner-submit').click()
                }
            })
        // Cheesy Pork Burrito 

    });
});