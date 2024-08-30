import { Pedido } from "../../models/pedidos/Pedido";
import { PedidoRepository } from "./pedido.repository";

export class PedidoMemoryRepository implements PedidoRepository<Pedido> {
	private pedidos: Pedido[] = [];

	get(id: number): Promise<Pedido> {
		const pedido = this.pedidos.find((pedido) => pedido.id === id);
		if (!pedido) {
			throw new Error("Pedido não encontrado.");
		}
		return Promise.resolve(pedido);
	}

	getAll(): Promise<Pedido[]> {
		return Promise.resolve(this.pedidos);
	}

	add(pedido: Pedido): Promise<void> {
		this.pedidos.push(pedido);
		return Promise.resolve();
	}
}
