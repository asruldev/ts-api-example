import { createPool } from "mysql2";

export const dbConfig = createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "go_fiber",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});