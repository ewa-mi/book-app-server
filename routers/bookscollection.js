const { Router } = require("express");
const BooksCollection = require("../models").booksCollection;
const Book = require("../models").book;
const Review = require("../models").review;
const User = require("../models").user;
const Collection = require("../models").collection;

const auth = require("../auth/middleware");

const router = new Router();

router.get("/", (req, res, next) => {
  const limit = Math.min(parseInt(req.query.limit) || 25, 500);
  const offset = parseInt(req.query.offset) || 0;

  BooksCollection.findAndCountAll({
    order: [["reviewId", "DESC"]],
    include: [
      {
        model: Book,
      },
      {
        model: Review,
      },
      {
        model: Collection,
        include: [
          {
            model: User,
          },
        ],
      },
    ],
    limit,
    offset,
  })
    .then((result) =>
      res.send({ bookscollections: result.rows, total: result.count })
    )
    .catch((error) => next(error));
});

router.get("/collection/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const booksCollections = await BooksCollection.findAll({
      where: {
        collectionId: id,
      },
      include: [Book, Collection],
    });
    return res.send(booksCollections);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong" });
  }
});

router.get("/book/:collectionId/:bookId", async (req, res) => {
  try {
    const collectionId = req.params.collectionId;
    const bookId = req.params.bookId;

    const booksCollections = await BooksCollection.findOne({
      where: {
        collectionId: collectionId,
        bookId: bookId,
      },
      include: [
        {
          model: Book,
        },
        {
          model: Review,
        },
        {
          model: Collection,
          include: [
            {
              model: User,
            },
          ],
        },
      ],
    });
    return res.send(booksCollections);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong" });
  }
});

router.post("/post", auth, async (req, res) => {
  const {
    title,
    author,
    image,
    isbn,
    category,
    description,
    rating,
    userId,
    collectionId,
  } = req.body;

  if (!title || !author || !image) {
    return res
      .status(400)
      .send({ message: "Please provide at least title, author and url image" });
  }

  try {
    await Book.create({
      title: title,
      author: author,
      image: image,
      ISBN: parseInt(isbn),
      category: category,
      description: description,
    });

    const latestBook = await Book.findOne({
      order: [["id", "DESC"]],
    });

    await BooksCollection.create({
      userId: userId,
      bookId: latestBook.id,
      collectionId: collectionId,
      rating: parseInt(rating),
    });

    const booksCollection = await BooksCollection.findAll({
      where: {
        collectionId: collectionId,
      },
      include: [Book, Collection],
    });

    return res.status(200).send(booksCollection);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong" });
  }
});

module.exports = router;
