## Cypress Test Project

This project contains Cypress test cases for testing the login functionality of a web application.

## Prerequisites

Before running the tests, ensure that you have the following installed:

- Node.js
- npm (Node Package Manager)
- cypress.io
  
Use following commands to install the above prerequisities:
		npm init -y
		npm install cypress

## Setup

Clone the repository:

   git clone https://github.com/Prashilchaudhari/QA_Technical_Test

Install dependencies:
   npm install 

Running Tests:
	 To run the Cypress tests in headless mode, use the following command: npx cypress run
	 To run the Cypress tests in headed mode, use the following command: npx cypress open


## Test Scenarios:

1.Login Positive Scenarios
Successful Login: Verify that a user can successfully log in with valid credentials.

2.Login Negative Scenarios:

a)Invalid Username and Password: Verify that an error message is displayed when entering an invalid username and password.

b)Invalid Username: Verify that an error message is displayed when entering an invalid username.

c)Invalid Password: Verify that an error message is displayed when entering an invalid password.

d)Empty Fields: Verify that an error message is displayed when attempting to log in with empty username and password fields.


##Folder Structure:
cypress/e2e: Contains the test files organized by feature or functionality.
cypress\e2e\assignment-frontend\loginPageTest.cy.js
cypress\e2e\assignment-backend\api-automation.cy.js
