"use strict";
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define(
    "review",
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING(65535),
      likes: DataTypes.INTEGER,
    },
    {}
  );
  review.associate = function (models) {
    review.hasOne(models.booksCollection);
  };
  return review;
};
