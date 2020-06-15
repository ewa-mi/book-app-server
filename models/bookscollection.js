"use strict";
module.exports = (sequelize, DataTypes) => {
  const booksCollection = sequelize.define(
    "booksCollection",
    {
      rating: DataTypes.INTEGER,
    },
    {}
  );
  booksCollection.associate = function (models) {
    booksCollection.belongsTo(models.collection);
    booksCollection.belongsTo(models.book);
    booksCollection.belongsTo(models.review);
  };
  return booksCollection;
};
