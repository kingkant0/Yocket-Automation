describe('Automate Yocket Signup', () => {
    const email = "aba.xyz@gmail.com"
    const phone = '8182348180'

    it('From Homepage navigate to Enter Your email and continue page and validate if email copied', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://yocket.in/')
    
        cy.get('#email').type(email,{force: true})

        cy.get('button[type="submit"]', { timeout: 10000 }).contains('NEXT').click({force: true})

        cy.get('input[name="email"]').should('have.value', email )
    })

    it('Navigate from Enter Your Email and Continue page to Create Account page and validate email copy and Signup Button disability', () => {
        
        cy.get('button[type="submit"]', { timeout: 10000 }).click()

        cy.get('input[name="email"]').should('have.value', email)

        cy.get('button[type="submit"]').should('be.disabled')
    })

    it('Check First Name is only alphnabetical', () => {
        
        cy.get('input[name="first_name"]').type('1234')
        cy.get('input[name="first_name"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('The first name field may only contain alphabetic characters')
        .should('be.visible')


        cy.get('input[name="first_name"]').clear().type('Mr.X')
        cy.get('input[name="first_name"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('The first name field may only contain alphabetic characters')
        .should('be.visible')

        
    })

    it('Check First Name not empty', ()=>{

        cy.get('input[name="first_name"]').clear()
        cy.get('input[name="first_name"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('The first name field is required')
        .should('be.visible')
    })

    it('Check First Name has minimum 3 characters', ()=>{

        cy.get('input[name="first_name"]').type('ab')
        cy.get('input[name="first_name"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('The first name field must be at least 3 characters')
        .should('be.visible')
    })

    it('Check First Name has maximum 15 characters', ()=>{

        cy.get('input[name="first_name"]').clear().type('abcdefghijklmnopqrst')
        cy.get('input[name="first_name"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('The first name field may not be greater than 15 characters')
        .should('be.visible')
    })

    it('Enter Valid First Name', ()=>{

        cy.get('input[name="first_name"]').clear().type('abc')

    })

    it('Check Last Name is alphabetical', ()=>{

        cy.get('input[name="last_name"]').type('1234')
        cy.get('input[name="last_name"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('The last name field may only contain alphabetic characters')
        .should('be.visible')

        cy.get('input[name="last_name"]').clear().type('Jr.')
        cy.get('input[name="last_name"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('The last name field may only contain alphabetic characters')
        .should('be.visible')
    })

    it('Check Last Name not empty', ()=>{

        cy.get('input[name="last_name"]').clear()
        cy.get('input[name="last_name"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('The last name field is required')
        .should('be.visible')
    })

    it('Check Last Name has minimum 3 characters', ()=>{

        cy.get('input[name="last_name"]').type('ab')
        cy.get('input[name="last_name"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('The last name field must be at least 3 characters')
        .should('be.visible')
    })

    it('Check Last Name has maximum 15 characters', ()=>{

        cy.get('input[name="last_name"]').clear().type('abcdefghijklmnopqrst')
        cy.get('input[name="last_name"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('The last name field may not be greater than 15 characters')
        .should('be.visible')
    })

    it('Enter valid Last Name', ()=>{

        cy.get('input[name="last_name"]').clear().type('xyz')
    })

    it('Check Phone Number has minimum 6 digits', ()=>{

        cy.get('input[name="phone"]').type('1234')
        cy.get('input[name="phone"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('The phone field must be at least 6 characters')
        .should('be.visible')
    })

    it('Check Phone Number is not empty', ()=>{

        cy.get('input[name="phone"]').clear()
        cy.get('input[name="phone"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('The phone field is required')
        .should('be.visible')
    })

    it('Check Phone Number is only numeric', ()=>{

        cy.get('input[name="phone"]').type('abc-def')
        cy.get('input[name="phone"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('Please enter a valid phone')
        .should('be.visible')

        cy.get('input[name="phone"]').clear().type('#10078956')
        cy.get('input[name="phone"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('Please enter a valid phone')
        .should('be.visible')

        cy.get('input[name="phone"]').clear().type('1800-999-999')
        cy.get('input[name="phone"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('Please enter a valid phone')
        .should('be.visible')
    })

    it('Check Phone Number when invalid (more scenarios can be added based on criteria)', ()=>{

        cy.get('input[name="phone"]').clear().type('0000000000')
        cy.get('input[name="phone"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('Please enter a valid phone')
        .should('be.visible')
    })

    it('Check Phone Number is maximum 12 digits', ()=>{

        cy.get('input[name="phone"]').clear().type('99823192304512')
        cy.wait(1000)
        cy.get('input[name="phone"]').type('{backspace}')
        cy.get('input[name="phone"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('The phone field may not be greater than 12 characters')
    })

    it('Check Phone Number if already linked to an email', ()=>{

        cy.get('input[name="phone"]').clear().type('88267971777')
        cy.wait(1000)
        cy.get('input[name="phone"]').type('{backspace}')
        cy.get('input[name="phone"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('This phone number is already linked to another e-mail.')
        .should('be.visible')
    })

    it('Enter valid phone number and check if it is valid', ()=>{

        cy.get('input[name="phone"]').clear().type(phone)
        cy.get('input[name="phone"]').should('not.have.class','is-invalid')
    })

    it('Check Password is minimum 6 characters', ()=>{

        cy.get('input[name="password"]').type('qwe34')
        cy.get('input[name="password"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('The password field must be at least 6 characters')
        .should('be.visible')
    })

    it('Check Password is not empty', ()=>{

        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').should('have.class','is-invalid')
        cy.get('div.invalid-feedback').contains('The password field is required')
        .should('be.visible')
    })

    it('Enter valid Password', ()=>{

        cy.get('input[name="password"]').clear().type('123456')
    })

    it('Try signup without Captcha', ()=>{

        cy.get('button[type="submit"]', { timeout: 10000 }).click()
        cy.get('div.alert.alert-danger').should('contain','Please verify recaptcha')
    })

    
  })