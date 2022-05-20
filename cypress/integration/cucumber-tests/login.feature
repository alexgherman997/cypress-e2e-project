Feature: Login App
  As a valid user 
  I can log in into Application
  As a invalid user
  I can't log in into application

#it semas like does not recognize the cucumber words, maybe plugin problems
#those cucumber tests run as expted
  Scenario: Valid login
    Given I open login page
    When I submit login
    Then I should see homepage

  Scenario: Invalid login using LoginPage class POM
    Given Open login page
    When Submit login with 'invalid user' as username and 'invalid pass' as password
    Then Should see error message display

  Scenario: Valid login using LoginPage class POM
    Given Open login page
    When Submit login with 'username' as username and 'password' as password
    Then I should see homepage

  @focus
  Scenario: Valid login using LoginPage class POM with more steps
    Given Open login page
    And I wait 5 seconds
    And I should see 'Zero - Log in' in the title
    And I should see 'login' in the url
    When Type username in username input
    And Type password in password input
    And Click sign in button
    Then I should see homepage

  @focus
  Scenario: Invalid login using LoginPage class POM with more steps
    Given Open login page
    When Type invalid-user in username input
    And Type invalid-pass in password input
    And Click sign in button
    Then Should see error message display