const mysql = require("mysql2/promise.js");
require("dotenv").config()

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
})

async function connectToDB() {
  return await db.getConnection()
    .then(result => console.log("Connect succeed"))
    .catch(err => console.error("Connect failed with the error: ", err))
}

module.exports = {
  connectToDB,
  db,
}