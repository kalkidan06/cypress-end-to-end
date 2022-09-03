
/// <reference types ="Cypress"/>

class Register{

   registerbtn(){
    return cy.get("input[type='submit']")
   }
  username(){
    return cy.get("input[type='text']")
  }

  email(){
    return cy.get("input[type='email']")
  }
 submitbtn(){
    return cy.get("input[type='submit']")
 }
}

export default Register;