I have created a BDD Cucumber framework for the given tasks.
You can go to package.json to line number 6 ""scripts": "cypress run --browser firefox"," and change the browser. for now it accepts chrome/firefox.
Below are paths for important folders:
Feature Files: cypress/integration/test.feature
StepDefinations: cypress/integration/test/test.js
Execution Reports will be generated in 'reports/cucumber-htmlreport.html/index.html'
ObjectRepository: cypress/integration/objectRepo.json

To Run the tests:
1. Git clone the project on your machine to the desired location.
2. On the Terminal, go to the root directory of the project and execute 'npm test'.

Note: The tests will run in headless mode.