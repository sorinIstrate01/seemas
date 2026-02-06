import { Pool } from "pg";

/* ────────────── util: create database if it doesn't exist ──────────── */
async function ensureDatabase() {
  const { RDS_HOSTNAME, RDS_PORT, RDS_USERNAME, RDS_PASSWORD, RDS_DBNAME } =
    process.env;

  // Connect to the default "postgres" database first
  const adminPool = new Pool({
    host: RDS_HOSTNAME,
    port: Number(RDS_PORT || 5432),
    user: RDS_USERNAME,
    password: RDS_PASSWORD,
    database: "postgres",
    ssl: { rejectUnauthorized: false },
    max: 2,
  });

  // Does it already exist?
  const res = await adminPool.query(
    `SELECT 1 FROM pg_database WHERE datname = $1`,
    [RDS_DBNAME]
  );
  if (res.rowCount === 0) {
    await adminPool.query(
      `CREATE DATABASE "${RDS_DBNAME}" OWNER "${RDS_USERNAME}"`
    );
    console.log(`🆕 Created database ${RDS_DBNAME}`);
  }
  await adminPool.end();
}

/* ─────────────────── pool singleton for application DB ─────────────── */
let pool: Pool;
export enum Tables {
  book_demo = "book_demo",
  mailing_list = "mailing_list",
}
const tablesMap: Record<Tables, string> = {
  [Tables.book_demo]: `
    CREATE TABLE IF NOT EXISTS ${Tables.book_demo} (
      id         UUID PRIMARY KEY,
      first_name VARCHAR(100) NOT NULL,
      last_name  VARCHAR(100) NOT NULL,
      email      VARCHAR(255) UNIQUE NOT NULL,
      phone      VARCHAR(50),
      message    TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `,
  [Tables.mailing_list]: `
    CREATE TABLE IF NOT EXISTS ${Tables.mailing_list} (
      id         UUID PRIMARY KEY,
      email      VARCHAR(255) UNIQUE NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `,
};
export async function getPool(table: Tables): Promise<Pool> {
  if (pool) return pool;

  await ensureDatabase(); // ← one‑time, idempotent

  const { RDS_HOSTNAME, RDS_PORT, RDS_USERNAME, RDS_PASSWORD, RDS_DBNAME } =
    process.env;

  pool = new Pool({
    host: RDS_HOSTNAME,
    port: Number(RDS_PORT || 5432),
    user: RDS_USERNAME,
    password: RDS_PASSWORD,
    database: RDS_DBNAME,
    ssl: { rejectUnauthorized: false },
    max: 5,
  });

  await pool.query(tablesMap[table]);

  return pool;
}
