let nameLoc = '#txtUsername';
let pasLoc = '#txtPassword';
let butLoc = '#btnLogin' ;
let homeurl = 'https://opensource-demo.orangehrmlive.com/'

export class LoginPage {


    static loginPositive(usernameP = 'Admin', passwordP = 'admin123'){
        cy.visit(homeurl)
        cy.get(nameLoc).type(usernameP) 
        cy.get(pasLoc).type(passwordP)
        cy.get(butLoc).click()
        cy.get('#menu_dashboard_index > b').should('be.visible');
    }
    static loginNegative(usernameN, passwordN){
        cy.visit(homeurl)
        cy.get(nameLoc).type(usernameN) 
        cy.get(pasLoc).type(passwordN)
        cy.get(butLoc).click()
        cy.get('#spanMessage').should('contain','Invalid credentials');
}
} 
export default LoginPage 
