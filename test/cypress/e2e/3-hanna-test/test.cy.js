describe('My First Test', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('TC 1) 페이지 제목 확인(positive)', () => {
        cy.title().should('eq', 'OrangeHRM') // 페이지 제목이 OrangeHTML인지 확인(단언)
    })

    it('TC 2) 페이지 제목 확인(negative)', () => {
        cy.title().should('eq', 'OrangeHRM123') // 페이지 제목이 OrangeHTML인지 확인(단언)
    })

    // it('TC 2) 로그인', () => {
    //     const account = {
    //         username: 'Admin',
    //         password: 'admin123'
    //     }
    //     Cypress.Commands.add('homeLogin', (account) => {
    //         cy.get('input[name=Username]').type(user.emai)
    //         cy.login(account)
    //     })
    //     cy.homeLogin(account)
    // })
})