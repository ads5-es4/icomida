Feature: Login do Usuário
	Como um usuário
	Quero poder fazer login
	Para que eu possa acessar minha conta

	Scenario: Login bem-sucedido
		Given que um usuário com email "user@example.com" e senha "password123" existe
		When o usuário tenta fazer login com email "user@example.com" e senha "password123"
		Then o usuário deve ser logado com sucesso

	Scenario: Login falhou
		Given que um usuário com email "user01@example.com" e senha "password123" existe
		When o usuário tenta fazer login com email "user@example.com" e senha "wrongpassword"
		Then o usuário deve ver uma mensagem de erro "Credenciais inválidas"