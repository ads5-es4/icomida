import { describe, expect, test } from "@jest/globals";
import { Cliente } from "../../src/usuarios/Cliente";

describe("Teste de Cliente", () => {
	test("deve criar cliente", () => {
		let cliente = new Cliente("Fulano", "Rua 1", "1234567890");

		expect(cliente.nome).toBe("Fulano");
	});

	test("nao deve criar cliente sem nome", () => {
		// expect(new Cliente("Rua 1", "1234567890")).toThrowError();
	});
});
