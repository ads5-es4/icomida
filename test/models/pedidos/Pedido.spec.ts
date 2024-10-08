import {
	afterAll,
	afterEach,
	beforeAll,
	beforeEach,
	describe,
	expect,
	it,
	test,
} from "@jest/globals";
import { ItemMenu } from "../../../src/models/pedidos/ItemMenu";
import { Pedido } from "../../../src/models/pedidos/Pedido";
import { Cliente } from "../../../src/models/usuarios/Cliente";

afterAll(() => {
	console.log(
		"fora do describe > Todos os testes de Pedido foram executados"
	);
});

afterEach(() => {
	console.log("fora do describe > Um teste de Pedido foi executado");
});

beforeAll(() => {
	console.log(
		"fora do describe > Iniciando antes de todos os testes de Pedido"
	);
});

beforeEach(() => {
	console.log("fora do describe > Iniciando antes de um teste de Pedido");
});

describe("O Pedido", () => {
	describe("describe interno a um describe", () => {
		test("deve funcionar interno ao describe", () => {
			console.log("Teste de funcionar interno ao describe");
		});
		test("deve funcionar interno ao describe 2", () => {
			console.log("Teste de funcionar interno ao describe 2");
		});
		afterAll(() => {
			console.log(
				"interno ao describe -> inception > Todos os testes de Pedido foram executados"
			);
		});

		afterEach(() => {
			console.log(
				"interno ao describe -> inception > Um teste de Pedido foi executado"
			);
		});

		beforeAll(() => {
			console.log(
				"interno ao describe -> inception > Iniciando antes de todos os testes de Pedido"
			);
		});

		beforeEach(() => {
			console.log(
				"interno ao describe -> inception > Iniciando antes de um teste de Pedido"
			);
		});
	});

	afterAll(() => {
		console.log("Todos os testes de Pedido foram executados");
	});

	afterEach(() => {
		console.log("Um teste de Pedido foi executado");
	});

	beforeAll(() => {
		console.log("Iniciando antes de todos os testes de Pedido");
	});

	beforeEach(() => {
		console.log("Iniciando antes de um teste de Pedido");
	});

	test("deve adicionar itens", () => {
		console.log("Teste de adicionar itens");

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
		//expect(pedido.itens).toHaveLength(3);
		//expect(pedido.itens[0].nome).toBe("Hamburguer");
	});
	test("deve lançar erro ao adicionar mais de 5 itens", () => {
		console.log("Teste de adicionar mais de 5 itens");

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
		console.log("Teste de confirmar pagamento sem itens");

		let pedido = new Pedido(new Cliente("nome", "email", "1234567890"));

		let pedidoSemItens = () => pedido.confirmarPagamento();

		expect(pedidoSemItens).toThrowError("Pedido sem Itens");
	});

	it("deve confirmar pagamento", () => {
		console.log("Teste de confirmar pagamento");

		let pedido = new Pedido(new Cliente("nome", "email", "1234567890"));
		let itemMenu01 = new ItemMenu("Hamburguer", "descricao", 15.0);
		pedido.adicionarItem(itemMenu01);

		pedido.confirmarPagamento();

		expect(pedido.pagamentoConfirmado).toBeTruthy();
	});

	test("deve conter um identificador", () => {
		console.log("Teste de identificador");
		let pedido = new Pedido(new Cliente("nome", "email", "1234567890"));

		expect(pedido.id).toBe(1);
	});

	test("se nao tiver identificador, deve lancar erro PedidoNaoIdentificado", () => {
		console.log("Teste de Pedido Nao Identificado");

		let pedido = new Pedido(new Cliente("nome", "email", "1234567890"));

		let pedidoNaoIdentificado = () => pedido.id;

		expect(pedidoNaoIdentificado).toThrowError("Pedido Nao Identificado");
	});
});

describe("O Pedido 2", () => {
	test("deve nao funcionando", () => {
		console.log("Teste de nao funcionando");
	});
});
