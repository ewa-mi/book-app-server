"use strict";
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define(
    "review",
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      likes: DataTypes.INTEGER,
    },
    {}
  );
  review.associate = function (models) {
    review.hasOne(models.booksCollection);
  };
  return review;
};
