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

I have also attached the manual tasks in the git repo, the testcases and answers are available in excel format under the file name "Mnaual_Testcases.xlsx"

Note: The tests will run in headless mode.
Note: I tried to add parallel execution to the tests, however I was not able to successfully do it with the current setup. We have to use an external tool like GitLab, CircleCI, etc to do the parrallelization. I have done that earlier in my career using Jenkins. Request you to please consider this.