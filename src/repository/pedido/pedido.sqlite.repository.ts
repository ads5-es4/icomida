import { Database } from "sqlite3";
import { getDatabaseInFile } from "../../databases/database";
import { Pedido } from "../../models/pedidos/Pedido";
import { PedidoRepository } from "./pedido.repository";

export class PedidoSQLiteRepository implements PedidoRepository<Pedido> {
	private db!: Database;

	constructor() {
		this.initializeDatabase();
	}

	private async initializeDatabase() {
		this.db = await getDatabaseInFile();
	}

	get(id: number): Promise<Pedido> {
		return new Promise((resolve, reject) => {
			this.db.get(
				"SELECT * FROM pedidos WHERE id = ?",
				[id],
				(err, row) => {
					if (err) {
						reject(err);
					} else if (!row) {
						reject(new Error("Pedido não encontrado."));
					} else {
						resolve(row as Pedido);
					}
				}
			);
		});
	}

	getAll(): Promise<Pedido[]> {
		return new Promise((resolve, reject) => {
			this.db.all("SELECT * FROM pedidos", (err, rows) => {
				if (err) {
					reject(err);
				} else {
					resolve(rows as Pedido[]);
				}
			});
		});
	}

	add(pedido: Pedido): Promise<void> {
		return new Promise((resolve, reject) => {
			this.db.run(
				"INSERT INTO pedidos (id, descricao, valor) VALUES (?, ?, ?)",
				[pedido.id, pedido.pagamentoConfirmado, pedido.total],
				(err) => {
					if (err) {
						reject(err);
					} else {
						resolve();
					}
				}
			);
		});
	}
}
