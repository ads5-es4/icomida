import { config } from "dotenv";
import { Pool } from "pg";
import sqlite3, { Database } from "sqlite3";

// Carregar variáveis de ambiente do arquivo .env
config();

let db: sqlite3.Database;
let pool: Pool;

export async function getDatabaseInFile(): Promise<sqlite3.Database> {
	if (!db) {
		db = new Database("database.sqlite");
	}
	return db;
}

export async function getDatabase(): Promise<Pool> {
	if (!pool) {
		pool = new Pool({
			database: process.env.DB_NAME,
			user: process.env.DB_USER,
			host: process.env.DB_HOST,
			password: process.env.DB_PASSWORD,
			port: parseInt(process.env.DB_PORT || "5432", 10),
		});
	}
	return pool;
}
