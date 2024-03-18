import { Pedido } from "../pedidos/Pedido";

export class Entregador {
	pedidosParaEntregar: Pedido[] = [];

	receberPedidoPronto(pedido: Pedido) {
		this.pedidosParaEntregar.push(pedido);
		console.log("Pedido pronto para entrega.");
		this.entregarPedido(pedido);
	}

	entregarPedido(pedido: Pedido) {
		const index = this.pedidosParaEntregar.indexOf(pedido);
		if (index !== -1) {
			this.pedidosParaEntregar.splice(index, 1);
			console.log("Pedido entregue ao cliente.");
			pedido.marcarComoEntregue();
		}
	}
}
