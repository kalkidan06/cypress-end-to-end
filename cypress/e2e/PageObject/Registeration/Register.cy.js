describe('registerPage', () => {
    it('passes', () => {
  
      cy.visit('http://shop.icraftsoft.net:8095/')
      cy.get("input[type='submit']").eq(1).click()

      cy.get("input[type='text']")
      cy.get("input[type='email']")
      cy.get("input[type='submit']").click()

      
    })
  })