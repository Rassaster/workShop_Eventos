const express = require("express");
const expressJWT = require("express-jwt");
const expresRateLimit = require("express-rate-limit");
const { JWT_CLAVE, PUERTO } = require("./config");
const {verificarUsuario} = require("./usuario");
const app = express();

app.use(
  expressJWT({ secret: JWT_CLAVE, algorithms: ["HS256"] }).unless({
    path: ["/usuarios/login"]
  })
);


app.post("/usuarios/login", (req, res) => {
  console.log("ENTRE")
  // const { NOMBRE_USUARIO, PASSWORD } = req.body;
  let nom = req.body.NOMBRE_USUARIO;
  let pas = req.body.PASSWORD;
  verificarUsuario(nom, pas)
  .then(data => {
    console.table(data);
    return data;
  })
  .catch(err => {
    console.log("Ha ocurrido un error: ", err);
  })
})

app.listen(PUERTO, () => {
  console.log("Servidor en 3000.")
});