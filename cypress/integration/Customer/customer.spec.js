describe('Login Interface', () => {
    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('.borderM > :nth-child(1) > .btn').click()
        cy.get('#userSelect').select('Harry Potter')
        cy.get('form.ng-valid > .btn').click()
    });

     it('allows user to login',() => {
     })

    it('allows user to deposit', () => {
        cy.get('[ng-class="btnClass2"]').click()
        cy.get('.form-control').type(45)
        cy.get('form.ng-dirty > .btn').click()
        cy.get('.borderM > :nth-child(3) > :nth-child(2)')
        .should('have.text', '45')
    })

    it('allows user to withdraw', () => {
        cy.get('[ng-class="btnClass3"]').click()
        cy.get('.form-control').type('41')
        cy.get('form.ng-dirty > .btn').click()
        cy.get('.borderM > :nth-child(3) > :nth-child(2)')
        .should('have.text', '41')
    })
 
});