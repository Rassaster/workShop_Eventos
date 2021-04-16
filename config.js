const dotenv = require("dotenv").config();

const JWT_CLAVE = process.env.CLAVE_JWT;
const PUERTO = process.env.PUERTO;
const DB_PATH = process.env.DB_PATH;
module.exports = {
  JWT_CLAVE,
  PUERTO,
  DB_PATH
};