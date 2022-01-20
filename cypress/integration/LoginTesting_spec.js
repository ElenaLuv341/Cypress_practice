let UserNameInput='#txtUsername'
    let passwordInput='#txtPassword'
    let loginBtn='#btnLogin'

describe('My second test.Login', () =>{
    it('Navigate to OrangeHRM for desctop.Positive case', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.viewport(1920,1080)
        cy.get(UserNameInput).type('Admin') 
        cy.get(passwordInput).type('admin123')
        cy.get(loginBtn).click()
        cy.get('#menu_dashboard_index > b').should('be.visible')
    })
})
    it('Login.Negative case', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.viewport(1920,1080)
    cy.get(UserNameInput).type('Admin43') 
    cy.get(passwordInput).type('admin123')
    cy.get(loginBtn).click()
    cy.get('#spanMessage').should('not.be.visible')    
    })

    it('Login.Negative case', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.viewport(1920,1080)
        cy.get(UserNameInput).type('Admin') 
        cy.get(passwordInput).type('admin')
        cy.get(loginBtn).click()
        cy.get('loginBtn').should('be.disabled')
 
    })


describe('My second test', () =>{
    it('Navigate to OrangeHRM tablet', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.viewport(1024,600)
        
    })
})


describe('My second test', () =>{
    it('Navigate to OrangeHRM mobile', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.viewport(360,640)
    })
})






// Task#6 
 it('Positive case', () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(UserNameInput).type('Admin') 
    cy.get(passwordInput).type('admin123')
    cy.get(loginBtn).click()

 })


it('Negative case1', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(UserNameInput).type('Admin') 
    cy.get(passwordInput).type('12T45')
    cy.get(loginBtn).click()
    cy.get(passwordInput).should()
})

it('Negative case2', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(UserNameInput).type('A45Hj') 
    cy.get(passwordInput).type(' ')
    cy.get(loginBtn).click()

})

it('Negative case3', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(UserNameInput).type('#hjouy') 
    cy.get(passwordInput).type('GH56%')
    cy.get(loginBtn).click()

})
it('Negative case4', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(UserNameInput).type(' Y889') 
    cy.get(passwordInput).type('H 89*')
    cy.get(loginBtn).click()

})