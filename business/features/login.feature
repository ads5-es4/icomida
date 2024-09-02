Feature: User Login

  Scenario: Successful login
	Given a user with email "user@example.com" and password "password123" exists
	When the user attempts to login with email "user@example.com" and password "password123"
	Then the user should be logged in successfully

  Scenario: Failed login
	Given a user with email "user@example.com" and password "password123" exists
	When the user attempts to login with email "user@example.com" and password "wrongpassword"
	Then the user should see an error message "Invalid credentials"