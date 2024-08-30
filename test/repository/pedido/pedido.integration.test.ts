import {
	afterAll,
	beforeAll,
	beforeEach,
	describe,
	expect,
	it,
} from "bun:test";
import { Pool } from "pg";
import { Pedido } from "../../../src/models/pedidos/Pedido";
import { Cliente } from "../../../src/models/usuarios/Cliente";
import { PedidoPostgresRepository } from "../../../src/repository/pedido/pedido.postgres.repository";

describe("PedidoPostgresRepository Integration", () => {
	let repository: PedidoPostgresRepository;
	let pool: Pool;

	beforeAll(async () => {
		repository = new PedidoPostgresRepository();
		pool = (repository as any).pool;
		await pool.query(
			"CREATE TABLE IF NOT EXISTS pedidos (id SERIAL PRIMARY KEY, cliente_id INT, total NUMERIC, pagamento_confirmado BOOLEAN, entregue BOOLEAN)"
		);
	});

	afterAll(async () => {
		await pool.query("DROP TABLE pedidos");
		await pool.end();
	});

	beforeEach(async () => {
		await pool.query("TRUNCATE TABLE pedidos RESTART IDENTITY");
	});

	it("should add and get a pedido", async () => {
		const mockPedido: Pedido = new Pedido(
			new Cliente("1", "Cliente 1", "0")
		);

		await repository.add(mockPedido);
		const pedido = await repository.get(1);

		expect(pedido).toEqual(
			expect.objectContaining({
				cliente_id: mockPedido.cliente.id,
				total: mockPedido.total,
				pagamento_confirmado: mockPedido.pagamentoConfirmado,
				entregue: mockPedido.entregue,
			})
		);
	});

	it("should get all pedidos", async () => {
		const mockPedidos: Pedido[] = [
			new Pedido(new Cliente("1", "Cliente 1", "0")),
			new Pedido(new Cliente("2", "Cliente 2", "0")),
		];

		for (const pedido of mockPedidos) {
			await repository.add(pedido);
		}

		const pedidos = await repository.getAll();

		expect(pedidos.length).toBe(2);
		expect(pedidos).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					cliente_id: mockPedidos[0].cliente.id,
				}),
				expect.objectContaining({
					cliente_id: mockPedidos[1].cliente.id,
				}),
			])
		);
	});
});
