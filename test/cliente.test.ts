import { describe, expect, test } from "@jest/globals";
import { Cliente } from "../src/usuarios/Cliente";

describe("Adicionar um novo cliente", () => {
  test("Deve adicionar um novo cliente", () => {
    const cliente = new Cliente("Houston", "Parnaíba, Piauí", "86987654321");

    expect(cliente).toEqual({
      nome: "Houston",
      endereco: "Parnaíba, Piauí",
      telefone: "86987654321",
      pontosFidelidade: 0,
    });
  });

  test("Verificar se o número de telefone é válido", () => {
    expect(() => {
      new Cliente("Houston", "Parnaíba, Piauí", "123456789");
    }).toThrowError("Número de telefone inválido.");
  });

  test("Adicionar pontos de fidelidade", () => {
    const cliente = new Cliente("Houston", "Parnaíba, Piauí", "86987654321");

    cliente.adicionarPontosFidelidade(10);
    cliente.adicionarPontosFidelidade(20);
    expect(cliente.pontosFidelidade).toBe(30);
  });
});
