/// <reference types="cypress" />

describe('Automating API calls', function () {

    it('verify the status code for LIST USERS', function () {
        cy.request({
            url: "https://reqres.in/api/users?page=2",
            method: "GET"
        }).then(function (response) {
            expect(response.status).to.eq(200)
        })

    })

    it('verify the status code for SINGLE USER', function () {
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "GET"
        }).then(function (response) {
            expect(response.status).to.eq(200)
        })

    })

    it('verify the status code for SINGLE USER NOT FOUND', function () {
        cy.request({
            url: "https://reqres.in/api/users/23",
            method: "GET"
        }).then(function (response) {
            expect(response.status).to.eq(400)
        })

    })

    it('verify the status code for POST request', function () {
        cy.request({
            url: "https://reqres.in/api/users",
            method: "POST",
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.eq(201)
        })


    })

    it('verify the status code for PUT request', function () {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "John",
                "job": "Tester"
            }
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(200)
        })
    })

    it('verify the status code for DELETE request', function () {
        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2",
        }).then(function (response) {
            expect(response.status).to.eq(204)
        })

    })


    it('verify the status code for REGISTER SUCCESSFUL', function () {
        cy.request({
            url: "https://reqres.in/api/register",
            method: "POST",
            body: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(200)
        })


    })

    it('verify the status code for REGISTER UNSUCCESSFUL', function () {
        cy.request({
            url: "https://reqres.in/api/register",
            method: "POST",
            body: {
                "email": "sydney@fife"
            }
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(400)
        })


    })

    it('verify the status code for LOGIN SUCCESSFUL', function () {
        cy.request({
            url: "https://reqres.in/api/login",
            method: "POST",
            body: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(200)
        })


    })

    it('verify the status code for LOGIN UNSUCCESSFUL', function () {
        cy.request({
            url: "https://reqres.in/api/login",
            method: "POST",
            body: {
                "email": "peter@klaven"
            }
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(400)
        })


    })

    it('verify the status code for DELAYED RESPONSE', function () {
        cy.request({
            url: "https://reqres.in/api/users?delay=3",
            method: "GET"
        }).then(function (response) {
            expect(response.status).to.eq(200)
        })

    })
    
})

//