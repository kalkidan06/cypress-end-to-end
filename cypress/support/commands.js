// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//adding the product???
Cypress.Commands.add('selectProduct',(productName)=>{
        cy.get(":nth-child(1) > :nth-child(1) > .thumbnail > .caption > :nth-child(2)")
        .each(($el, i, $list)=>{
            
            if($el.text().includes(productName)){
                cy.get(':nth-child(1) > :nth-child(2) > .thumbnail > .btn-ground > form > [type="submit"]').eq(i).click()
            }
        })

})

// Cypress.Commands.add('selectProduct',(productName)=>{
//   cy.get('table>tbody> tr >td >div').each(($el,$i,$list)=>{
//         let txt = $el.text()
//         if(txt.includes(productName)){
//             cy.get('table >tbody >tr >td >div').eq(0)
//             //cy.get('.odd > :nth-child(1) > .thumbnail > .btn-ground > form > [type="submit"]')
//            cy.get("button[type='submit']").eq(0).click()
//         }
//   })
// })
//cy.get('.odd > :nth-child(3) > .thumbnail > .embed-responsive > .embed-responsive-item')