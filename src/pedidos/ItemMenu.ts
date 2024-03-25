export class ItemMenu {
  constructor(
    public nome: string,
    public descricao: string,
    public preco: number
  ) {
    if (!this.verificarPermissao()) {
      throw new Error("Apenas administradores podem cadastrar itens no menu.");
    }

    if (!this.verificarDescricao()) {
      throw new Error("A descrição do item não pode ser vazia.");
    }

    if (!this.verificarPreco()) {
      throw new Error("O preço do item deve ser um número maior que zero.");
    }
  }

  verificarPermissao(): boolean {
    return true;
  }

  verificarDescricao(): boolean {
    return this.descricao.length > 0;
  }

  verificarPreco(): boolean {
    return this.preco > 0;
  }
}
