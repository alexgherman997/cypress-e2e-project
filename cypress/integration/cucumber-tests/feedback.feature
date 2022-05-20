Feature: Submit feedback form
  Feature Description

  Scenario: Submit valid feedback form
    Given I open the feedback page
    Then Feedback title is displayed
    And I enter 'name' in name input
    And I enter 'email' in email input
    And I enter 'subject' in subject input
    And I enter 'comment' in comment input
    When I click Send Message button
    Then Feedback send message containing sender 'name' should appear
    And I should see '/sendFeedback.html' in the url