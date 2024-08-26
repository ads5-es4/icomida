import { Database } from "sqlite3";
import { getDatabaseInFile } from "../../databases/database";
import { Pedido } from "../../models/pedidos/Pedido";
import { PedidoRepository } from "./pedido.repository";

export class PedidoSQLiteRepository implements PedidoRepository<Pedido> {
	private db: Database;

	constructor() {
		this.db = getDatabaseInFile();
	}

	async get(id: number): Promise<Pedido> {
		const pedido = await this.db.get<Pedido>(
			"SELECT * FROM pedidos WHERE id = ?",
			id
		);
		if (!pedido) {
			throw new Error("Pedido não encontrado.");
		}
		return pedido;
	}

	async getAll(): Promise<Pedido[]> {
		const pedidos = await this.db.all<Pedido[]>("SELECT * FROM pedidos");
		return pedidos;
	}

	async add(pedido: Pedido): Promise<void> {
		await this.db.run(
			"INSERT INTO pedidos (id, descricao, valor) VALUES (?, ?, ?)",
			pedido.id,
			pedido.descricao,
			pedido.valor
		);
	}
}
