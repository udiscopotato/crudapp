import { createPool } from "mysql2/promise";

var mysqlhost = process.env.MYSQL_HOST || 'customer.cwowl7yn35i4.us-east-1.rds.amazonaws.com';
var mysqluser = process.env.MYSQL_USER || 'admin';
var mysqlpassword = process.env.MYSQL_PASSWORD || "bapun123";

export const pool = createPool({
  host: mysqlhost,
  user: mysqluser,
  password: mysqlpassword,
  port: 3306,
  database: "customersdb",
});


