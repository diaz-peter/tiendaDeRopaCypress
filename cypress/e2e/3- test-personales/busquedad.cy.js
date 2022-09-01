describe('Buscar elemento', () => {
    it('Buscar multiple elemento', () => {
        cy.visit('http://automationpractice.com/');
       
        cy.fixture('index').them((index)=>{
            cy.get(index.searchBox).type('dress');
        })
    })
})