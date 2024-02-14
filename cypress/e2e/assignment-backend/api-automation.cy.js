/// <reference types="cypress" />

describe('Automating API calls', ()=> {

    it('TC_006 Verify the status code for LIST USERS', ()=> {
        cy.request({
            url: "https://reqres.in/api/users?page=2",
            method: "GET"
        }).then(function (response) {
            expect(response.status).to.eq(200)
        })

    })

    it('TC_007 Verify the status code for SINGLE USER', ()=> {
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "GET"
        }).then(function (response) {
            expect(response.status).to.eq(200)
        })

    })

    it('TC_008 Verify the status code for SINGLE USER NOT FOUND', ()=> {
        cy.request({
            url: "https://reqres.in/api/users/23",
            method: "GET"
        }).then(function (response) {
            expect(response.status).to.eq(400)
        })

    })

    it('TC_009 Verify the status code for POST request', ()=> {
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

    it('TC_010 Verify the status code for PUT request', ()=> {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "morpheus",
                "job": "Tester"
            }
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(200)
        })
    })

    it('TC_011 Verify the status code for DELETE request', ()=> {
        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2",
        }).then(function (response) {
            expect(response.status).to.eq(204)
        })

    })


    it('TC_012 Verify the status code for REGISTER SUCCESSFUL', ()=> {
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

    it('TC_013 Verify the status code for REGISTER UNSUCCESSFUL', ()=> {
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

    it('TC_014 Verify the status code for LOGIN SUCCESSFUL', ()=> {
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

    it('TC_015 Verify the status code for LOGIN UNSUCCESSFUL', ()=> {
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

    it('TC_016 Verify the status code for DELAYED RESPONSE', ()=> {
        cy.request({
            url: "https://reqres.in/api/users?delay=3",
            method: "GET"
        }).then(function (response) {
            expect(response.status).to.eq(200)
        })

})
    
})


//
