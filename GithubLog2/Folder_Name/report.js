$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GithubLoginValid.feature");
formatter.feature({
  "line": 1,
  "name": "GitHub Login",
  "description": "",
  "id": "github-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Enter Github Home Page",
  "description": "",
  "id": "github-login;enter-github-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open github",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters invalid username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should get the message \u0027Incorrect username or password\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters invalid password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should get the message \u0027Incorrect username or password\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User enters valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be Successfully LoggedIn",
  "keyword": "Then "
});
formatter.match({
  "location": "GithubLoginStepDefinition.open_github()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_enter_invalid_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_should_get_the_message_Incorrect_username_or_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_enter_invalid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_should_get_the_message_Incorrect_username_or_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_enter_valid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_should_be_successfully_logged_in()"
});
formatter.result({
  "status": "skipped"
});
});