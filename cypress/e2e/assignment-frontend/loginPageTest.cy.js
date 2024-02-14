/// <reference types="cypress" />

describe('Automating practice Test Login Page scenarios', ()=> {
    beforeEach(()=>{
        cy.visit('https://practicetestautomation.com/practice/');
        cy.get('[href="https://practicetestautomation.com/practice-test-login/"]').click();
    })
    
    it('TC_001 Login with VALID CREDENTIALS', ()=> {
        cy.get('input[name="username"]').type("student");
        cy.get('input[name="password"]').type("Password123");
        cy.get('[id="submit"]').click();
        cy.url().should('include','practicetestautomation.com/logged-in-successfully/');
        cy.get('[class="post-title"]').should('have.text','Logged In Successfully');
        cy.get('[href="https://practicetestautomation.com/practice-test-login/"]').should('have.text','Log out');

    })

    it('TC_002 Login with INVALID CREDENTIALS', ()=> {
        cy.get('input[name="username"]').type("MyStudent");
        cy.get('input[name="password"]').type("Password@125");
        cy.get('[id="submit"]').click();
        cy.get('[id="error"]').should('exist');
        cy.get('[id="error"]').should('have.text','Your username is invalid!')

    })
    it('TC_003 Login with INVALID USERNAME and valid password', ()=> {
        cy.get('input[name="username"]').type("MyStudent");
        cy.get('input[name="password"]').type("Password123");
        cy.get('[id="submit"]').click();
        cy.get('[id="error"]').should('exist');
        cy.get('[id="error"]').should('have.text','Your username is invalid!')

    })

    it('TC_004 Login with valid username and INVALID PASSWORD', ()=> {
        cy.get('input[name="username"]').type("student");
        cy.get('input[name="password"]').type("Password@125");
        cy.get('[id="submit"]').click();
        cy.get('[id="error"]').should('exist');
        cy.get('[id="error"]').should('have.text','Your password is invalid!')

    })

    it('TC_005 Login with EMPTY CREDENTIALS', ()=> {
        cy.get('input[name="username"]').type(" ");
        cy.get('input[name="password"]').type(" ");
        cy.get('[id="submit"]').click();
        cy.get('[id="error"]').should('exist');
        cy.get('[id="error"]').should('have.text','Your username is invalid!')

    })
})


