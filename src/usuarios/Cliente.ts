export class Cliente {
  constructor(
    public nome: string,
    public endereco: string,
    public telefone: string,
    public pontosFidelidade: number = 0
  ) {
    if (!this.verificarTelefone()) {
      throw new Error("Número de telefone inválido.");
    }
  }

  adicionarPontosFidelidade(pontos: number) {
    if (pontos <= 0) {
      throw new Error("Os pontos de fidelidade devem ser maiores que zero.");
    }
    this.pontosFidelidade += pontos;
  }

  verificarTelefone(): boolean {
    const regexTelefone = /^\d{10,11}$/; // Telefone deve conter entre 10 e 11 dígitos
    return regexTelefone.test(this.telefone);
  }
}
