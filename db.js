const Sequelize = require("sequelize");

const sequelize = new Sequelize("netflix", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.authenticate().then(
  () => console.log("Connected to postgres DB"),
  (err) => console.log(err)
);

module.exports = sequelize;
