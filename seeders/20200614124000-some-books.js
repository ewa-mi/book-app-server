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
          category: "fiction",
          description:
            "Ut enim ad minima veniam. Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Lorem ipsum dolor sed amet.",
          image: "https://m.media-amazon.com/images/I/51LHuC+7JuL.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Trial",
          author: "Franz Kafka",
          ISBN: 123642082,
          category: "fiction",
          description:
            "Ista que spectatur debitis aut rerum. Et necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic.",
          image:
            "https://i.pinimg.com/236x/d2/4e/a2/d24ea20245caf590fdf2458fe441cfa4--book-challenge-reading-challenge.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Solaris",
          author: "Stanislaw Lem",
          ISBN: 193602080,
          category: "fiction",
          description:
            "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo. Sad que consistitur.",
          image:
            "https://bookmust.files.wordpress.com/2013/07/655_595lem-solaris-book-cover.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ubik",
          author: "Philip Dick",
          ISBN: 123902073,
          category: "fiction",
          description:
            "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id.",
          image:
            "https://cdn.collider.com/wp-content/uploads/2011/02/ubik-book-cover-01.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "History of Modern Vietnam",
          author: "Christopher Goscha",
          ISBN: 103922013,
          category: "non-fiction",
          description: "Lorem ipsum, dolor. Et stupens monstrat foris.",
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
