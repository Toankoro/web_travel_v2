"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class DetailToursTourDestinations extends Model {
    static associate(models) {
      // Khai báo các mối quan hệ ở đây nếu cần
    }
  }
  DetailToursTourDestinations.init(
    {
      DetailTourId: {
        type: DataTypes.INTEGER,
        references: {
          model: "DetaiTours",
          key: "id",
        },
      },
      TourDestinationId: {
        type: DataTypes.INTEGER,
        references: {
          model: "TourDestinations",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "DetailToursTourDestinations",
    }
  );
  return DetailToursTourDestinations;
};
