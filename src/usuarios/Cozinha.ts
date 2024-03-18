import { Pedido } from "../pedidos/Pedido";
import { Entregador } from "./Entregador";

export class Cozinha {
	pedidosPendentes: Pedido[] = [];
	entregador: Entregador;

	constructor(entregador: Entregador) {
		this.entregador = entregador;
	}

	receberPedido(pedido: Pedido) {
		this.pedidosPendentes.push(pedido);
		pedido.confirmarPagamento();
		console.log("Pedido recebido e pagamento confirmado.");
		setTimeout(() => {
			this.prepararPedido(pedido);
		}, 1000);
	}

	prepararPedido(pedido: Pedido) {
		const index = this.pedidosPendentes.indexOf(pedido);
		if (index !== -1) {
			this.pedidosPendentes.splice(index, 1);
			console.log("Pedido preparado e pronto para entrega.");
			this.entregador.receberPedidoPronto(pedido);
		}
	}
}
