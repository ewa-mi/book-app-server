"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "reviews",
      [
        {
          title: "Honest opinion on sci-fi",
          content: "Some review goes here",
          likes: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kafka's world review",
          content: "Some text is here",
          likes: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Short review of Trial",
          content: "Some text is here",
          likes: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("reviews", null, {});
  },
};
