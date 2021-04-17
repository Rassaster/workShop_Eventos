const express = require("express");
const expressJWT = require("express-jwt");
const expresRateLimit = require("express-rate-limit");
const { JWT_CLAVE, PUERTO } = require("./config");
const {verificarUsuario} = require("./usuario");
const app = express();

app.use(express.json());

app.use(expressJWT (
  { secret: JWT_CLAVE, algorithms: ["HS256"] 
  })
  .unless({path: ["/usuarios/login"]})
);

app.post("/usuarios/login", (req, res) => {
  const { NOMBRE_USUARIO, PASSWORD } = req.body;
  console.log(NOMBRE_USUARIO, PASSWORD);
  verificarUsuario(NOMBRE_USUARIO, PASSWORD);
})

app.listen(PUERTO, () => {
  console.log("Servidor en 3000.")
});