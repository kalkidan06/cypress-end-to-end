//import { eq } from "cypress/types/lodash"
import Register from "./Registeration/register"
import login from "./Login/Login"
import Product from "./Product/Product"
import Cart from "./Cart/cart"
describe('landingPage', () => {
    let dt
  before(()=>{
    cy.fixture("icraftshopdata").then(function(data){
      dt = data
    })
  })
    it('registeration', () => {
  
      cy.visit('http://shop.icraftsoft.net:8095/')
    
      const reg = new Register()

      reg.registerbtn().eq(1).should('have.attr','value','Register')
      .and('have.attr','type','submit').click()
      reg.username().type(dt.name)
      .should('have.value',dt.name)
      //reg.email().type(dt.email)
      .should('have.value',dt.email)
      reg.submitbtn().should('have.attr','value','Register')
      .and('have.attr','type','submit').click()

      cy.wait(3000)


      
      
   
    })
    it('login',()=>{

      cy.visit('http://shop.icraftsoft.net:8095/')

      const log = new login()
      const pr = new Product()
      const car = new Cart()



      log.login().type(dt.loginId)
      log.loginbtn().eq(0).click()
      

      cy.wait(2000)
      //cy.get('table>tbody> tr >td').contains('LENOVO').select
      cy.get("input[type='search']").type('Dell')
     // cy.selectProduct("FZA")
      cy.selectProduct(dt.productName[0])

      
       // pr.product().type(dt.productName)   erorr????
       // for(let i= 0; i < dt.productName.length; i++){
          //cy.selectProduct(dt.productName[i])
   //   }
    car.cart()        

    })
  })