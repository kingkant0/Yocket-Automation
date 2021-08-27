describe('Automate Yocket Login and Logout', () => {
    it('From Homepage navigate to Enter Your email and continue page', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://yocket.in/')

        cy.get('a').contains('LOGIN').click({force: true})
        cy.url().should('eq','https://yocket.in/account/login')
    
        
    })
    it('Navigate to Password filling page and check if Logout is disabled',()=>{

        cy.get('input[name="email"]').type("itsamankant@gmail.com")

        cy.get('button[type="submit"]', { timeout: 10000 }).click()
        cy.get('button[type="submit"]').should('be.disabled')
        

        

    })

    it('Password validation and Login', ()=>{

        cy.get('input[name="password"]').type("123")
        cy.get('button[type="submit"]', { timeout: 10000 }).click()
        cy.get('div.alert.alert-danger').should('contain','The password you entered was incorrect. Please try again.')

        cy.get('input[name="password"]').clear()
        cy.get('button[type="submit"]').should('be.disabled')

        cy.get('input[name="password"]').type("123456")
        cy.get('button[type="submit"]', { timeout: 10000 }).click()

    })

    it('Logout and validate logged out', ()=>{

        cy.get('ul.navbar-nav > li:nth-child(9) > a > span', { timeout: 10000 }).eq(1).should('contain','Aman')

        cy.get('ul.navbar-nav > li:nth-child(9) > a',{ timeout: 10000 }).eq(1).click({force: true})
        cy.get('a[href="/account/logout"]').eq(1).click({force: true})
        cy.url().should('eq','https://yocket.in/account/login')

    })

})