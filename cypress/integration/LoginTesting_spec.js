import { after, before } from "lodash"
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
    LoginPage.loginNegative1('Dolly', 'admin*');
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
        LoginPage.loginNegative1('Dolly', 'admin*');
        
    })
    it('Navigate to OrangeHRM', ()=>{
        LoginPage.loginNegative2();
        
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
    LoginPage.loginNegative1('smith', '456');
    })
    it('Navigate to OrangeHRM', ()=>{
    LoginPage.loginNegative2();
    })
})