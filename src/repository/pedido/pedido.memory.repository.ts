import { Pedido } from "../../models/pedidos/Pedido";
import { PedidoRepository } from "./pedido.repository";

export class PedidoMemoryRepository implements PedidoRepository<Pedido> {
	private pedidos: Pedido[] = [];

	get(id: number): Pedido {
		const pedido = this.pedidos.find((pedido) => pedido.id === id);
		if (!pedido) {
			throw new Error("Pedido não encontrado.");
		}
		return pedido;
	}

	getAll(): Pedido[] {
		return this.pedidos;
	}

	add(pedido: Pedido): void {
		this.pedidos.push(pedido);
	}
}
