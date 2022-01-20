 import {LoginPage} from "./LoginPage_po" 




describe('Desctop.Positive', () =>{
    it('Navigate to OrangeHRM for desctop.Positive', ()=>{
     cy.visit('https://opensource-demo.orangehrmlive.com/')
     cy.viewport(1920,1080)
     cy.get('#txtUsername').type('Admin') 
     cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('#menu_dashboard_index > b').should('be.visible');
    })
})


describe('Desctop.Negative1', () =>{
    it('Navigate to OrangeHRM for desctop.Negative1', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.viewport(1920,1080)
    cy.get('#txtUsername').type('Dolly') 
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.get('#spanMessage').should('be.visible');
})
})

describe('Desctop.Negative2', () =>{
    it('Navigate to OrangeHRM for desctop.Negative2', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.viewport(1920,1080)
    cy.get('#txtUsername').type('Admin') 
    cy.get('#txtPassword').type('3456')
    cy.get('#btnLogin').click()
    cy.get('#spanMessage').should('contain','Invalid credentials');
})

})


describe('Tablet.Positive', () =>{
    it('Navigate to OrangeHRM', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.viewport(1024,600)
        LoginPositive('Admin','admin123');
        
    })
})

describe('Tablet.Negative', () =>{
    it('Navigate to OrangeHRM', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.viewport(1024,600)
        LoginNegative('Dolly','admin123');
        
    })
})


describe('Mobile', () =>{
    it('Navigate to OrangeHRM', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.viewport(360,640);
    })
})






function LoginPositive(Username, Password){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type(Username) 
        cy.get('#txtPassword').type(Password)
        cy.get('#btnLogin').click()
        cy.get('#menu_dashboard_index > b').should('be.visible');
    }
function LoginNegative(UsernameN, PasswordN){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#txtUsername').type(UsernameN) 
    cy.get('#txtPassword').type(PasswordN)
    cy.get('#btnLogin').click()
    cy.get('#spanMessage').should('contain','Invalid credentials');
}

