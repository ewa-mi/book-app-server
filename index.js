const express = require("express");
const app = express();
const { PORT } = require("./config/constants");
const cors = require("cors");
const bookscollectionRouter = require("./routers/bookscollection");
const userRouter = require("./routers/user");

app.use(cors());

// app.use(express.json());

app.use("/bookscollection", bookscollectionRouter);
app.use("/user", userRouter);

app.listen(PORT, console.log(`server running on ${PORT}`));
