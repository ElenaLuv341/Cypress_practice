import { after, before } from "lodash"
import randomEmail from "random-email"
import {LoginPage} from "./LoginPage_po" 
/// <reference types = 'Cypress' />

describe('Desctop.Positive and Negative', function()
  {  
    beforeEach(function() {
    cy.viewport(1920,1080)
 })
    it.only('Navigate to OrangeHRM for desctop.Positive', ()=>{
    LoginPage.loginPositive();
    })
    it('Navigate to OrangeHRM for desctop.Negative1', ()=>{
    LoginPage.loginNegative(randomEmail(), 'admin123','Invalid credentials');
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
        LoginPage.loginNegative(randomEmail(), 'admin123','Invalid credentials');
        
    })
    it('Tablet.Negative.RandomEmail', () =>{
      LoginPage.loginNegative2()

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
    LoginPage.loginNegative(randomEmail(), '456', 'Invalid credentials');
    })
    it('Navigate to OrangeHRM', ()=>{
    LoginPage.loginNegative2();
    })
}) 


describe('Positive test with transferdata', function(){
    it('Login test', function(){
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.fixture('users').then(userInfo=>{
      cy.get('#txtUsername').type(userInfo.userName)
      cy.get('#txtPassword').type(userInfo.passWord)
      cy.get('#btnLogin').click()
      })
  }) 
})