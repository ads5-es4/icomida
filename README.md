# icomida

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# Requisitos Funcionais

1. **Cadastro de Clientes**:

    - O sistema deve permitir que novos clientes se cadastrem fornecendo um nome válido, um endereço válido e um número de telefone válido.
    - Os campos de nome, endereço e telefone são obrigatórios para o cadastro de clientes.

2. **Cadastro de Itens de Menu**:

    - Os administradores devem ser capazes de adicionar novos itens ao menu do restaurante, especificando um nome único, uma descrição e um preço válido para cada item.

3. **Realização de Pedidos**:

    - Os clientes devem poder adicionar itens ao seu pedido selecionando-os a partir do menu disponível.
    - Cada item adicionado ao pedido deve ser refletido na lista de itens do pedido.
    - O sistema deve permitir que os clientes removam itens do pedido antes de confirmá-lo.

4. **Limite de Itens por Pedido**:

    - O sistema deve impor um limite máximo de 5 itens por pedido.
    - Quando o limite máximo for atingido, os clientes não devem poder adicionar mais itens ao pedido.

5. **Verificação de Disponibilidade de Itens**:

    - Antes de confirmar o pedido, o sistema deve verificar se cada item selecionado está disponível no estoque.
    - Se um item não estiver disponível, o sistema deve notificar o cliente e impedi-lo de adicioná-lo ao pedido.

6. **Confirmação de Pagamento**:

    - Os clientes devem poder confirmar o pagamento de seus pedidos, escolhendo entre os métodos de pagamento disponíveis: cartão de crédito, cartão de débito ou dinheiro.

7. **Cálculo do Total do Pedido**:

    - O sistema deve calcular o valor total do pedido com base nos itens selecionados e seus respectivos preços.

8. **Processamento de Pedidos na Cozinha**:

    - Os pedidos confirmados devem ser automaticamente enviados à cozinha para processamento.
    - O sistema deve registrar o status do pedido como "em preparo" durante o processamento na cozinha.

9. **Entrega de Pedidos**:

    - Após o processamento na cozinha, os pedidos devem estar prontos para entrega.
    - Os pedidos entregues devem ser marcados como "entregues" no sistema.

10. **Atualização de Pontos de Fidelidade**:

    - Os clientes devem acumular pontos de fidelidade ao realizar pedidos, com base no valor total do pedido.
    - Os pontos de fidelidade acumulados devem ser atualizados automaticamente na conta do cliente.

11. **Validação de Número de Telefone**:

    - O sistema deve validar o número de telefone fornecido pelo cliente durante o cadastro para garantir sua precisão.
    - O número de telefone deve seguir um formato específico, como xx-xxxx-xxxx ou (xx) xxxx-xxxx.

12. **Notificação de Pedido Pronto**:

    - A equipe de entrega deve ser automaticamente notificada quando um pedido estiver pronto para entrega.
    - A notificação deve incluir detalhes relevantes do pedido, como número do pedido e itens incluídos.

13. **Notificação de Pedido Entregue**:

    - Os clientes devem ser automaticamente notificados quando seus pedidos forem entregues com sucesso.
    - A notificação deve incluir detalhes relevantes do pedido, como número do pedido e lista de itens.

14. **Atualização de Status de Pedido**:

    - O sistema deve atualizar o status do pedido em tempo real para refletir seu progresso.
    - Os possíveis status do pedido incluem "em preparo", "pronto para entrega" e "entregue".

15. **Registro de Pedidos Anteriores**:

    - O sistema deve manter um registro detalhado de todos os pedidos anteriores para referência e análise.
    - Os registros de pedidos anteriores devem incluir informações como número do pedido, itens incluídos, data e hora do pedido e status do pedido.

16. **Cancelamento de Pedidos**:

    - Os clientes devem poder cancelar pedidos antes que sejam processados pela cozinha.
    - O cancelamento de pedidos só deve ser possível antes do início do processamento na cozinha.

17. **Geração de Relatórios de Vendas**:

    - Os administradores devem ser capazes de gerar relatórios de vendas para análise de desempenho e planejamento estratégico.
    - Os relatórios de vendas devem incluir informações como vendas totais por período, itens mais vendidos e clientes mais frequentes.

18. **Gestão de Estoque**:

    - O sistema deve monitorar o estoque de cada item do menu e alertar os administradores quando os itens estiverem com baixo estoque.
    - Os alertas de baixo estoque devem ser enviados automaticamente aos administradores.

19. **Integração com Métodos de Pagamento**:

    - O sistema deve integrar-se a sistemas de pagamento externos para processamento seguro e eficiente das transações.
    - Os métodos de pagamento aceitos devem incluir cartão de crédito, cartão de débito e pagamento em dinheiro.

20. **Personalização de Pedidos**:
    - Os clientes devem poder personalizar seus pedidos adicionando notas especiais ou fazendo solicitações específicas.
    - As notas especiais ou solicitações devem ser incluídas no pedido e visíveis para a equipe de cozinha durante o processamento.
