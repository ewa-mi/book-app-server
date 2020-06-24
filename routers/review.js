const { Router } = require("express");
const BooksCollection = require("../models").booksCollection;
const Review = require("../models").review;
const Book = require("../models").book;
const User = require("../models").user;
const Collection = require("../models").collection;

const auth = require("../auth/middleware");

const router = new Router();

router.post("/post", auth, async (req, res) => {
  const { reviewTitle, reviewContent, bookId, collectionId } = req.body;
  if (!reviewTitle && !reviewContent) {
    return res
      .status(400)
      .send({ message: "Please provide review title and content" });
  }
  try {
    await Review.create({
      title: reviewTitle,
      content: reviewContent,
      likes: 0,
    });

    const latestReview = await Review.findOne({
      order: [["id", "DESC"]],
    });

    await BooksCollection.update(
      { reviewId: latestReview.id },
      {
        where: {
          collectionId: collectionId,
          bookId: bookId,
        },
      }
    );

    const booksCollection = await BooksCollection.findAll({
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

    return res.status(200).send(booksCollection);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong" });
  }
});

router.patch("/likes", async (req, res) => {
  try {
    const { id, likes } = req.body;

    await Review.update(
      {
        likes: likes,
      },
      { where: { id } }
    );

    const booksCollection = await BooksCollection.findAll({
      where: {
        reviewId: id,
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

    return res.status(200).send(booksCollection);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong" });
  }
});

module.exports = router;
