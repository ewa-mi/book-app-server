"use strict";
const Book = require("../models").book;
const Collection = require("../models").collection;
const Review = require("../models").review;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const collection1 = await Collection.findOne({
      where: { name: "My favourite books" },
    });

    const collection2 = await Collection.findOne({
      where: { name: "Kate's books" },
    });

    const collection3 = await Collection.findOne({
      where: { name: "European literature" },
    });

    const book1 = await Book.findOne({
      where: { ISBN: 127642096 },
    });

    const book2 = await Book.findOne({
      where: { ISBN: 123642082 },
    });

    const book3 = await Book.findOne({
      where: { ISBN: 193602080 },
    });

    const book4 = await Book.findOne({
      where: { ISBN: 123902073 },
    });

    const book5 = await Book.findOne({
      where: { ISBN: 103922013 },
    });
    const review1 = await Review.findOne({
      where: { title: "Honest opinion on sci-fi" },
    });

    const review2 = await Review.findOne({
      where: { title: "Kafka's world review" },
    });

    const review3 = await Review.findOne({
      where: { title: "Short review of Trial" },
    });
    return await queryInterface.bulkInsert(
      "booksCollections",
      [
        {
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
          collectionId: collection1.id,
          bookId: book1.id,
          reviewId: null,
        },
        {
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
          collectionId: collection1.id,
          bookId: book2.id,
          reviewId: review2.id,
        },
        {
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
          collectionId: collection2.id,
          bookId: book1.id,
          reviewId: null,
        },
        {
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
          collectionId: collection2.id,
          bookId: book5.id,
          reviewId: null,
        },
        {
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          collectionId: collection3.id,
          bookId: book2.id,
          reviewId: review3.id,
        },
        {
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
          collectionId: collection3.id,
          bookId: book4.id,
          reviewId: review1.id,
        },
        {
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          collectionId: collection3.id,
          bookId: book3.id,
          reviewId: null,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("booksCollections", null, {});
  },
};
