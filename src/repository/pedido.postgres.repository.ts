import { Pool } from "pg"; // Import the 'Pool' class from the 'pg' module
import { Pedido } from "../models/pedidos/Pedido";
import { PedidoRepository } from "./pedido.repository";

export class PedidoPostgresRepository implements PedidoRepository<Pedido> {
	private pool: Pool;

	constructor() {
		this.pool = new Pool({
			database: "restaurante",
			user: "postgres",
			host: "localhost",
			password: "postgres",
			port: 5432,
		});
	}
	async get(id: number): Promise<Pedido> {
		const result = await this.pool.query(
			"SELECT * FROM pedidos WHERE id = $1",
			[id]
		);

		if (result.rows.length === 0) {
			throw new Error("Pedido não encontrado.");
		}

		return result.rows[0] as Pedido;
	}
	async getAll(): Promise<Pedido[]> {
		const result = await this.pool.query("SELECT * FROM pedidos");

		return result.rows as Pedido[];
	}
	async add(item: Pedido): Promise<Pedido> {
		const result = await this.pool.query(
			"INSERT INTO pedidos (cliente_id, total, pagamento_confirmado, entregue) VALUES ($1, $2, $3, $4)",
			[
				item.cliente.id,
				item.total,
				item.pagamentoConfirmado,
				item.entregue,
			]
		);

		if (result.rowCount === 0) {
			throw new Error("Erro ao inserir pedido.");
		}

		item.id = result.rows[0].id;
		return item;
	}
}
