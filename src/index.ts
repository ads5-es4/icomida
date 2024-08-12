import { PedidoController } from "./controllers/pedido.controller";
import { PedidoMemoryRepository } from "./repository/pedido.memory.repository";
import { PedidoPostgresRepository } from "./repository/pedido.postgres.repository";

const controllerSystemUnderTest = new PedidoController(
	new PedidoMemoryRepository()
);

const controller = new PedidoController(new PedidoPostgresRepository());
