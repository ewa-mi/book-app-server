"use strict";
module.exports = (sequelize, DataTypes) => {
  const collection = sequelize.define(
    "collection",
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  collection.associate = function (models) {
    collection.hasMany(models.booksCollection);
    collection.belongsTo(models.user);
  };
  return collection;
};
