const jwt = require("jsonwebtoken");
const { JWT_CLAVE } = require("./config");
const opciones = {expireIn: "1h"};

const crearToken = (datos) => {
  jwt.sign(datos, JWT_CLAVE, opciones);
}

module.exports = { crearToken };