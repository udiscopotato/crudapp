import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "customer.cwowl7yn35i4.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "bapun123",
  port: 3306,
  database: "customersdb",
});
