/// <reference types ="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("Mathews")
        cy.get('[name="last_name"]').type("Cavalcanti")
        cy.get('[name="email"]').type("mnunestest1@yopmail.com")
        cy.get('textarea.feedback-input').type("Hey, this is a comment for the automated testing!!!")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Junior")
        cy.get('[name="last_name"]').type("Cavalcanti")
        cy.get('textarea.feedback-input').type("Hey, this is a comment for the automated testing!!!")
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    });
})
