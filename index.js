const express = require("express");
const app = express();
const authRouter = require("./routers/auth");
const { PORT } = require("./config/constants");
const cors = require("cors");
const loggerMiddleWare = require("morgan");
const bodyParserMiddleWare = express.json();
const bookscollectionRouter = require("./routers/bookscollection");
const userRouter = require("./routers/user");
const collectionRouter = require("./routers/collection");
const reviewRouter = require("./routers/review");

app.use(loggerMiddleWare("dev"));
app.use(bodyParserMiddleWare);
app.use(cors());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use("/collection", collectionRouter);
app.use("/bookscollection", bookscollectionRouter);
app.use("/user", userRouter);
app.use("/review", reviewRouter);
app.use("/", authRouter);

app.listen(PORT, console.log(`server running on ${PORT}`));
