const sequelize = require("./connectionDB");


const verificarUsuario = async (username, password) => {
  sequelize.query("SELECT * FROM personas WHERE NOMBRE_USUARIO = ? and PASSWORD = ?", {
    replacements: [username, password],
    type: sequelize.QueryTypes.SELECT
  })
  .then(data => {
    if (data.length === 0) {
      return false;
    }
    else {
      return true;
    }
  })
  .catch(err => {
    console.log("Ha ocurrido un error: ", err);
  })
};

module.exports = { verificarUsuario };