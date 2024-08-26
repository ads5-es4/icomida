export interface PedidoRepository<Pedido> {
	get(id: number): Pedido;
	getAll(): Pedido[];
	add(item: Pedido): void;
}
