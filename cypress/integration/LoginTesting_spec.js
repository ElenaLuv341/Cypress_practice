import {LoginPage} from "./LoginPage_po" 




describe('Desctop.Positive', () =>{
    it('Navigate to OrangeHRM for desctop.Positive', ()=>{
     cy.viewport(1920,1080)
     LoginPage.loginPositive();
    })
})


describe('Desctop.Negative1', () =>{
    it('Navigate to OrangeHRM for desctop.Negative1', ()=>{
    cy.viewport(1920,1080)
    LoginPage.loginNegative1('Dolly', 'admin*');
})
})

describe('Desctop.Negative2', () =>{
    it('Navigate to OrangeHRM for desctop.Negative2', ()=>{
    cy.viewport(1920,1080)
    LoginPage.loginNegative2();
})

})


describe('Tablet.Positive', () =>{
    it('Navigate to OrangeHRM', ()=>{
        cy.viewport(1024,600)
        LoginPage.loginPositive();
        
    })
})

describe('Tablet.Negative1', () =>{
    it('Navigate to OrangeHRM', ()=>{
        cy.viewport(1024,600)
        LoginPage.loginNegative1('Dolly', 'admin*');
        
    })
})


describe('Tablet.Negative2', () =>{
    it('Navigate to OrangeHRM', ()=>{
        cy.viewport(1024,600)
        LoginPage.loginNegative2();
        
    })
})




describe('Mobile.Positive', () =>{
    it('Navigate to OrangeHRM', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.viewport(360,640)
    LoginPage.loginPositive();

    })
})

describe('Mobile.Negative1', () =>{
    it('Navigate to OrangeHRM', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.viewport(360,640)
    LoginPage.loginNegative1('asss', '456');
    })
})

describe('Mobile.Negative2', () =>{
    it('Navigate to OrangeHRM', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.viewport(360,640)
    LoginPage.loginNegative2();
    })
})