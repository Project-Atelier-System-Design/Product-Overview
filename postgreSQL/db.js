require("dotenv").config();
const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

pool.connect()
.then(() => {
    console.log('\x1b[33m%s\x1b[0m', 'CONNECTED TO DATABASE');
})
.catch(err => console.error(err.message));

module.exports = pool;
