import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@jest/globals";

let users = new Map<string, string>();
let loginResult: string;

Given(
	"a user with email {string} and password {string} exists",
	(email: string, password: string) => {
		users.set(email, password);
	}
);

When(
	"the user attempts to login with email {string} and password {string}",
	(email: string, password: string) => {
		const storedPassword = users.get(email);
		if (storedPassword === password) {
			loginResult = "success";
		} else {
			loginResult = "Invalid credentials";
		}
	}
);

Then("o usuário deve ser logado com sucesso", () => {
	expect(loginResult).toBe("success");
});

Then("the user should see an error message {string}", (message: string) => {
	expect(loginResult).toBe(message);
});
