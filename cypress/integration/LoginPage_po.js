let NameLoc = '#txtUsername';
let PasLoc = '#txtPassword';
let ButLoc = '#btnLogin' ;


export class LoginPage {
   
    navigate(Url = 'https://opensource-demo.orangehrmlive.com/'){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }

    EnterUserNameP(Username ='Admin'){
        cy.get(NameLoc).type(Username)
    }
    EnterPasswordP(Password = 'admin123'){
        cy.get(PasLoc).type(Password)
    }
    ClickLogin(){
        cy.get(ButLoc).click();
    }
    EnterUserNameN(UsernameN = "Dolly"){
        cy.get(NameLoc).type(UsernameN)

    }
    EnterPasswordN(PasswordN = 'admin123'){
    cy.get(PasLoc).type(Password)
    }
}
export default LoginPage