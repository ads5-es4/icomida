import { describe, expect, test } from "@jest/globals";

function sum(a: any, b: any) {
	return a + b;
}

describe("descricao geral", () => {
	test("meu primeiro test legal", () => {
		// configuração
		let var1 = 2;
		let var2 = 4;
		let resultadoEsparado = 6;

		// execução
		let soma = sum(var1, var2);

		// asserção
		expect(soma).toBe(resultadoEsparado);
	});

	test("meu segundo test legal", () => {
		expect(4 / 2).toBe(2);
	});
});

//describe
//test
//expect
//assert
