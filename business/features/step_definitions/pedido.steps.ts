import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@jest/globals";
import { ItemMenu } from "../../../src/models/pedidos/ItemMenu";
import { Pedido } from "../../../src/models/pedidos/Pedido";
import { Cliente } from "../../../src/models/usuarios/Cliente";

let pedido: Pedido;
let orderResult: string;

Given("a user with id {string} exists", (userId: string) => {
	const cliente = new Cliente(userId, "Cliente Teste", "0");
	pedido = new Pedido(cliente);
});

Given("a product with id {string} exists", (productId: string) => {
	const item = new ItemMenu(productId, "Produto Teste", 10);
	pedido.adicionarItem(item);
});

Given(
	"a product with id {string} exists with stock {int}",
	(productId: string, stock: number) => {
		const item = new ItemMenu(productId, "Produto Teste", 10);
		if (stock > 0) {
			pedido.adicionarItem(item);
		}
	}
);

When("the user places an order for product {string}", (productId: string) => {
	try {
		const item = new ItemMenu(productId, "Produto Teste", 10);
		pedido.adicionarItem(item);
		orderResult = "Order placed successfully";
	} catch (error: any) {
		orderResult = error.message;
	}
});

Then("the order should be placed successfully", () => {
	expect(orderResult).toBe("Order placed successfully");
});

Then("the user should see an error message {string}", (message: string) => {
	expect(orderResult).toBe(message);
});
