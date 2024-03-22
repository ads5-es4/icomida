import { Pedido } from "../pedidos/Pedido";
import { MetodoPagamento } from "./MetodoPagamento";

export class Pagamento {
	static efetuarPagamento(
		pedido: Pedido,
		valor: number,
		metodoPagamento: MetodoPagamento
	) {
		if (!Object.values(MetodoPagamento).includes(metodoPagamento)) {
			throw new Error("Método de pagamento inválido.");
		}

		pedido.confirmarPagamento();
		console.log(
			`Pagamento de R$${valor.toFixed(
				2
			)} confirmado para o pedido. Método: ${metodoPagamento}`
		);
	}
}
