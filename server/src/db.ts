const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "test",
  database: "ticket",
  port: 5432,
});

module.exports = pool;