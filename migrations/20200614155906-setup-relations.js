"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("booksCollections", "collectionId", {
      type: Sequelize.INTEGER,
      references: {
        model: "collections",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("collections", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("booksCollections", "bookId", {
      type: Sequelize.INTEGER,
      references: {
        model: "books",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("booksCollections", "reviewId", {
      type: Sequelize.INTEGER,
      references: {
        model: "reviews",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("collections", "userId");
    await queryInterface.removeColumn("booksCollections", "collectionId");
    await queryInterface.removeColumn("booksCollections", "bookId");
    await queryInterface.removeColumn("booksCollections", "reviewId");
  },
};
