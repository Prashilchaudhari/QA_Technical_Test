/// <reference types="cypress" />

describe('Automating practice test scenarios', function () {

    it('TC_001 Login with valid credentials', function () {
        cy.visit('https://practicetestautomation.com/practice/')
        cy.get('[href="https://practicetestautomation.com/practice-test-login/"]').click();
        cy.get('input[name="username"]').type("student");
        cy.get('input[name="password"]').type("Password123");
        cy.get('[id="submit"]').click();
        cy.get('[class="post-title"]').should('have.text','Logged In Successfully')
        cy.get('[href="https://practicetestautomation.com/practice-test-login/"]').should('have.text','Log out')

    })

    it('TC_002 Login with invalid credentials', function () {
        cy.visit('https://practicetestautomation.com/practice/')
        cy.get('[href="https://practicetestautomation.com/practice-test-login/"]').click();
        cy.get('input[name="username"]').type("Student");
        cy.get('input[name="password"]').type("Password125");
        cy.get('[id="submit"]').click();
        cy.get('[id="error"]').should('have.text','Your username is invalid!')

    })
    it('TC_003 Login with invalid username', function () {
        cy.visit('https://practicetestautomation.com/practice/')
        cy.get('[href="https://practicetestautomation.com/practice-test-login/"]').click();
        cy.get('input[name="username"]').type("Student");
        cy.get('input[name="password"]').type("Password123");
        cy.get('[id="submit"]').click();
        cy.get('[id="error"]').should('have.text','Your username is invalid!')

    })

    it('TC_004 Login with invalid password', function () {
        cy.visit('https://practicetestautomation.com/practice/')
        cy.get('[href="https://practicetestautomation.com/practice-test-login/"]').click();
        cy.get('input[name="username"]').type("student");
        cy.get('input[name="password"]').type("Password125");
        cy.get('[id="submit"]').click();
        cy.get('[id="error"]').should('have.text','Your password is invalid!')

    })

    it('TC_005 Login with empty credentials', function () {
        cy.visit('https://practicetestautomation.com/practice/')
        cy.get('[href="https://practicetestautomation.com/practice-test-login/"]').click();
        cy.get('input[name="username"]').type(" ");
        cy.get('input[name="password"]').type(" ");
        cy.get('[id="submit"]').click();
        cy.get('[id="error"]').should('have.text','Your username is invalid!')

    })
})

