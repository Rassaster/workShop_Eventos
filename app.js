const express = require("express");
const expresJWT = require("express-jwt");
const expresRateLimit = require("express-rate-limit")
const { JWT_CLAVE, PUERTO } = require("./config")


const app = express();

app.listen(PUERTO, () => {
  console.log("Servidor en 3000.")
})