import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@jest/globals";

let orders = new Map<string, boolean>();
let deliveryResult: string;

Given("an order with id {string} exists", (orderId: string) => {
	orders.set(orderId, true);
});

When(
	"the restaurant calls for delivery for order {string}",
	(orderId: string) => {
		if (orders.has(orderId)) {
			deliveryResult = "Delivery scheduled successfully";
		} else {
			deliveryResult = "Order not found";
		}
	}
);

Then("the delivery should be scheduled successfully", () => {
	expect(deliveryResult).toBe("Delivery scheduled successfully");
});

Then(
	"the restaurant should see an error message {string}",
	(message: string) => {
		expect(deliveryResult).toBe(message);
	}
);
