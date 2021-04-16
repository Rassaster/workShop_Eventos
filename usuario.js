const sequelize = require("./connectionDB");


const verificarUsuario = (username, password) => {
  sequelize.query("SELECT * FROM personas WHERE username = ? and password = ?", {
    replacement: [username, password],
    type: sequelize.QueryTypes.SELECT
  })
};

module.export = { verificarUsuario };