"use strict";
module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define(
    "book",
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      ISBN: DataTypes.INTEGER,
      kind: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {}
  );
  book.associate = function (models) {
    book.hasMany(models.booksCollection);
  };
  return book;
};
