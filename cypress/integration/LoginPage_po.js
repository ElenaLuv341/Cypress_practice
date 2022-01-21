let nameLoc = '#txtUsername';
let pasLoc = '#txtPassword';
let butLoc = '#btnLogin' ;
let homeurl = 'https://opensource-demo.orangehrmlive.com/';
let errorM = '#spanMessage' 
let menudash = '#menu_dashboard_index > b'


export class LoginPage {


    static loginPositive(usernameP='Admin',passwordP ='admin123'){
        cy.visit(homeurl)
        cy.get(nameLoc).type(usernameP) 
        cy.get(pasLoc).type(passwordP)
        cy.get(butLoc).click()
        cy.get(menudash).should('be.visible');
    }
    static loginNegative1(usernameN, passwordN){
        cy.visit(homeurl)
        cy.get(nameLoc).type(usernameN) 
        cy.get(pasLoc).type(passwordN)
        cy.get(butLoc).click()
        cy.get(errorM).should('contain','Invalid credentials');
}
    static loginNegative2(){
        cy.visit(homeurl)
        cy.get(butLoc).click()
        cy.get(errorM).should ('contain', 'Username cannot be empty');
    }
}
export default LoginPage 
