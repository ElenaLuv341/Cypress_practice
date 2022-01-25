import { after, before } from "lodash"
import randomEmail from "random-email"
import {LoginPage} from "./LoginPage_po" 
/// <reference types = 'Cypress' />

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


describe('Positive test with transferdata', function(){
    
  it('Try transfer', function(){
      cy.fixture('users').then((userInfo) => {
        expect(userInfo.userName).to.eq('Admin');
      })
    })
    it('Login test', function(){
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.fixture('users').then(userInfo=>{
      cy.get('#txtUsername').type(userInfo.userName)
      cy.get('#txtPassword').type(userInfo.passWord)
      cy.get('#btnLogin').click()
      })
  }) 
})