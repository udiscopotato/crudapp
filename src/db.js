import { createPool } from "mysql2/promise";

var mysqlhost = process.env.MYSQL_HOST || '127.0.0.1';
var mysqluser = process.env.MYSQL_USER || 'root';
var mysqlpassword = process.env.MYSQL_PASSWORD || "bapun123";

export const pool = createPool({
  host: mysqlhost,
  user: mysqluser,
  password: mysqlpassword,
  port: 3306,
  database: "customersdb",
});


