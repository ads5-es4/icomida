Feature: User Place Order

  Scenario: Successful order placement
	Given a user with id "1" exists
	And a product with id "101" exists
	When the user places an order for product "101"
	Then the order should be placed successfully

  Scenario: Failed order placement due to insufficient stock
	Given a user with id "1" exists
	And a product with id "101" exists with stock "0"
	When the user places an order for product "101"
	Then the user should see an error message "Product out of stock"