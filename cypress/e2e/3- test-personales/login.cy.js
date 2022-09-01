describe('Search elements', ()=>{
    beforeEach(()=>{
        cy.visit('http://automationpractice.com/')
    })

    it('Login with incorrect email', ()=>{
        cy.login('something', 'other')
        cy.fixture('login').then((login)=>{
            cy.get(login.incorrectLoginBanner).should('contain','Invalid email address');
        })
        
    })
})