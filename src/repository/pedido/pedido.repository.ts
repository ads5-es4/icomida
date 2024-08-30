import { Repository } from "../repository";

export interface PedidoRepository<Pedido> extends Repository<Pedido> {
	get(id: number): Promise<Pedido>;
	getAll(): Promise<Pedido[]>;
	add(item: Pedido): Promise<void>;
}
