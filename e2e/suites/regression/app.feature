Feature: App Component should have a header

  @active
  Scenario: should display page header message.
    Given I am on homepage
    Then I should have header message
  
  @active
  Scenario: should have Angular4 in the header message.
    Given I am on homepage
    Then I should have the text "Angular4" in header message
