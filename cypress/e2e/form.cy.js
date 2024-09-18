describe('HTML Page test', () => {
    it('should render html page', () => {
        // visit the local html file
        cy.visit('http://127.0.0.1:5500/index.html');

        //check if the H1 contains the correct text
        cy.get('#welcome-message').should('contain', 'Stay Updated!');
    })

    it('should submit the form and subscribe', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.get('input[type="email"]').type('user@example.com')
        cy.get('button[type="submit"]').click();
    })
})