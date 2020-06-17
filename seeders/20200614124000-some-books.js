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
          image: "https://m.media-amazon.com/images/I/51LHuC+7JuL.jpg",
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
            "https://i.pinimg.com/236x/d2/4e/a2/d24ea20245caf590fdf2458fe441cfa4--book-challenge-reading-challenge.jpg",
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
            "https://bookmust.files.wordpress.com/2013/07/655_595lem-solaris-book-cover.jpg",
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
            "https://cdn.collider.com/wp-content/uploads/2011/02/ubik-book-cover-01.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "History of Modern Vietnam",
          author: "Christopher Goscha",
          ISBN: 103922013,
          kind: "non-fiction",
          description: "stupens monstrat foris",
          image:
            "https://qph.fs.quoracdn.net/main-qimg-34dd2e9414c44d64f99c052b523ba5ea",
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
