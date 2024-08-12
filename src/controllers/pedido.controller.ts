import { ItemMenu } from "../models/pedidos/ItemMenu";
import { Pedido } from "../models/pedidos/Pedido";
import { PedidoRepository } from "../repository/pedido.repository";

export class PedidoController {
	constructor(public repository: PedidoRepository<Pedido>) {}

	getPedido(id: number): Pedido {
		return this.repository.get(id);
	}

	getPedidos(): Pedido[] {
		return this.repository.getAll();
	}

	adicionarPedido(pedido: Pedido): void {
		this.repository.add(pedido);
	}

	confirmarPagamento(id: number): void {
		const pedido = this.repository.get(id);
		pedido.confirmarPagamento();
	}

	marcarComoEntregue(id: number): void {
		const pedido = this.repository.get(id);
		pedido.marcarComoEntregue();
	}

	adicionarItem(id: number, item: ItemMenu): void {
		const pedido = this.repository.get(id);
		pedido.adicionarItem(item);
	}
}
