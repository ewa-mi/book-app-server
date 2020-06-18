const express = require("express");
const app = express();
const authRouter = require("./routers/auth");
const { PORT } = require("./config/constants");
const cors = require("cors");
const bodyParserMiddleWare = express.json();
const bookscollectionRouter = require("./routers/bookscollection");
const userRouter = require("./routers/user");

app.use(bodyParserMiddleWare);
app.use(cors());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use("/bookscollection", bookscollectionRouter);
app.use("/user", userRouter);
app.use("/", authRouter);

app.listen(PORT, console.log(`server running on ${PORT}`));
