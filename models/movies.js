module.exports = (sequelize, DataTypes) => {
  return sequelize.define("movie", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
