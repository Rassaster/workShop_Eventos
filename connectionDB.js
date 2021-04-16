const Sequelize = require("sequelize");
const DB_PATH = "mysql://root:happy@localhost:3306/workshop"
const sequelize = new Sequelize(DB_PATH, {operatorsAliases: false});

sequelize.authenticate()
  .then(()=>{
    console.log("Te has conectado con la Base de Datos.");
  })
  .catch(err => {
    console.err("Ha habido un error de conexión con la Base de Datos: ", err);
  })
  .finally(()=>{
    sequelize.close();
  });


module.exports = sequelize;