import { describe, expect, test } from "@jest/globals";
import { Cliente } from "../../../src/models/usuarios/Cliente";

describe("O Cliente", () => {
	test("deve ser criado, quando valores corretos forem passados", () => {
		let cliente = new Cliente("Fulano", "Rua 1", "1234567890");

		expect(cliente.nome).toBe("Fulano");
	});

	test("nao deve ser criado com nome invalido", () => {
		let cliente = () => {
			new Cliente("", "Rua 1", "1234567890");
		};

		expect(cliente).toThrowError("Não foi informado nome");
	});

	test("nao deve ser criado com endereco invalido", () => {
		let cliente = () => {
			new Cliente("nome do cliente", "", "1234567890");
		};

		expect(cliente).toThrowError("Não foi informado endereco");
	});

	test("nao deve ser criado com telefone invalido", () => {
		let cliente = () => {
			new Cliente("nome do cliente", "Rua 1", "");
		};

		expect(cliente).toThrowError("Número de telefone inválido.");
	});

	test("deve adicionar pontos de fidelidade", () => {
		let cliente = new Cliente("Fulano", "Rua 1", "1234567890");

		cliente.adicionarPontosFidelidade(10);

		expect(cliente.pontosFidelidade).toBe(10);
	});

	test("deve adicionar sequencialmente pontos de fidelidade", () => {
		let cliente = new Cliente("Fulano", "Rua 1", "1234567890");

		cliente.adicionarPontosFidelidade(10);
		cliente.adicionarPontosFidelidade(30);

		expect(cliente.pontosFidelidade).toBe(40);
	});

	test("não deve adicionar pontos de fidelidade negativos", () => {
		let cliente = new Cliente("Fulano", "Rua 1", "1234567890");

		let adicionarPontosFidelidadeNegativos = () => {
			cliente.adicionarPontosFidelidade(-10);
		};

		expect(adicionarPontosFidelidadeNegativos).toThrowError(
			"Os pontos de fidelidade devem ser maiores que zero."
		);
	});
});
