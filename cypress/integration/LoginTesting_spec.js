import { after, before } from "lodash"
import randomEmail from "random-email"
import {LoginPage} from "./LoginPage_po" 


describe('Desctop.Positive and Negative', function()
  {  
    beforeEach(function() {
    cy.viewport(1920,1080)
 })
    it('Navigate to OrangeHRM for desctop.Positive', ()=>{
    LoginPage.loginPositive();
    })
    it('Navigate to OrangeHRM for desctop.Negative1', ()=>{
    LoginPage.loginNegative1(randomEmail(), 'admin123');
    })
    it('Navigate to OrangeHRM for desctop.Negative2', ()=>{
    LoginPage.loginNegative2();
    })
    
})

 describe('Tablet.Positive and Negative', function(){
      beforeEach(function(){
        cy.viewport(1024,600)
    })
    it('Navigate to OrangeHRM', ()=>{
        LoginPage.loginPositive();
        
    })

    it('Navigate to OrangeHRM', ()=>{
        LoginPage.loginNegative1(randomEmail(), 'admin*');
        
    })
    it('Navigate to OrangeHRM', ()=>{
        LoginPage.loginNegative2();
        
    })
    it('Tablet.Negative.RandomEmail', () =>{
      LoginPage.loginNegative1(randomEmail(),'admin123')

    })
  })

describe('Mobile.Positive and Negative', function(){
    beforeEach(function() {
        cy.viewport(360,640)
     })
    it('Navigate to OrangeHRM', ()=>{
    LoginPage.loginPositive();
    })
    it('Navigate to OrangeHRM', ()=>{
    LoginPage.loginNegative1(randomEmail(), '456');
    })
    it('Navigate to OrangeHRM', ()=>{
    LoginPage.loginNegative2();
    })
}) 


// describe('Positive test with transferdata', function(){
//     it('Write a file', function(){
//      cy.writeFile('cypress\\fixtures\\users.json',{
//         userName:'Admin',
//         passWord:'admin123'
//     })
//     it('read a file', function(){
//         cy.readFile('users.json').should('exist').and ('contain','userName')
//         cy.fixtures('users').as('usersJson')
//         cy.fixtures('users').then((userinfo)=>{
//             expect(userinfo.username).to.eq('Admin');
//         })

        
// 	 it.only('Login test', function(){
//         cy.visit('https://opensource-demo.orangehrmlive.com/')
//         cy.fixtures('users').then((userinfo)=>
//         cy.get(nameLoc).type(userinfo.username)
//         cy.get(pasLoc).type(userinfo.password)
//         cy.get(butLoc).click()

      
//      })
//     })
// })