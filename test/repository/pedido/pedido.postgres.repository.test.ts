import {
	afterEach,
	beforeEach,
	describe,
	expect,
	it,
	jest,
} from "@jest/globals";
import { Pedido } from "../../../src/models/pedidos/Pedido";
import { Cliente } from "../../../src/models/usuarios/Cliente";
import { PedidoPostgresRepository } from "../../../src/repository/pedido/pedido.postgres.repository";

// Mocking the pg Pool
const mockPool = {
	query: jest.fn(),
	connect: jest.fn(),
	end: jest.fn(),
};
jest.mock("pg", () => ({
	Pool: jest.fn(() => mockPool),
}));

describe("PedidoPostgresRepository", () => {
	let repository: PedidoPostgresRepository;
	let pool: typeof mockPool;

	beforeEach(() => {
		repository = new PedidoPostgresRepository();
		pool = (repository as any).pool;
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("should get a pedido by id", async () => {
		const mockPedido: Pedido = {
			id: 1,
			cliente: new Cliente("1", "Cliente 1", "0"),
			total: 100,
			pagamentoConfirmado: true,
			entregue: false,
		};
		(pool.query as jest.Mock).mockResolvedValueOnce({ rows: [mockPedido] });

		const pedido = await repository.get(1);

		expect(pedido).toEqual(mockPedido);
		expect(pool.query).toHaveBeenCalledWith(
			"SELECT * FROM pedidos WHERE id = $1",
			[1]
		);
	});

	it("should throw an error if pedido not found", async () => {
		(pool.query as jest.Mock).mockResolvedValueOnce({ rows: [] });

		await expect(repository.get(1)).rejects.toThrow(
			"Pedido não encontrado."
		);
		expect(pool.query).toHaveBeenCalledWith(
			"SELECT * FROM pedidos WHERE id = $1",
			[1]
		);
	});

	it("should get all pedidos", async () => {
		const mockPedidos: Pedido[] = [
			{
				id: 1,
				cliente: new Cliente("1", "Cliente 1", "0"),
				total: 100,
				pagamentoConfirmado: true,
				entregue: false,
			},
			{
				id: 2,
				cliente: new Cliente("2", "Cliente 2", "0"),
				total: 200,
				pagamentoConfirmado: false,
				entregue: true,
			},
		];
		(pool.query as jest.Mock).mockResolvedValueOnce({ rows: mockPedidos });

		const pedidos = await repository.getAll();

		expect(pedidos).toEqual(mockPedidos);
		expect(pool.query).toHaveBeenCalledWith("SELECT * FROM pedidos");
	});

	it("should add a new pedido", async () => {
		const mockPedido: Pedido = {
			id: 1,
			cliente: new Cliente("1", "Cliente 1", "0"),
			total: 100,
			pagamentoConfirmado: true,
			entregue: false,
		};
		(pool.query as jest.Mock).mockResolvedValueOnce({ rowCount: 1 });

		await repository.add(mockPedido);

		expect(pool.query).toHaveBeenCalledWith(
			"INSERT INTO pedidos (cliente_id, total, pagamento_confirmado, entregue) VALUES ($1, $2, $3, $4) RETURNING id",
			[
				mockPedido.cliente.id,
				mockPedido.total,
				mockPedido.pagamentoConfirmado,
				mockPedido.entregue,
			]
		);
	});

	it("should throw an error if add fails", async () => {
		const mockPedido: Pedido = {
			id: 1,
			cliente: new Cliente("1", "Cliente 1", "0"),
			total: 100,
			pagamentoConfirmado: true,
			entregue: false,
		};
		(pool.query as jest.Mock).mockResolvedValueOnce({ rowCount: 0 });

		await expect(repository.add(mockPedido)).rejects.toThrow(
			"Erro ao inserir pedido."
		);
		expect(pool.query).toHaveBeenCalledWith(
			"INSERT INTO pedidos (cliente_id, total, pagamento_confirmado, entregue) VALUES ($1, $2, $3, $4) RETURNING id",
			[
				mockPedido.cliente.id,
				mockPedido.total,
				mockPedido.pagamentoConfirmado,
				mockPedido.entregue,
			]
		);
	});
});
