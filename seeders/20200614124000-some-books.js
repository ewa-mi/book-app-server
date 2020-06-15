"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "books",
      [
        {
          title: "Hunger",
          author: "Knut Hamsun",
          ISBN: 127642096,
          kind: "fiction",
          description: "lorem ipsum dolor sed amet",
          image:
            "https://i.picsum.photos/id/403/200/300.jpg?hmac=kgUsxOWk-ud5wENU54rY-VyaYzYYrlr4aoA3LhcG2Dc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Trial",
          author: "Franz Kafka",
          ISBN: 123642082,
          kind: "fiction",
          description: "ista que spectatur",
          image:
            "https://i.picsum.photos/id/536/200/300.jpg?hmac=emqhVKhR4nH8HnJQlumZfZBLPCgSkpGqQA-_Ypt55eo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Solaris",
          author: "Stanislaw Lem",
          ISBN: 193602080,
          kind: "fiction",
          description: "ad que consistitur",
          image:
            "https://i.picsum.photos/id/452/200/300.jpg?hmac=GNRw9M4S7sR7m03kJ-vBNG4vr5gFJpy7T54vSqBA06E",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ubik",
          author: "Philip Dick",
          ISBN: 123902073,
          kind: "fiction",
          description: "que alter alteri",
          image:
            "https://i.picsum.photos/id/406/200/300.jpg?hmac=hL72xK7v5nIaSK6F5XcGWjvxXslx72ZNRshXUAci5Bc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Vietnam War",
          author: "John Collins",
          ISBN: 103922013,
          kind: "non-fiction",
          description: "stupens monstrat foris",
          image:
            "https://i.picsum.photos/id/903/200/300.jpg?hmac=bT2dTWTFYT3TyM7cBatAwmhTtJuzlHBXtqn_kH-z3lU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("books", null, {});
  },
};
