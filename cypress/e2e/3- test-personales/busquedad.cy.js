describe('Buscar algunos elementos', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/');
    })

    it('Buscar hat', () => {
        cy.search('hat');
    })

    it('Buscar dress', () => {
        cy.search('dress');
    })

    it('Buscando elemento sin resultado', ()=>{
        cy.search('qwerty')
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.alert).should('contain','No results were found for your search');
        })
    })
})