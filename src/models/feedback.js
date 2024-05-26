"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Feedbacks extends Model {
    static associate(models) {
      // Sửa lại quan hệ với bảng DetailTours
      this.belongsTo(models.DetailTours, { foreignKey: "id_tour", as: "tour" });
    }
  }
  Feedbacks.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      id_tour: {
        type:DataTypes.INTEGER,
        references: {
          model: "DetaiTours",
          key: "id",
        },
      },
      rate: DataTypes.INTEGER,
      day: DataTypes.STRING,
      note: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Feedbacks",
    }
  );
  return Feedbacks;
};
