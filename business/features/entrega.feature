Feature: Restaurant Call Delivery

  Scenario: Successful delivery call
	Given an order with id "1001" exists
	When the restaurant calls for delivery for order "1001"
	Then the delivery should be scheduled successfully

  Scenario: Failed delivery call due to invalid order
	Given no order with id "9999" exists
	When the restaurant calls for delivery for order "9999"
	Then the restaurant should see an error message "Order not found"