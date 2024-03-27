import { describe, expect, it, test } from "@jest/globals";
import { ItemMenu } from "../../../src/models/pedidos/ItemMenu";
import { Pedido } from "../../../src/models/pedidos/Pedido";
import { Cliente } from "../../../src/models/usuarios/Cliente";

describe("O Pedido", () => {
	test("deve adicionar itens", () => {
		//configuração
		let pedido = new Pedido(new Cliente("nome", "email", "1234567890"));
		let itemMenu01 = new ItemMenu("Hamburguer", "descricao", 15.0);
		let itemMenu02 = new ItemMenu("Refrigerante", "descricao", 5.0);
		let itemMenu03 = new ItemMenu("Batata Frita", "descricao", 10.0);

		//execução
		pedido.adicionarItem(itemMenu01);
		pedido.adicionarItem(itemMenu02);
		pedido.adicionarItem(itemMenu03);

		//verificação
		expect(pedido.itens).toHaveLength(3);
		expect(pedido.itens[0].nome).toBe("Hamburguer");
	});
	test("deve lançar erro ao adicionar mais de 5 itens", () => {
		let pedido = new Pedido(new Cliente("nome", "email", "1234567890"));
		let itemMenu01 = new ItemMenu("Hamburguer", "descricao", 15.0);
		let itemMenu02 = new ItemMenu("Refrigerante", "descricao", 5.0);
		let itemMenu03 = new ItemMenu("Batata Frita", "descricao", 10.0);

		pedido.adicionarItem(itemMenu01);
		pedido.adicionarItem(itemMenu02);
		pedido.adicionarItem(itemMenu03);

		pedido.adicionarItem(itemMenu01);
		pedido.adicionarItem(itemMenu01);

		let adicionarItem06 = () => pedido.adicionarItem(itemMenu01);

		expect(adicionarItem06).toThrowError(
			"Limite máximo de itens por pedido alcançado."
		);
	});

	test("nao deve confirmar pagamento sem itens", () => {
		let pedido = new Pedido(new Cliente("nome", "email", "1234567890"));

		let pedidoSemItens = () => pedido.confirmarPagamento();

		expect(pedidoSemItens).toThrowError("Pedido sem Itens");
	});

	it("deve confirmar pagamento", () => {
		let pedido = new Pedido(new Cliente("nome", "email", "1234567890"));
		let itemMenu01 = new ItemMenu("Hamburguer", "descricao", 15.0);
		pedido.adicionarItem(itemMenu01);

		pedido.confirmarPagamento();

		expect(pedido.pagamentoConfirmado).toBeTruthy();
	});
});
