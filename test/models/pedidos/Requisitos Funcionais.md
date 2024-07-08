### Requisitos Funcionais

1. **Cadastro de Clientes:**

    - **Nome:** Implementar cadastro de clientes
    - **Descrição:** Desenvolver a funcionalidade que permitirá aos novos clientes se cadastrarem fornecendo um nome válido, um endereço válido e um número de telefone válido. Os campos de nome, endereço e telefone são obrigatórios para o cadastro de clientes.
    - **Tags:** Cadastro, Clientes, Validação
    - **Milestone:** Setup Inicial

2. **Cadastro de Itens de Menu:**

    - **Nome:** Implementar cadastro de itens de menu
    - **Descrição:** Desenvolver a funcionalidade que permitirá aos administradores adicionar novos itens ao menu do restaurante, especificando um nome único, uma descrição e um preço válido para cada item.
    - **Tags:** Cadastro, Menu
    - **Milestone:** Configuração Inicial

3. **Realização de Pedidos:**

    - **Nome:** Implementar realização de pedidos
    - **Descrição:** Desenvolver a funcionalidade que permitirá aos clientes adicionar itens ao seu pedido selecionando-os a partir do menu disponível. Cada item adicionado ao pedido deve ser refletido na lista de itens do pedido. Os clientes devem poder remover itens do pedido antes de confirmá-lo.
    - **Tags:** Pedidos, Cliente
    - **Milestone:** Processo de Pedido

4. **Limite de Itens por Pedido:**

    - **Nome:** Implementar limite de itens por pedido
    - **Descrição:** Desenvolver a funcionalidade que imporá um limite máximo de 5 itens por pedido. Quando o limite máximo for atingido, os clientes não devem poder adicionar mais itens ao pedido.
    - **Tags:** Pedidos, Limitação
    - **Milestone:** Processo de Pedido

5. **Verificação de Disponibilidade de Itens:**

    - **Nome:** Implementar verificação de disponibilidade de itens
    - **Descrição:** Desenvolver a funcionalidade que verificará se cada item selecionado está disponível no estoque antes de confirmar o pedido. Se um item não estiver disponível, o sistema deve notificar o cliente e impedi-lo de adicioná-lo ao pedido.
    - **Tags:** Pedidos, Estoque
    - **Milestone:** Processo de Pedido

6. **Confirmação de Pagamento:**

    - **Nome:** Implementar confirmação de pagamento
    - **Descrição:** Desenvolver a funcionalidade que permitirá aos clientes confirmar o pagamento de seus pedidos, escolhendo entre os métodos de pagamento disponíveis: cartão de crédito, cartão de débito ou dinheiro.
    - **Tags:** Pagamento, Cliente
    - **Milestone:** Processo de Pedido

7. **Cálculo do Total do Pedido:**

    - **Nome:** Implementar cálculo do total do pedido
    - **Descrição:** Desenvolver a funcionalidade que calculará o valor total do pedido com base nos itens selecionados e seus respectivos preços.
    - **Tags:** Pedidos, Cálculo
    - **Milestone:** Processo de Pedido

8. **Processamento de Pedidos na Cozinha:**

    - **Nome:** Implementar processamento de pedidos na cozinha
    - **Descrição:** Desenvolver a funcionalidade que enviará automaticamente os pedidos confirmados à cozinha para processamento. O sistema deve registrar o status do pedido como "em preparo" durante o processamento na cozinha.
    - **Tags:** Pedidos, Cozinha
    - **Milestone:** Processamento de Pedidos

9. **Entrega de Pedidos:**

    - **Nome:** Implementar entrega de pedidos
    - **Descrição:** Desenvolver a funcionalidade que garantirá que os pedidos processados estejam prontos para entrega. Os pedidos entregues devem ser marcados como "entregues" no sistema.
    - **Tags:** Pedidos, Entrega
    - **Milestone:** Processamento de Pedidos

10. **Atualização de Pontos de Fidelidade:**

    - **Nome:** Implementar atualização de pontos de fidelidade
    - **Descrição:** Desenvolver a funcionalidade que permitirá aos clientes acumular pontos de fidelidade ao realizar pedidos, com base no valor total do pedido. Os pontos de fidelidade acumulados devem ser atualizados automaticamente na conta do cliente.
    - **Tags:** Pontos, Fidelidade, Cliente
    - **Milestone:** Retenção do Cliente

11. **Validação de Número de Telefone:**

    - **Nome:** Implementar validação de número de telefone
    - **Descrição:** Desenvolver a funcionalidade que validará o número de telefone fornecido pelo cliente durante o cadastro para garantir sua precisão. O número de telefone deve seguir um formato específico, como xx-xxxx-xxxx ou (xx) xxxx-xxxx.
    - **Tags:** Validação, Cliente
    - **Milestone:** Setup Inicial

12. **Notificação de Pedido Pronto:**

    - **Nome:** Implementar notificação de pedido pronto
    - **Descrição:** Desenvolver a funcionalidade que automaticamente notificará a equipe de entrega quando um pedido estiver pronto para entrega. A notificação deve incluir detalhes relevantes do pedido, como número do pedido e itens incluídos.
    - **Tags:** Notificação, Entrega
    - **Milestone:** Processamento de Pedidos

13. **Notificação de Pedido Entregue:**

    - **Nome:** Implementar notificação de pedido entregue
    - **Descrição:** Desenvolver a funcionalidade que automaticamente notificará os clientes quando seus pedidos forem entregues com sucesso. A notificação deve incluir detalhes relevantes do pedido, como número do pedido e lista de itens.
    - **Tags:** Notificação, Cliente
    - **Milestone:** Retenção do Cliente

14. **Atualização de Status de Pedido:**

    - **Nome:** Implementar atualização de status de pedido
    - **Descrição:** Desenvolver a funcionalidade que atualizará o status do pedido em tempo real para refletir seu progresso. Os possíveis status do pedido incluem "em preparo", "pronto para entrega" e "entregue".
    - **Tags:** Status, Pedidos
    - **Milestone:** Processamento de Pedidos

15. **Registro de Pedidos Anteriores:**
    - **Nome:** Implementar registro de pedidos anteriores
    - **Descrição:** Desenvolver a funcionalidade que manterá um registro detalhado de todos os pedidos anteriores para referência
