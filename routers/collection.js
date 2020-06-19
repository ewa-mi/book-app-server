const { Router } = require("express");
const Collection = require("../models").collection;
const User = require("../models").user;

const auth = require("../auth/middleware");

const router = new Router();

router.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const collections = await Collection.findAll({
      where: {
        userId: id,
      },
      include: [User],
    });
    return res.send(collections);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong" });
  }
});

router.post("/post", auth, async (req, res) => {
  try {
    const { userId, name } = req.body;

    await Collection.create({
      userId: userId,
      name: name,
    });
    const coll = await Collection.findAll();
    return res.status(200).send(coll);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong" });
  }
});

module.exports = router;
