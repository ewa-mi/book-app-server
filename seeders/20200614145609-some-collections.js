"use strict";
const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({
      where: { email: "ewa@ewa.com" },
    });

    const user2 = await User.findOne({
      where: { email: "kate@kate.com" },
    });

    return queryInterface.bulkInsert(
      "collections",
      [
        {
          name: "My favourite books",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user1.id,
        },
        {
          name: "Kate's books",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user2.id,
        },
        {
          name: "European literature",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user2.id,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("collections", null, {});
  },
};
