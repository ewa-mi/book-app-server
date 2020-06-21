"use strict";
module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define(
    "book",
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      ISBN: DataTypes.INTEGER,
      category: DataTypes.STRING,
      description: DataTypes.STRING(65535),
      image: DataTypes.STRING,
    },
    {}
  );
  book.associate = function (models) {
    book.hasMany(models.booksCollection);
  };
  return book;
};
