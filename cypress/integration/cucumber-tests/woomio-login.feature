Feature: Login woomio content creator

    Feature Description

    Scenario: Valid login
      Given Open login page for content creators
      When Type 'alex' in email field
      And Type 'Password' in password field
      And Click continue button
      Then Url should be change