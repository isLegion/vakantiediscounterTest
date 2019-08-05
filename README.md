# vakantiediscounterTest

## Was used

JavaScript + [Cypress](https://www.cypress.io/)

Test is located in */vakantiediscounterTest/cypress/integration/searchVacation_spec.js*

## For run test

(if you don't have a Node.js on your machine please use *npm install npm@latest -g* before)

> npm i 

### headless mode: 
> cypress run

OR

### with open cypress tool:
> cypress open

### Project contains:
1. Four files with pages : mainPage.js, resultPage.js, searchPage.js, travelDetailPage.js
2. Every page contains methods with selectors on current page
3. Folder 'data' which contains class contact.js and traveler.js (objects with customers information) 
4. List of existing options in optionData.js

