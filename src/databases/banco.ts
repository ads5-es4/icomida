import { config } from "dotenv";
import { Client } from "pg";
import sqlite3 from "sqlite3";

// Carregar variáveis de ambiente do arquivo .env
config();

// Conectar ao PostgreSQL
const pgClient = new Client({
	connectionString: process.env.DATABASE_URL,
});
pgClient
	.connect()
	.then(() => console.log("Conectado ao PostgreSQL"))
	.catch((err) => console.error("Erro ao conectar ao PostgreSQL", err));

// Conectar ao SQLite
const sqliteDb = new sqlite3.Database(process.env.SQLITE_DB_PATH, (err) => {
	if (err) {
		console.error("Erro ao conectar ao SQLite", err);
	} else {
		console.log("Conectado ao SQLite");
	}
});

// Exemplo de consulta ao PostgreSQL
pgClient.query("SELECT NOW()", (err, res) => {
	if (err) {
		console.error("Erro ao executar consulta no PostgreSQL", err);
	} else {
		console.log("Resultado da consulta ao PostgreSQL:", res.rows);
	}
	pgClient.end();
});

// Exemplo de consulta ao SQLite
sqliteDb.serialize(() => {
	sqliteDb.each("SELECT name FROM example_table", (err, row) => {
		if (err) {
			console.error("Erro ao executar consulta no SQLite", err);
		} else {
			console.log("Resultado da consulta ao SQLite:", row.name);
		}
	});
	sqliteDb.close();
});
