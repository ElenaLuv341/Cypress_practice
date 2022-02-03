let nameLoc = '#txtUsername';
let pasLoc = '#txtPassword';
let butLoc = '#btnLogin' ;
let homeurl = 'https://opensource-demo.orangehrmlive.com/';
let spanM = '#spanMessage' 
let menudash = '#menu_dashboard_index > b'
var randomEmail = require('random-email'); 
let panelW = '#welcome'
let logOuT = 'Logout'

export class LoginPage {

    static loginPositive(usernameP='Admin',passwordP ='admin123'){
        cy.visit(homeurl)
        cy.get(nameLoc).type(usernameP) 
        cy.get(pasLoc).type(passwordP)
        cy.get(butLoc).click()
        cy.get(menudash).should('be.visible');
        // cy.get(panelW).contains(logOuT).click();
        // cy.contains('Logout').click();
        cy.get(panelW). click()
        cy.contains(logOuT).click();
    }
    static loginNegative(randomEmail, passwordN, errorMsg){
        cy.visit(homeurl)
        cy.get(nameLoc).type(randomEmail)
        cy.get(pasLoc).type(passwordN)
        cy.get(butLoc).click()
        cy.get(spanM).should('contain', errorMsg);
}

    static loginNegative2(){
       cy.visit(homeurl)
       cy.get(butLoc).click()
       cy.get(spanM).should ('contain', 'Username cannot be empty');
    }
    static userEmailNegative(){
        return randomEmail({ domain: 'example1.com' });
    }
}
export default LoginPage 
