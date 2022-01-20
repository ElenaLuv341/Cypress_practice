export class LoginPage {
   
    navigate(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }

    EnterUserName(){
        cy.get(UserNameInput).type('Admin')
    }
    EnterPassword(){
        cy.get(passwordInput).type('admin123')
    }
    ClickLogin(){
        cy.get(loginBtn).click()
    }
}