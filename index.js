const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.listen(PORT, console.log(`server running on ${PORT}`));
