import { describe, expect, test } from "@jest/globals";
import { ItemMenu } from "../src/pedidos/ItemMenu";

describe("Testes de Item do Menu", () => {
  test("Deve criar um item do menu", () => {
    const item = new ItemMenu(
      "Pizza de Calabresa",
      "Calabresa com borda recheada",
      40
    );

    expect(item.nome).toBe("Pizza de Calabresa");
    expect(item.descricao).toBe("Calabresa com borda recheada");
    expect(item.preco).toBe(40);
  });

  test("Deve lançar um erro se a descrição for vazia", () => {
    expect(() => {
      new ItemMenu("Pizza de Calabresa", "", 40);
    }).toThrowError("A descrição do item não pode ser vazia.");
  });

  test("Deve lançar um erro se o preço for negativo", () => {
    expect(() => {
      new ItemMenu("Pizza de Calabresa", "Calabresa com borda recheada", -40);
    }).toThrowError("O preço do item deve ser um número maior que zero.");
  });
});
