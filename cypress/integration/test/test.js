import { expect } from "chai";
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import { fill } from "lodash";
const locators = require('../objectRepo.json');
var gAuthorName;
    
//test steps 
Given('User navigates to url', () => {
    cy.visit(Cypress.env('URL'));
})

When('User clicks on {string} button', buttonName => {
    cy.xpath(locators[buttonName], {timeout: 15000}).click();
    //cy.wait(10000);
})

When('User enters {string} as {string}', (fieldName, value) => {
    if(value.includes(";data;time;stamp"))
    {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
        var dateTime = date+' '+time;
        value = value.replace(";data;time;stamp", dateTime)
        if(fieldName.includes("Username"))
        {
            gAuthorName = value;   
        }
    }
    cy.xpath(locators[fieldName]).type(value);
    cy.xpath(locators[fieldName]).tab();
})

When('User clicks on {string} in {string}', (actionName, listName) => {
    var xpath = locators[actionName].replace("<listName>", listName);
    cy.xpath(xpath).click();

})

When('User checks if {string} exists {string} page', (fieldName, onOrNot) =>{
    if(onOrNot.includes("on"))
    {
        cy.xpath(locators[fieldName]).should('be.visible')
    }
    else if(onOrNot.includes("not"))
    {
        cy.xpath(locators[fieldName]).should('have.length', 0);
    }
})

Then('User checks if {string} is there with the text as {string}', (fieldName, value) => {
    if(fieldName.includes("Comment Author"))
    {
        value = gAuthorName;
    }
    cy.xpath(locators[fieldName]).invoke('text').then((actualText) => {
        expect(value, actualText, "Value in field name: " + fieldName + " misMatch. Actual text: " + actualText + " expected text: " + value);
    })
})

When('User reloads the page', () => {
    cy.reload();
    
})