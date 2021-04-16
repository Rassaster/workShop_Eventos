const dotenv = require("dotenv").config();

const JWT_CLAVE = process.env.CLAVE_JWT;
const PUERTO = process.env.PUERTO;
module.exports = {
  JWT_CLAVE,
  PUERTO
};