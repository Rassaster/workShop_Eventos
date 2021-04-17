const sequelize = require("./connectionDB");


const verificarUsuario = async (username, password) => {
  sequelize.query("SELECT * FROM personas WHERE NOMBRE_USUARIO = ? and PASSWORD = ?", {
    replacements  : [username, password],
    type: sequelize.QueryTypes.SELECT
  })
  .then(data => {
    console.table(data);
    return data;
  })
  .catch(err => {
    console.log("Ha ocurrido un error: ", err);
  })
};

module.exports = { verificarUsuario };