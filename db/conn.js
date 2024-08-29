const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("crud_nodejs", "root", "root", {
  host: "localhost",
  port: 3307,
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectado com o banco de dados");
} catch (err) {
  console.log(err);
}

module.exports = sequelize;
