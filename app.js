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
  let verificacion = verificarUsuario(NOMBRE_USUARIO, 2);
  if (verificacion === false) {
    let msg = "El usuario no existe.";
    console.log(msg);
    res.send(msg);
  }
  else {
    let msg = "Usuario verificado con éxito.";
    console.log(msg);
    res.send(msg);  }
})

app.listen(PUERTO, () => {
  console.log("Servidor en 3000.")
});