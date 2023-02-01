const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Sprinkle06",
  host: "localhost",
  port: "5432",
  database: "pernwatchlist"
});

module.exports = pool