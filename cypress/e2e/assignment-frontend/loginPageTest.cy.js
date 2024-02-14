/// <reference types="cypress" />

describe('Automating practice Test Login Page scenarios', ()=> {

    it('TC_001 Login with valid credentials', ()=> {
        cy.visit('https://practicetestautomation.com/practice/')
        cy.get('[href="https://practicetestautomation.com/practice-test-login/"]').click();
        cy.get('input[name="username"]').type("student");
        cy.get('input[name="password"]').type("Password123");
        cy.get('[id="submit"]').click();
        cy.url().should('include','practicetestautomation.com/logged-in-successfully/');
        cy.get('[class="post-title"]').should('have.text','Logged In Successfully');
        cy.get('[href="https://practicetestautomation.com/practice-test-login/"]').should('have.text','Log out');

    })

    it('TC_002 Login with INVALID CREDENTIALS', ()=> {
        cy.visit('https://practicetestautomation.com/practice/')
        cy.get('[href="https://practicetestautomation.com/practice-test-login/"]').click();
        cy.get('input[name="username"]').type("MyStudent");
        cy.get('input[name="password"]').type("Password@125");
        cy.get('[id="submit"]').click();
        cy.get('[id="error"]').should('exist');
        cy.get('[id="error"]').should('have.text','Your username is invalid!')

    })
    it('TC_003 Login with INVALID USERNAME', ()=> {
        cy.visit('https://practicetestautomation.com/practice/')
        cy.get('[href="https://practicetestautomation.com/practice-test-login/"]').click();
        cy.get('input[name="username"]').type("MyStudent");
        cy.get('input[name="password"]').type("Password123");
        cy.get('[id="submit"]').click();
        cy.get('[id="error"]').should('exist');
        cy.get('[id="error"]').should('have.text','Your username is invalid!')

    })

    it('TC_004 Login with INVALID PASSWORD', ()=> {
        cy.visit('https://practicetestautomation.com/practice/')
        cy.get('[href="https://practicetestautomation.com/practice-test-login/"]').click();
        cy.get('input[name="username"]').type("student");
        cy.get('input[name="password"]').type("Password@125");
        cy.get('[id="submit"]').click();
        cy.get('[id="error"]').should('exist');
        cy.get('[id="error"]').should('have.text','Your password is invalid!')

    })

    it('TC_005 Login with EMPTY CREDENTIALS', ()=> {
        cy.visit('https://practicetestautomation.com/practice/')
        cy.get('[href="https://practicetestautomation.com/practice-test-login/"]').click();
        cy.get('input[name="username"]').type(" ");
        cy.get('input[name="password"]').type(" ");
        cy.get('[id="submit"]').click();
        cy.get('[id="error"]').should('exist');
        cy.get('[id="error"]').should('have.text','Your username is invalid!')

    })
})

